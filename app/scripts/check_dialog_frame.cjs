const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '../..');
const main = fs.readFileSync(path.join(root, 'app/src/main.js'), 'utf8');
const parent = fs.readFileSync(path.join(root, 'phone/sidebar.js'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'phone/styles.css'), 'utf8');
const origin = 'http://localhost';
const listeners = {};
const frameListeners = {};
const classes = new Set();
const properties = new Map();
const screen = {
  dataset: {},
  classList: {
    toggle(name, active) { active ? classes.add(name) : classes.delete(name); },
    remove(...names) { names.forEach((name) => classes.delete(name)); },
  },
  style: {
    setProperty(name, value) { properties.set(name, value); },
    removeProperty(name) { properties.delete(name); },
  },
};
const frame = {
  contentWindow: {},
  addEventListener(name, handler) { frameListeners[name] = handler; },
};
vm.runInNewContext(parent, {
  document: { querySelector: (selector) => selector === '.app-frame' ? frame : screen },
  window: { addEventListener(name, handler) { listeners[name] = handler; } },
  location: { protocol: 'http:', origin },
  CSS: { supports: (_, color) => /^rgba?\(/.test(color) },
});

let dialogs = [];
const app = vm.createContext({
  document: { querySelectorAll: () => dialogs },
  window: { parent: { postMessage(data, target) {
    assert.equal(target, origin);
    listeners.message({ source: frame.contentWindow, origin, data });
  } } },
  location: { protocol: 'http:', origin },
  getComputedStyle: (dialog, pseudo) => pseudo ? { backgroundColor: dialog.backdrop } : dialog.styles,
});
const start = main.indexOf('function syncModalFrame()');
const end = main.indexOf('\n}', start) + 2;
assert.ok(start >= 0 && end > start);
vm.runInContext(main.slice(start, end), app);

// An unfamiliar sheet must work without registering its name or colour.
const sheet = {
  id: 'future-sheet',
  styles: { position: 'fixed', bottom: '0px', backgroundColor: 'rgb(31, 42, 53)' },
  backdrop: 'rgba(0, 0, 0, 0.6)',
};
dialogs = [sheet];
app.syncModalFrame();
assert.ok(classes.has('modal-open'));
assert.ok('sheetSurface' in screen.dataset);
assert.equal(properties.get('--sheet-surface'), sheet.styles.backgroundColor);
assert.equal(properties.get('--modal-backdrop'), sheet.backdrop);

// A new sheet colour must flow through rather than retaining the previous one.
sheet.styles.backgroundColor = 'rgb(60, 70, 80)';
app.syncModalFrame();
assert.equal(properties.get('--sheet-surface'), 'rgb(60, 70, 80)');

// A centred dialog above a sheet dims the bottom bar instead of extending it.
dialogs = [sheet, {
  styles: { position: 'fixed', bottom: '100px', backgroundColor: 'rgb(90, 90, 90)' },
  backdrop: 'rgba(0, 0, 0, 0.5)',
}];
app.syncModalFrame();
assert.ok(classes.has('modal-open'));
assert.equal('sheetSurface' in screen.dataset, false);
assert.equal(properties.has('--sheet-surface'), false);

dialogs = [];
app.syncModalFrame();
assert.equal(classes.has('modal-open'), false);
assert.equal(properties.size, 0);

dialogs = [sheet];
app.syncModalFrame();
frameListeners.load();
assert.equal(classes.has('modal-open'), false);
assert.equal('sheetSurface' in screen.dataset, false);
assert.equal(properties.size, 0);
assert.ok(styles.includes('background: var(--sheet-surface)'));
assert.ok(styles.includes('background: var(--modal-backdrop, #0008)'));

const drawer = {
  styles: { width: '310px', backgroundColor: 'rgb(40, 50, 60)' },
  backdrop: 'rgba(0, 0, 0, 0.7)',
};
app.sidebar = drawer;
const drawerStart = main.indexOf('function syncSidebarFrame(');
const drawerEnd = main.indexOf('\n}', drawerStart) + 2;
assert.ok(drawerStart >= 0 && drawerEnd > drawerStart);
vm.runInContext(main.slice(drawerStart, drawerEnd), app);
app.syncSidebarFrame(true);
assert.ok(classes.has('sidebar-open'));
assert.equal(properties.get('--drawer-width'), '310px');
assert.equal(properties.get('--drawer-surface'), drawer.styles.backgroundColor);
assert.equal(properties.get('--drawer-backdrop'), drawer.backdrop);
drawer.styles.width = '280px';
drawer.styles.backgroundColor = 'rgb(70, 80, 90)';
app.syncSidebarFrame(true);
assert.equal(properties.get('--drawer-width'), '280px');
assert.equal(properties.get('--drawer-surface'), 'rgb(70, 80, 90)');
app.syncSidebarFrame(false);
assert.equal(classes.has('sidebar-open'), false);
assert.ok(styles.includes('clip-path: inset(0 var(--drawer-width, 0px) 0 0)'));
frameListeners.load();
assert.equal(properties.size, 0);
console.log('Dialog frame checks passed: sheets, colours, stacked dialogs, drawer resizing, dismissal, and reload cleanup.');
