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
  if (event.data?.type !== 'app-sidebar-state') return;
  if (typeof event.data.open !== 'boolean') return;
  previewScreen.classList.toggle('sidebar-open', event.data.open);
});

appFrame.addEventListener('load', () => previewScreen.classList.remove('sidebar-open'));
