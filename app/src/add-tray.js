(() => {
  const app = document.querySelector('.app');
  const trigger = document.querySelector('.add-button');
  const tray = document.querySelector('#add-tray');
  const title = document.querySelector('#add-tray-title');
  const types = tray.querySelector('#add-tray-types');
  const meals = tray.querySelector('#add-tray-meals');
  const mealTrigger = types.querySelector('[data-add-type="meal"]');
  const back = tray.querySelector('.add-tray-back');
  const dateTrigger = tray.querySelector('.add-tray-date');
  const closeButton = tray.querySelector('.add-tray-close');
  const saveButton = tray.querySelector('.add-tray-save');
  const review = tray.querySelector('#add-tray-review');
  const items = review.querySelector('.add-tray-items');
  const moreButton = review.querySelector('.add-tray-more');
  const savedNotice = document.querySelector('.add-save-notice');
  const draft = [];
  let noticeTimeout;
  let saving = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let closing = false;
  let choosingDate = false;

  function updateTitle() {
    if (!review.hidden) {
      const mealNames = [...new Set(draft.map((entry) => entry.food.meal))];
      title.textContent = mealNames.length === 1 ? mealNames[0] : 'Meals';
      return;
    }
    if (!meals.hidden) {
      title.textContent = 'Add Meal';
      return;
    }
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

  function showMeals(show, moveFocus = true) {
    review.hidden = true;
    saveButton.hidden = true;
    closeButton.hidden = false;
    if (show && !types.hidden) meals.style.minHeight = `${types.getBoundingClientRect().height}px`;
    types.hidden = show;
    meals.hidden = !show;
    back.hidden = !show;
    back.setAttribute('aria-label', 'Back to add options');
    dateTrigger.hidden = show;
    mealTrigger.setAttribute('aria-expanded', String(show));
    updateTitle();
    if (moveFocus) (show ? title : mealTrigger).focus({ preventScroll: true });
  }

  function showReview(moveFocus = true) {
    types.hidden = true;
    meals.hidden = true;
    back.hidden = false;
    back.setAttribute('aria-label', 'Back to Add Meal');
    dateTrigger.hidden = true;
    closeButton.hidden = true;
    saveButton.hidden = false;
    review.hidden = false;
    mealTrigger.setAttribute('aria-expanded', 'false');
    items.replaceChildren();
    const multipleMeals = new Set(draft.map((entry) => entry.food.meal)).size > 1;
    draft.forEach((entry) => {
      const row = document.createElement('div');
      row.className = 'add-tray-item';
      if (entry.food.image) {
        const photo = document.createElement('img');
        photo.src = `assets/foods/${entry.food.image}`;
        photo.alt = '';
        row.append(photo);
      }
      const info = document.createElement('div');
      const name = document.createElement('strong');
      name.textContent = entry.food.name;
      const detail = document.createElement('p');
      detail.textContent = `${multipleMeals ? `${entry.food.meal} · ` : ''}${entry.quantity} × ${entry.food.serving}`;
      info.append(name, detail);
      const remove = document.createElement('button');
      remove.className = 'add-tray-remove';
      remove.type = 'button';
      remove.setAttribute('aria-label', `Remove ${entry.food.name}`);
      remove.textContent = '−';
      remove.addEventListener('click', () => {
        draft.splice(draft.indexOf(entry), 1);
        if (draft.length) showReview();
        else showMeals(true);
      });
      row.append(info, remove);
      items.append(row);
    });
    updateTitle();
    if (moveFocus) title.focus({ preventScroll: true });
  }

  document.addEventListener('nutrition:mealpicked', (event) => {
    const selection = event.detail;
    const existing = draft.find((entry) => entry.key === selection.key && entry.date === selection.date);
    if (existing) existing.quantity += selection.quantity;
    else draft.push(structuredClone(selection));
    showReview(false);
  });
  document.addEventListener('nutrition:mealpickerclose', () => {
    if (draft.length && tray.open) showReview();
  });
  moreButton.addEventListener('click', () => {
    const last = draft[draft.length - 1];
    if (!last || saving) return;
    document.dispatchEvent(new CustomEvent('nutrition:openmeal', {
      detail: { meal: last.food.meal, trigger: moreButton },
    }));
  });
  saveButton.addEventListener('click', async () => {
    if (!draft.length || saving || closing) return;
    saving = true;
    saveButton.disabled = true;
    for (const entry of draft) {
      const existing = window.nutritionTrack?.getQuantity(entry.date, entry.key) || 0;
      document.dispatchEvent(new CustomEvent('nutrition:logchange', {
        detail: { ...entry, quantity: existing + entry.quantity, kind: 'meal' },
      }));
    }
    const label = title.textContent;
    draft.length = 0;
    await closeTray();
    showMeals(false, false);
    savedNotice.textContent = `${label} saved to Track`;
    savedNotice.classList.add('is-visible');
    clearTimeout(noticeTimeout);
    noticeTimeout = setTimeout(() => savedNotice.classList.remove('is-visible'), 3000);
    saving = false;
    saveButton.disabled = false;
  });

  function openTray() {
    if (tray.open || closing) return;
    if (draft.length) showReview(false);
    else if (!choosingDate) showMeals(false, false);
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
  mealTrigger.addEventListener('click', () => showMeals(true));
  back.addEventListener('click', () => showMeals(!review.hidden));
  meals.querySelectorAll('[data-add-meal]').forEach((button) => {
    if (button.dataset.addMeal === 'Other') return;
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'add-meal-dialog');
    button.addEventListener('click', () => {
      if (closing) return;
      if (draft.some((entry) => entry.food.meal === button.dataset.addMeal)) {
        showReview();
        return;
      }
      document.dispatchEvent(new CustomEvent('nutrition:openmeal', {
        detail: { meal: button.dataset.addMeal, trigger: button },
      }));
    });
  });
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
  dateTrigger.addEventListener('click', async () => {
    if (closing) return;
    choosingDate = true;
    await closeTray(false);
    if (choosingDate) document.dispatchEvent(new CustomEvent('nutrition:opencalendar'));
  });
  document.addEventListener('nutrition:calendarclose', (event) => {
    if (!choosingDate) return;
    if (event.detail?.reopenTray === false) trigger.focus({ preventScroll: true });
    else openTray();
    choosingDate = false;
  });
  window.addEventListener('hashchange', () => {
    choosingDate = false;
    closeTray(false);
  });
})();
