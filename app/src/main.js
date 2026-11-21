const optionsButton = document.querySelector('.filter-button');
const sidebar = document.querySelector('#app-sidebar');
const fullscreenButton = document.querySelector('.fullscreen-toggle');
const fullscreenLabel = document.querySelector('.fullscreen-label');
const fullscreenStatus = document.querySelector('#fullscreen-status');
let switchingFullscreen = false;
let closingSidebar = false;

function syncSidebarFrame(open) {
  if (window.parent === window) return;
  const origin = location.protocol === 'file:' ? '*' : location.origin;
  window.parent.postMessage({ type: 'app-sidebar-state', open }, origin);
}

async function closeSidebar() {
  if (!sidebar.open || closingSidebar) return;
  closingSidebar = true;
  sidebar.classList.add('is-closing');
  syncSidebarFrame(false);
  await Promise.all(sidebar.getAnimations({ subtree: true }).map((animation) => animation.finished.catch(() => {})));
  sidebar.close();
  sidebar.classList.remove('is-closing');
  closingSidebar = false;
}

function fullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement;
}

function supportsFullscreen() {
  return document.documentElement.requestFullscreen
    ? document.fullscreenEnabled !== false
    : Boolean(document.documentElement.webkitRequestFullscreen) && document.webkitFullscreenEnabled !== false;
}

function syncFullscreen() {
  const active = Boolean(fullscreenElement());
  const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  fullscreenLabel.textContent = active ? 'Exit full screen' : 'Full screen';
  fullscreenButton.setAttribute('aria-pressed', String(active));
  fullscreenButton.disabled = switchingFullscreen || (!active && (!supportsFullscreen() || standalone));
  fullscreenStatus.textContent = standalone
    ? 'Already running as a Home Screen app.'
    : !active && !supportsFullscreen()
      ? 'Full screen is unavailable in this browser. On iPhone, use Safari\u2019s Share menu, choose Add to Home Screen, and enable Open as Web App.'
      : '';
}

optionsButton.addEventListener('click', () => {
  syncFullscreen();
  sidebar.showModal();
  optionsButton.setAttribute('aria-expanded', 'true');
  syncSidebarFrame(true);
});
document.querySelector('.sidebar-close').addEventListener('click', closeSidebar);
sidebar.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeSidebar();
});
sidebar.addEventListener('close', () => {
  optionsButton.setAttribute('aria-expanded', 'false');
  optionsButton.focus({ preventScroll: true });
  syncSidebarFrame(false);
});
sidebar.addEventListener('click', (event) => {
  if (event.target !== sidebar) return;
  const bounds = sidebar.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    closeSidebar();
  }
});

fullscreenButton.addEventListener('click', async () => {
  if (switchingFullscreen) return;
  switchingFullscreen = true;
  fullscreenButton.disabled = true;
  let failed = false;
  try {
    if (fullscreenElement()) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      await exit.call(document);
    } else {
      const request = document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen;
      await request.call(document.documentElement);
    }
  } catch {
    failed = true;
  } finally {
    switchingFullscreen = false;
    syncFullscreen();
    if (failed) fullscreenStatus.textContent = 'Could not change full screen. Try again or use your browser\u2019s full-screen control.';
  }
});
document.addEventListener('fullscreenchange', syncFullscreen);
document.addEventListener('webkitfullscreenchange', syncFullscreen);
syncFullscreen();
syncSidebarFrame(false);

const moreButton = document.querySelector('.more-button');
const intakeSuggestions = document.querySelector('#intake-suggestions');
let suggestionsAnimation = null;

moreButton.addEventListener('click', () => {
  const expanded = moreButton.getAttribute('aria-expanded') !== 'true';
  const scrollTop = dashboard.scrollTop;
  const startHeight = intakeSuggestions.getBoundingClientRect().height;
  const startOpacity = intakeSuggestions.hidden ? 0 : getComputedStyle(intakeSuggestions).opacity;
  suggestionsAnimation?.cancel();
  suggestionsAnimation = null;

  moreButton.setAttribute('aria-expanded', String(expanded));
  moreButton.querySelector('.more-label').textContent = expanded ? 'Less' : 'More';
  intakeSuggestions.inert = !expanded;
  intakeSuggestions.hidden = false;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    intakeSuggestions.hidden = !expanded;
    dashboard.scrollTop = scrollTop;
    return;
  }

  const animation = intakeSuggestions.animate([
    { height: `${startHeight}px`, opacity: startOpacity },
    { height: expanded ? `${intakeSuggestions.scrollHeight}px` : '0px', opacity: expanded ? 1 : 0 },
  ], {
    duration: 240,
    easing: 'cubic-bezier(0.2, 0, 0, 1)',
    fill: 'both',
  });
  suggestionsAnimation = animation;
  dashboard.scrollTop = scrollTop;
  animation.onfinish = () => {
    intakeSuggestions.hidden = !expanded;
    animation.cancel();
    suggestionsAnimation = null;
  };
});

// Mouse swipes emulate dragging a touchscreen; native touch scrolling stays native.
const dashboard = document.querySelector('.dashboard');
let swipe = null;
let suppressSwipeClick = false;

dashboard.addEventListener('pointerdown', (event) => {
  suppressSwipeClick = false;
  if (event.pointerType !== 'mouse' || event.button !== 0) return;
  swipe = {
    pointerId: event.pointerId,
    startY: event.clientY,
    scrollTop: dashboard.scrollTop,
    dragging: false,
  };
});

window.addEventListener('pointermove', (event) => {
  if (!swipe || event.pointerId !== swipe.pointerId) return;
  const distance = event.clientY - swipe.startY;
  if (!swipe.dragging && Math.abs(distance) < 6) return;
  if (!swipe.dragging) {
    swipe.dragging = true;
    dashboard.setPointerCapture(event.pointerId);
    dashboard.classList.add('is-swiping');
  }
  event.preventDefault();
  dashboard.scrollTop = swipe.scrollTop - distance;
});

function endSwipe(event) {
  if (!swipe || event.pointerId !== swipe.pointerId) return;
  suppressSwipeClick = swipe.dragging;
  swipe = null;
  dashboard.classList.remove('is-swiping');
  if (dashboard.hasPointerCapture(event.pointerId)) {
    dashboard.releasePointerCapture(event.pointerId);
  }
}

window.addEventListener('pointerup', endSwipe);
window.addEventListener('pointercancel', endSwipe);
dashboard.addEventListener('lostpointercapture', endSwipe);
dashboard.addEventListener('click', (event) => {
  if (!suppressSwipeClick || event.detail === 0) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  suppressSwipeClick = false;
}, true);
