// Shared preview-shell input bridge. No app state or full-screen logic lives here.
(() => {
function bindSwipe(target, opening, onChange) {
  let gesture = null;
  let suppressClick = false;
  function start(point) {
    suppressClick = false;
    gesture = (!opening || point.clientY <= 120)
      ? { x: point.clientX, y: point.clientY, distance: 0 } : null;
  }
  function move(point, event) {
    if (!gesture) return;
    const dy = point.clientY - gesture.y;
    const distance = opening ? -dy : dy;
    if (distance > 8 && distance > Math.abs(point.clientX - gesture.x)) {
      gesture.distance = distance;
      if (event.cancelable) event.preventDefault();
    } else {
      gesture.distance = 0;
    }
  }
  function finish() {
    if (gesture?.distance >= 40) {
      suppressClick = true;
      onChange(opening);
    }
    gesture = null;
  }
  target.addEventListener('touchstart', (event) => {
    if (event.touches.length === 1) start(event.touches[0]);
    else gesture = null;
  }, { capture: true, passive: true });
  target.addEventListener('touchmove', (event) => {
    if (event.touches.length === 1) move(event.touches[0], event);
    else gesture = null;
  }, { capture: true, passive: false });
  target.addEventListener('touchend', finish, true);
  target.addEventListener('touchcancel', () => { gesture = null; }, true);
  target.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button === 0) start(event);
  }, true);
  target.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'mouse') move(event, event);
  }, true);
  target.addEventListener('pointerup', (event) => {
    if (event.pointerType === 'mouse') finish();
  }, true);
  target.addEventListener('pointercancel', () => { gesture = null; }, true);
  target.addEventListener('click', (event) => {
    if (!suppressClick || event.detail === 0) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    suppressClick = false;
  }, true);
}

  window.PreviewGestures = { bindSwipe };
  if (!document.currentScript?.hasAttribute('data-preview-bridge') || window.parent === window) return;
  function send(action) {
    window.parent.postMessage({ type: 'preview-controls', action }, '*');
  }
  bindSwipe(document, true, () => send('reveal'));
  document.addEventListener('keydown', (event) => {
    if (event.altKey && event.shiftKey && event.code === 'KeyF') {
      event.preventDefault();
      send('toggle');
    } else if (event.key === 'Escape') {
      send('escape');
    }
  });
})();
