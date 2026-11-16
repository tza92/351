const $ = id => document.getElementById(id);
const defaults = {device:'standard', dark:false, background:'#ffffff', status:true, island:true, home:true};
const sizes = {standard:[393,852],large:[430,932],compact:[375,812]};
let state = {...defaults};
try { const saved = JSON.parse(localStorage.getItem('pocket-preview') || 'null'); if(saved && sizes[saved.device] && /^#[0-9a-f]{6}$/i.test(saved.background)) state = {...defaults,...saved}; } catch {}
let zoom = null;
let presenting = false;
function save(){ try {localStorage.setItem('pocket-preview',JSON.stringify(state));} catch {document.querySelector('.saved').textContent='Changes kept for this session';} }
function fit(){
  const [w,h] = sizes[state.device];
  const area = $('device-area');
  const styles = getComputedStyle(area);
  const availableWidth = area.clientWidth-parseFloat(styles.paddingLeft)-parseFloat(styles.paddingRight);
  const availableHeight = area.clientHeight-parseFloat(styles.paddingTop)-parseFloat(styles.paddingBottom);
  const scale = zoom ?? Math.min(availableWidth/(w+22),availableHeight/(h+22),1);
  const bounded = Math.max(.15,scale);
  $('phone').style.transform = `scale(${bounded})`;
  $('phone-wrap').style.width = `${(w+22)*bounded}px`;
  $('phone-wrap').style.height = `${(h+22)*bounded}px`;
  $('zoom-label').textContent = zoom === null ? 'Fit' : `${Math.round(bounded*100)}%`;
  $('zoom-label').dataset.scale = bounded;
}
function render(){
  const [w,h] = sizes[state.device];
  $('device').value=state.device;
  $('width').value=w; $('height').value=h;
  $('canvas-device').textContent=`iPhone · ${w} × ${h}`;
  $('phone-screen').style.width=`${w}px`; $('phone-screen').style.height=`${h}px`;
  $('phone-screen').style.background=state.background;
  $('phone-screen').style.color=state.dark?'#ffffff':'#111111';
  $('background').value=state.background; $('hex').value=state.background.slice(1).toUpperCase();
  for(const key of ['status','island','home']) $(key+'-toggle').checked=state[key];
  // Keep the physical island independently visible when status text is hidden.
  $('phone-time').hidden=!state.status;
  document.querySelector('.status-icons').hidden=!state.status;
  $('island').hidden=!state.island;
  $('home-indicator').hidden=!state.home;
  for(const mode of ['light','dark']){ const active=state.dark===(mode==='dark'); $(mode).classList.toggle('active',active); $(mode).setAttribute('aria-pressed',String(active)); }
  requestAnimationFrame(fit);
}
$('device').addEventListener('change',e=>{state.device=e.target.value;zoom=null;save();render();});
for(const mode of ['light','dark']) $(mode).addEventListener('click',()=>{state.dark=mode==='dark';state.background=state.dark?'#151517':'#ffffff';save();render();});
$('background').addEventListener('input',e=>{state.background=e.target.value;save();render();});
for(const key of ['status','island','home']) $(key+'-toggle').addEventListener('change',e=>{state[key]=e.target.checked;save();render();});
function present(value){presenting=value;document.body.classList.toggle('presenting',value);zoom=null;requestAnimationFrame(fit);if(value)$('exit-present').focus();else $('present').focus();}
$('present').addEventListener('click',()=>present(true));
$('exit-present').addEventListener('click',()=>present(false));
document.addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;if(e.key==='Escape'&&presenting)present(false);if(e.key.toLowerCase()==='f'){e.preventDefault();present(!presenting);}});
for(const [id,delta] of [['zoom-in',.1],['zoom-out',-.1]]) $(id).addEventListener('click',()=>{zoom=Math.min(1.5,Math.max(.2,Number($('zoom-label').dataset.scale)+delta));fit();});
$('zoom-label').addEventListener('click',()=>{zoom=null;fit();});
$('reset').addEventListener('click',()=>{state={...defaults};zoom=null;save();render();$('toast').textContent='Preview reset to a blank canvas';$('toast').classList.add('visible');setTimeout(()=>$('toast').classList.remove('visible'),2200);});
new ResizeObserver(fit).observe($('device-area'));
render();
