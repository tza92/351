const days = document.querySelectorAll('.day');

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
