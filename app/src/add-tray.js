(() => {
  const app = document.querySelector('.app');
  const trigger = document.querySelector('.add-button');
  const tray = document.querySelector('#add-tray');
  const title = document.querySelector('#add-tray-title');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let closing = false;
  let choosingDate = false;

  function updateTitle() {
    const date = app.dataset.selectedDate;
    if (!date || date === app.dataset.today) {
      title.textContent = 'Add to Today';
      return;
    }
    const [year, month, day] = date.split('-').map(Number);
    const label = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' })
      .format(new Date(year, month - 1, day, 12));
    title.textContent = `Add to ${label}`;
  }

  function openTray() {
    if (tray.open || closing) return;
    updateTitle();
    tray.showModal();
    trigger.setAttribute('aria-expanded', 'true');
    title.focus({ preventScroll: true });
  }

  async function closeTray(restoreFocus = true) {
    if (!tray.open || closing) return;
    closing = true;
    tray.classList.add('is-closing');
    if (!reducedMotion.matches) {
      await Promise.all(tray.getAnimations().map((animation) => animation.finished.catch(() => {})));
    }
    tray.close();
    tray.classList.remove('is-closing');
    trigger.setAttribute('aria-expanded', 'false');
    closing = false;
    if (restoreFocus) trigger.focus({ preventScroll: true });
  }

  trigger.addEventListener('click', openTray);
  tray.querySelector('.add-tray-close').addEventListener('click', () => closeTray());
  tray.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeTray();
  });
  tray.addEventListener('click', (event) => {
    if (event.target !== tray) return;
    const bounds = tray.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom) closeTray();
  });

  document.addEventListener('nutrition:datechange', updateTitle);
  tray.querySelector('.add-tray-date').addEventListener('click', async () => {
    if (closing) return;
    choosingDate = true;
    await closeTray(false);
    if (choosingDate) document.dispatchEvent(new CustomEvent('nutrition:opencalendar'));
  });
  document.addEventListener('nutrition:calendarclose', (event) => {
    if (!choosingDate) return;
    choosingDate = false;
    if (event.detail?.reopenTray === false) trigger.focus({ preventScroll: true });
    else openTray();
  });
  window.addEventListener('hashchange', () => {
    choosingDate = false;
    closeTray(false);
  });
})();
