// Mirror the app's page and backdrop state onto the simulated system bars.
const appFrame = document.querySelector('.app-frame');
const previewScreen = document.querySelector('.screen');

window.addEventListener('message', (event) => {
  if (event.source !== appFrame.contentWindow) return;
  if (location.protocol !== 'file:' && event.origin !== location.origin) return;
  if (event.data?.type === 'app-page-state') {
    if (event.data.page === 'home' || event.data.page === 'menu') {
      previewScreen.classList.toggle('is-menu', event.data.page === 'menu');
    }
    return;
  }
  if (event.data?.type === 'app-modal-state') {
    if (typeof event.data.open === 'boolean') {
      previewScreen.classList.toggle('modal-open', event.data.open);
      const isColor = (value) => typeof value === 'string' && CSS.supports('color', value);
      if (event.data.open && isColor(event.data.bottomSurface)) {
        previewScreen.dataset.sheetSurface = '';
        previewScreen.style.setProperty('--sheet-surface', event.data.bottomSurface);
      } else {
        delete previewScreen.dataset.sheetSurface;
        previewScreen.style.removeProperty('--sheet-surface');
      }
      if (event.data.open && isColor(event.data.backdrop)) {
        previewScreen.style.setProperty('--modal-backdrop', event.data.backdrop);
      } else previewScreen.style.removeProperty('--modal-backdrop');
    }
    return;
  }
  if (event.data?.type !== 'app-sidebar-state') return;
  if (typeof event.data.open !== 'boolean') return;
  if (event.data.open) {
    const { width, visibleWidth, surface, backdrop, opacity } = event.data;
    if (typeof width === 'number' && Number.isFinite(width) && width > 0) {
      previewScreen.style.setProperty('--drawer-width', `${width}px`);
    }
    if (typeof visibleWidth === 'number' && Number.isFinite(visibleWidth) && visibleWidth >= 0) {
      previewScreen.style.setProperty('--drawer-visible-width', `${visibleWidth}px`);
    }
    if (typeof opacity === 'number' && Number.isFinite(opacity)) {
      previewScreen.style.setProperty('--drawer-opacity', String(Math.max(0, Math.min(1, opacity))));
    }
    if (typeof surface === 'string' && CSS.supports('color', surface)) {
      previewScreen.style.setProperty('--drawer-surface', surface);
    }
    if (typeof backdrop === 'string' && CSS.supports('color', backdrop)) {
      previewScreen.style.setProperty('--drawer-backdrop', backdrop);
    }
  }
  previewScreen.classList.toggle('sidebar-open', event.data.open);
});

appFrame.addEventListener('load', () => {
  previewScreen.classList.remove('sidebar-open', 'modal-open');
  delete previewScreen.dataset.sheetSurface;
  previewScreen.style.removeProperty('--sheet-surface');
  previewScreen.style.removeProperty('--modal-backdrop');
  ['--drawer-width', '--drawer-visible-width', '--drawer-opacity', '--drawer-surface', '--drawer-backdrop'].forEach((name) => previewScreen.style.removeProperty(name));
});
