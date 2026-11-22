"""Build the four-week menu supplement from captured SFU research responses.

Run from the repository root after extracting the public menus. Original dated
menus and their app labels/categories are preserved. Research inputs live in
.dev/artifacts/nutrition-extraction and .dev/artifacts/sfu-dining-report.
"""
import ast
import copy
import hashlib
import json
import re
import subprocess
import unicodedata
from collections import defaultdict
from datetime import date
from pathlib import Path

WORKSPACE = Path(__file__).resolve().parents[2]
RESEARCH = WORKSPACE / '.dev/artifacts/nutrition-extraction'
CLASSIFICATION = WORKSPACE / '.dev/artifacts/sfu-dining-report'
OUTPUT = WORKSPACE / 'app/src/data'
ANCHOR = date(2026, 10, 26)
STATIONS = {'RISE AND DINE':'rise-and-dine','CREATE':'create','LEAF MARKET':'leaf-market','GLOBAL EATS':'global-eats','THE SPROUT':'sprout','SPOONS AND LADLES':'spoons-and-ladles','THE STACKS':'stacks','THE HOT PLATE (TEPPANYAKI)':'hot-plate','YIN AND YUM':'yin-and-yum','FRESH BOWL':'fresh-bowl','NORI':'nori','GRILL HOUSE':'grill-house','AL FORNO':'al-forno','SWEET TREATS':'sweet-treats'}

def norm(value):
    return re.sub(r'\s+', ' ', str(value or '')).strip().casefold()

def read(path):
    return json.loads(path.read_text(encoding='utf-8'))

def signature(item):
    fields = {k:item.get(k) for k in ('name','portion','calories','ingredients','mrnFull','customAllergens')}
    fields['nutrients'] = sorted([{k:n.get(k) for k in ('name','value','uom')} for n in item.get('nutrients',[])], key=lambda n:n['name'])
    return hashlib.sha256(json.dumps(fields, sort_keys=True, ensure_ascii=False).encode()).hexdigest()[:16]

def helper_namespace(path, functions, assignments=()):
    tree = ast.parse(path.read_text(encoding='utf-8'))
    nodes = [node for node in tree.body if (isinstance(node,ast.FunctionDef) and node.name in functions)
             or (isinstance(node,ast.Assign) and any(isinstance(t,ast.Name) and t.id in assignments for t in node.targets))]
    namespace = {'re':re}
    exec(compile(ast.Module(body=nodes,type_ignores=[]), str(path), 'exec'), namespace)
    return namespace

def main():
    command = "const fs=require('fs'),vm=require('vm');const c={window:{}};vm.createContext(c);for(const f of ['breakfast','main-meals'])vm.runInContext(fs.readFileSync('app/src/data/'+f+'.js','utf8'),c);process.stdout.write(JSON.stringify(c.window.nutritionMenus));"
    app = json.loads(subprocess.run(['node','-e',command],cwd=WORKSPACE,check=True,capture_output=True,encoding='utf-8').stdout)
    categorizer = helper_namespace(CLASSIFICATION/'build_main_menus.py', {'has','sauce','category'}, {'LABELS'})
    classifier = helper_namespace(CLASSIFICATION/'build_food_filters.py', {'normalize','classify'})
    breakfast = read(RESEARCH/'daily-source.json') + read(RESEARCH/'earlier-two-weeks-source.json')
    raw_days = [{**d,'meal':'breakfast'} for d in breakfast] + read(RESEARCH/'main-meals-source.json')
    known_categories = {}; known_metadata = {}; name_ids = {}; catalogs = {}; additions = {m:{} for m in app}
    for meal,data in app.items():
        catalogs[meal] = copy.deepcopy(data['catalog'])
        name_ids[meal] = {norm(v['sourceName']):k for k,v in data['catalog'].items()}
        for day,menu in data['days'].items():
            for station,entries in menu['stations'].items():
                for entry in entries:
                    name = data['catalog'][entry['food']]['sourceName']
                    key = (meal,station,norm(name))
                    known_categories[key] = entry.get('category') or data['catalog'][entry['food']].get('category')
                    known_metadata[(meal,day,station,norm(name),norm(entry['serving']))] = entry
    records = {}; lookup = defaultdict(dict); all_days = {m:{} for m in app}; unpublished = set()
    for raw in sorted(raw_days,key=lambda d:(d['date'],d['meal'])):
        meal = raw['meal'].title(); day = raw['date']; source = raw.get('menu') or {}
        categories = source.get('period',{}).get('categories',[])
        if not categories:
            unpublished.add(day); continue
        stations = {}
        for cat in categories:
            station = STATIONS[cat['name'].strip().upper()]; entries = []; seen = set()
            for item in cat['items']:
                name = item['name']; portion = item['portion']; variant = signature(item)
                lookup[(meal,day,station,norm(name),norm(portion))][variant] = item
                records[variant] = {'name':name.strip(),'portion':portion,'calories':item['calories'],'ingredients':item.get('ingredients') or None,'nutrients':[[n['name'],n.get('value'),n.get('uom','')] for n in item.get('nutrients',[])],'allergens':sorted({f['name'].removeprefix('Contains ') for f in item.get('filters',[]) if f['name'].startswith('Contains ')})}
                if (norm(name),norm(portion)) in seen: continue
                seen.add((norm(name),norm(portion)))
                identifier = name_ids[meal].get(norm(name))
                if identifier is None:
                    ascii_name = unicodedata.normalize('NFKD',name).encode('ascii','ignore').decode()
                    identifier = re.sub(r'[^a-z0-9]+','-',ascii_name.lower()).strip('-')
                    if identifier in catalogs[meal] and norm(catalogs[meal][identifier]['sourceName']) != norm(name):
                        identifier += '-' + hashlib.sha256(name.encode()).hexdigest()[:8]
                    label = categorizer['LABELS'].get(name,name)
                    details = {'name':re.sub(r'\s+',' ',label).strip(),'sourceName':name}
                    catalogs[meal][identifier] = details; additions[meal][identifier] = details
                    name_ids[meal][norm(name)] = identifier
                original = known_metadata.get((meal,day,station,norm(name),norm(portion)))
                if original:
                    entry = copy.deepcopy(original)
                else:
                    category = known_categories.get((meal,station,norm(name)))
                    if not category:
                        if meal != 'Breakfast':category = categorizer['category'](station,name)
                        elif any(word in norm(name) for word in ('danish','muffin','bread','scone','loaf')):category = 'Bakery'
                        else:category = 'Breakfast dishes'
                    metadata = classifier['classify']({**item,'filters':[f['name'] for f in item.get('filters',[])]})
                    entry = {'food':identifier,'serving':portion,'category':category,**metadata}
                entry['nutritionId'] = variant
                entries.append(entry)
            stations[station] = entries
        # Preserve the app's original grouping and ordering on dates already shipped.
        menu = copy.deepcopy(app[meal]['days'].get(day,{'source':f'https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/{day}/{meal.lower()}','stations':stations}))
        all_days[meal][day] = menu
    bindings = {}
    for meal,data in app.items():
        for day,menu in data['days'].items():
            for station,entries in menu['stations'].items():
                for entry in entries:
                    name = data['catalog'][entry['food']]['sourceName']
                    matches = lookup[(meal,day,station,norm(name),norm(entry['serving']))]
                    assert len(matches)==1,(meal,day,station,name,entry['serving'])
                    key = json.dumps([day,meal,station,entry['food'],entry['serving']],ensure_ascii=False,separators=(',',':'))
                    bindings[key] = next(iter(matches))
    extra_days = {m:{d:menu for d,menu in days.items() if d not in app[m]['days']} for m,days in all_days.items()}
    templates = {}
    for meal,days in all_days.items():
        phases = [None]*28
        for day in sorted(days): phases[(date.fromisoformat(day)-ANCHOR).days%28] = day
        templates[meal] = phases
    # The one observed substitution: preserve historical dates and alternate the
    # entire station on projected repeats, so accompanying portions stay coherent.
    specials = {'Dinner':{'17':{'grill-house':{'anchorCycle':0,'variants':[
        {'sourceDate':'2026-11-12','entries':all_days['Dinner']['2026-11-12']['stations']['grill-house']},
        {'sourceDate':'2026-10-15','entries':all_days['Dinner']['2026-10-15']['stations']['grill-house']},
    ]}}}}
    supplement = {'anchorDate':ANCHOR.isoformat(),'periodDays':28,'unpublishedDates':sorted(unpublished),'templates':templates,'specials':specials,'menus':{m:{'catalog':additions[m],'days':extra_days[m]} for m in app}}
    (OUTPUT/'menu-cycle-data.js').write_text('// Observed SFU menus supplementing November 2-21; missing slots are not invented.\nwindow.nutritionCycle = '+json.dumps(supplement,ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')
    (OUTPUT/'nutrition.js').write_text('// Published SFU nutrition matched to source date, meal, station, food and portion.\n// Cycle projections retain the original source nutrition, including missing values.\nwindow.nutritionFacts = '+json.dumps({'records':records,'bindings':bindings},ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')
    report = {'periodDays':28,'anchorDate':ANCHOR.isoformat(),'publishedDays':{m:len(d) for m,d in all_days.items()},'newPublishedDays':{m:len(d) for m,d in extra_days.items()},'newCatalogItems':{m:len(d) for m,d in additions.items()},'coveredPhases':{m:sum(d is not None for d in phases) for m,phases in templates.items()},'nutritionRecords':len(records),'originalNutritionBindings':len(bindings),'specialAlternation':'Dinner Grill House, cycle day 18: Nov 12 beef burrito station and Oct 15 burger/chicken station alternate on projected 28-day passes. Published dates always win.'}
    (RESEARCH/'app-cycle-build.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
    print(json.dumps(report,indent=2))

if __name__ == '__main__': main()
