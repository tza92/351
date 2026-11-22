const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.createContext(context);
const run = (name) => vm.runInContext(fs.readFileSync(path.join(root, 'src', `${name}.js`), 'utf8'), context);
run('data/breakfast');
run('data/main-meals');
const originals = JSON.parse(JSON.stringify(context.window.nutritionMenus));
run('data/nutrition');
run('data/menu-cycle-data');
run('menu-cycle');
const { nutritionMenus: menus, nutritionCycle: cycle, nutritionFacts: facts, resolveNutritionMenu: resolve } = context.window;
const normalized = (text) => String(text).trim().replace(/\s+/g, ' ').toLowerCase();
const asJson = (value) => JSON.stringify(value);
const advance = (date, days) => new Date(Date.parse(`${date}T00:00:00Z`) + days * 86400000).toISOString().slice(0, 10);
let checkedEntries = 0;

function checkNutrition(meal, requestedDate, resolved) {
  if (!resolved.menu) return;
  const menu = resolved.menu;
  for (const [station, entries] of Object.entries(menu.stations)) {
    for (const entry of entries) {
      const details = menus[meal].catalog[entry.food];
      assert.ok(details, `Missing catalog item: ${meal}/${entry.food}`);
      const sourceDate = menu.stationSourceDates?.[station] || menu.sourceDate || requestedDate;
      const key = asJson([sourceDate, meal, station, entry.food, entry.serving]);
      const record = facts.records[entry.nutritionId || facts.bindings[key]];
      assert.ok(record, `Missing nutrition: ${key}`);
      assert.equal(normalized(record.name), normalized(details.sourceName));
      assert.equal(record.portion, entry.serving);
      if (meal !== 'Breakfast') assert.ok(menus[meal].categoryOrder[station].includes(entry.category));
      checkedEntries++;
    }
  }
}

for (const meal of ['Breakfast', 'Lunch', 'Dinner']) {
  assert.equal(Object.keys(menus[meal].days).length, 50);
  assert.equal(cycle.templates[meal].length, 28);
  assert.equal(cycle.templates[meal].filter(Boolean).length, 27);
  assert.equal(cycle.templates[meal][27], null);
  for (const [date, original] of Object.entries(originals[meal].days)) {
    const actual = resolve(meal, date);
    assert.equal(actual.projected, false);
    assert.equal(asJson(actual.menu.stations), asJson(original.stations));
    assert.equal(actual.menu.source, original.source);
  }
  for (const date of Object.keys(menus[meal].days)) checkNutrition(meal, date, resolve(meal, date));
  for (const date of cycle.unpublishedDates) assert.equal(resolve(meal, date).menu, null);
  for (let phase = 0; phase < 28; phase++) {
    const date = advance('2026-11-23', phase);
    const current = resolve(meal, date);
    const next = resolve(meal, advance(date, 28));
    const afterNext = resolve(meal, advance(date, 56));
    assert.equal(current.projected, true);
    assert.equal(current.cycleWeek, Math.floor(phase / 7) + 1);
    checkNutrition(meal, date, current);
    checkNutrition(meal, advance(date, 28), next);
    assert.equal(asJson(current.menu?.stations), asJson(afterNext.menu?.stations));
    if (phase === 17 && meal === 'Dinner') {
      assert.notEqual(asJson(current.menu.stations['grill-house']), asJson(next.menu.stations['grill-house']));
      for (const station of Object.keys(current.menu.stations)) {
        if (station !== 'grill-house') assert.equal(asJson(current.menu.stations[station]), asJson(next.menu.stations[station]));
      }
    } else assert.equal(asJson(current.menu?.stations), asJson(next.menu?.stations));
  }
  // A fortnight must not collapse the two distinct weeks into the same menu.
  assert.notEqual(asJson(resolve(meal, '2026-11-23').menu.stations), asJson(resolve(meal, '2026-12-07').menu.stations));
  assert.equal(resolve(meal, '2026-12-20').menu, null); // unobserved fourth Sunday
  checkNutrition(meal, '2026-09-14', resolve(meal, '2026-09-14')); // negative cycle offset
}
assert.equal(resolve('Unknown', '2026-11-23').menu, null);
for (const date of ['invalid', '2026-02-30', '2026-13-01', null]) assert.equal(resolve('Dinner', date).menu, null);
const grillNames = (date) => resolve('Dinner', date).menu.stations['grill-house'].map((entry) => menus.Dinner.catalog[entry.food].sourceName);
assert.ok(grillNames('2026-10-15').includes('Beef Burger on WW Bun'));
assert.ok(grillNames('2026-11-12').includes('Beef Burrito'));
assert.ok(grillNames('2026-12-10').includes('Beef Burger on WW Bun'));
assert.ok(grillNames('2027-01-07').includes('Beef Burrito'));
assert.ok(grillNames('2027-02-04').includes('Chicken Tender Strips'));
console.log(`PASS: published dates preserved; 28-day cycle; special alternation; ${checkedEntries} nutrition bindings; missing slots and invalid dates.`);
