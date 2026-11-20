const root = document.documentElement;
const toolbar = document.querySelector('#preview-toolbar');
const appFrame = document.querySelector('.app-frame');
const fullscreenButton = document.querySelector('.fullscreen-toggle');
const status = document.querySelector('.fullscreen-status');
let windowExpanded = false;
let switching = false;

function setToolbar(open) {
  toolbar.hidden = !open;
}

function fullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement;
}

function syncFullscreen() {
  const active = Boolean(fullscreenElement()) || windowExpanded;
  root.classList.toggle('is-immersive', active);
  fullscreenButton.textContent = active ? 'Exit full screen' : 'Full screen';
  fullscreenButton.setAttribute('aria-pressed', String(active));
  if (!active) status.textContent = '';
}

document.querySelector('.toolbar-close').addEventListener('click', () => {
  setToolbar(false);
  appFrame.focus({ preventScroll: true });
});

// Dismiss gestures stay in the shell; iframe gestures arrive via its input bridge.
PreviewGestures.bindSwipe(toolbar, false, setToolbar);

fullscreenButton.addEventListener('click', async () => {
  if (switching) return;
  switching = true;
  fullscreenButton.disabled = true;
  status.textContent = '';
  try {
    if (fullscreenElement()) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      await exit.call(document);
    } else if (windowExpanded) {
      windowExpanded = false;
    } else {
      const request = root.requestFullscreen || root.webkitRequestFullscreen;
      if (!request) {
        windowExpanded = true;
      } else {
        try {
          await request.call(root);
        } catch {
          windowExpanded = true;
        }
      }
      if (windowExpanded) {
        status.textContent = 'Expanded to this window. Your browser does not allow full screen here, so its bars remain visible.';
      }
    }
    syncFullscreen();
    // Keep the exit control discoverable after entering either mode.
    setToolbar(true);
  } catch {
    status.textContent = 'Could not exit full screen. Try your browser’s full-screen control or Escape.';
  } finally {
    switching = false;
    fullscreenButton.disabled = false;
  }
});

function onEscape(event) {
  if (event.altKey && event.shiftKey && event.code === 'KeyF') {
    event.preventDefault();
    setToolbar(toolbar.hidden);
    if (!toolbar.hidden) fullscreenButton.focus({ preventScroll: true });
    return;
  }
  if (event.key !== 'Escape') return;
  windowExpanded = false;
  syncFullscreen();
  setToolbar(false);
}
document.addEventListener('keydown', onEscape);
// File URLs have separate opaque origins, so use a message bridge rather than
// reading the iframe DOM. Only this exact iframe may control the toolbar.
window.addEventListener('message', (event) => {
  if (event.source !== appFrame.contentWindow || event.data?.type !== 'preview-controls') return;
  if (location.protocol !== 'file:' && event.origin !== location.origin) return;
  switch (event.data.action) {
    case 'reveal':
      setToolbar(true);
      break;
    case 'toggle':
      setToolbar(toolbar.hidden);
      if (!toolbar.hidden) fullscreenButton.focus({ preventScroll: true });
      break;
    case 'escape':
      onEscape({ key: 'Escape' });
      break;
  }
});

document.addEventListener('fullscreenchange', syncFullscreen);
document.addEventListener('webkitfullscreenchange', syncFullscreen);
syncFullscreen();
