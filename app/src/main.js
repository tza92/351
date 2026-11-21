const days = document.querySelectorAll('.day');

const optionsButton = document.querySelector('.filter-button');
const sidebar = document.querySelector('#app-sidebar');
const fullscreenButton = document.querySelector('.fullscreen-toggle');
const fullscreenLabel = document.querySelector('.fullscreen-label');
const fullscreenStatus = document.querySelector('#fullscreen-status');
let switchingFullscreen = false;

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
});
document.querySelector('.sidebar-close').addEventListener('click', () => sidebar.close());
sidebar.addEventListener('close', () => {
  optionsButton.setAttribute('aria-expanded', 'false');
  optionsButton.focus({ preventScroll: true });
});
sidebar.addEventListener('click', (event) => {
  if (event.target !== sidebar) return;
  const bounds = sidebar.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    sidebar.close();
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

days.forEach((day) => {
  day.addEventListener('click', () => {
    days.forEach((item) => {
      item.classList.remove('is-selected');
      item.setAttribute('aria-pressed', 'false');
    });
    day.classList.add('is-selected');
    day.setAttribute('aria-pressed', 'true');
  });
});

const moreButton = document.querySelector('.more-button');
const intakeDetails = document.querySelector('#intake-details');
moreButton.addEventListener('click', () => {
  const expanded = moreButton.getAttribute('aria-expanded') === 'true';
  moreButton.setAttribute('aria-expanded', String(!expanded));
  intakeDetails.hidden = expanded;
  moreButton.querySelector('.more-label').textContent = expanded ? 'More' : 'Less';
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
