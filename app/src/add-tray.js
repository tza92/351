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
  const other = review.querySelector('.add-tray-other');
  const otherItems = other.querySelector('.add-tray-other-items');
  const moreButton = review.querySelector('.add-tray-more');
  const savedNotice = document.querySelector('.add-save-notice');
  const draft = [];
  let noticeTimeout;
  let saving = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let closing = false;
  let choosingDate = false;
  let quickAdd = false;
  let wheelPause;
  let resizingWheel = false;
  let touchStartY;
  let resizingTouch = false;
  let touchTime = 0;
  let touchVelocity = 0;
  let scrollMomentum;
  let mouseDrag;

  function resetExpansion() {
    clearTimeout(wheelPause);
    resizingWheel = false;
    resizingTouch = false;
    cancelAnimationFrame(scrollMomentum);
    touchVelocity = 0;
    touchStartY = undefined;
    tray.classList.remove('is-expanded');
    tray.style.removeProperty('--quick-add-height');
    otherItems.scrollTop = 0;
  }

  function trayHeights() {
    const viewport = window.visualViewport?.height || window.innerHeight;
    return { min: Math.min(viewport * .56, 520), max: Math.min(viewport * .86, 800) };
  }

  function resizeTray(distance) {
    const { min, max } = trayHeights();
    const height = tray.getBoundingClientRect().height;
    const next = Math.max(min, Math.min(max, height + distance));
    tray.style.setProperty('--quick-add-height', `${next}px`);
    tray.classList.toggle('is-expanded', next > min + 1);
    return Math.abs(next - height) > .5;
  }

  function resizeForScroll(distance, resizing) {
    const { min, max } = trayHeights();
    const height = tray.getBoundingClientRect().height;
    if (resizing || (distance > 0 && height < max - .5)) {
      resizeTray(distance);
      return true;
    }
    if (distance < 0 && height > min + .5 && otherItems.scrollTop <= -distance) {
      const remaining = distance + otherItems.scrollTop;
      otherItems.scrollTop = 0;
      resizeTray(remaining);
      return true;
    }
    return false;
  }

  function draftCanScroll(target, distance) {
    return other.hidden && items.contains(target) && (distance > 0
      ? items.scrollTop + items.clientHeight < items.scrollHeight - 1
      : items.scrollTop > 0);
  }

  tray.addEventListener('wheel', (event) => {
    if (!quickAdd || !tray.open) return;
    const distance = event.deltaY * (event.deltaMode === 1 ? 20 : event.deltaMode === 2 ? otherItems.clientHeight : 1);
    if (draftCanScroll(event.target, distance)) return;
    event.preventDefault();
    cancelAnimationFrame(scrollMomentum);
    resizingWheel = resizeForScroll(distance, resizingWheel);
    if (!resizingWheel) {
      otherItems.scrollTop += distance;
      return;
    }
    clearTimeout(wheelPause);
    wheelPause = setTimeout(() => { resizingWheel = false; }, 200);
  }, { passive: false });

  tray.addEventListener('pointerdown', (event) => {
    if (!quickAdd || !tray.open || event.pointerType !== 'mouse' || event.button !== 0 || event.target.closest('button')) return;
    // Keep the scrollbar thumb available for normal dragging.
    if (otherItems.contains(event.target) && event.clientX >= otherItems.getBoundingClientRect().left + otherItems.clientWidth) return;
    cancelAnimationFrame(scrollMomentum);
    mouseDrag = { id: event.pointerId, startY: event.clientY, lastY: event.clientY, target: event.target, dragging: false, resizing: false };
  });
  tray.addEventListener('pointermove', (event) => {
    if (!mouseDrag || mouseDrag.id !== event.pointerId) return;
    if (!mouseDrag.dragging && Math.abs(event.clientY - mouseDrag.startY) < 6) return;
    if (!mouseDrag.dragging) {
      mouseDrag.dragging = true;
      tray.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
    const distance = mouseDrag.lastY - event.clientY;
    mouseDrag.lastY = event.clientY;
    if (draftCanScroll(mouseDrag.target, distance)) {
      items.scrollTop += distance;
      return;
    }
    mouseDrag.resizing = resizeForScroll(distance, mouseDrag.resizing);
    if (!mouseDrag.resizing) otherItems.scrollTop += distance;
  });
  function endMouseDrag(event) {
    if (!mouseDrag || mouseDrag.id !== event.pointerId) return;
    mouseDrag = undefined;
    if (tray.hasPointerCapture(event.pointerId)) tray.releasePointerCapture(event.pointerId);
  }
  tray.addEventListener('pointerup', endMouseDrag);
  tray.addEventListener('pointercancel', endMouseDrag);
  tray.addEventListener('lostpointercapture', endMouseDrag);

  tray.addEventListener('touchstart', (event) => {
    cancelAnimationFrame(scrollMomentum);
    touchStartY = event.touches[0]?.clientY;
    touchTime = event.timeStamp;
    touchVelocity = 0;
    resizingTouch = false;
  }, { passive: true });
  tray.addEventListener('touchmove', (event) => {
    if (!quickAdd || !tray.open || touchStartY === undefined || event.touches.length !== 1) return;
    const distance = touchStartY - event.touches[0].clientY;
    touchStartY = event.touches[0].clientY;
    const elapsed = Math.max(1, event.timeStamp - touchTime);
    touchTime = event.timeStamp;
    if (draftCanScroll(event.target, distance)) {
      event.preventDefault();
      items.scrollTop += distance;
      touchVelocity = 0;
      return;
    }
    resizingTouch = resizeForScroll(distance, resizingTouch);
    event.preventDefault();
    if (!resizingTouch) {
      otherItems.scrollTop += distance;
      touchVelocity = distance / elapsed;
    } else touchVelocity = 0;
  }, { passive: false });
  function endTouch() {
    touchStartY = undefined;
    resizingTouch = false;
  }
  tray.addEventListener('touchend', (event) => {
    const velocity = event.timeStamp - touchTime < 100 ? touchVelocity : 0;
    endTouch();
    if (!quickAdd || Math.abs(velocity) < .05 || reducedMotion.matches) return;
    let speed = velocity;
    let previous = performance.now();
    function coast(now) {
      if (!tray.open || !quickAdd) return;
      const elapsed = Math.min(32, now - previous);
      previous = now;
      const top = otherItems.scrollTop;
      otherItems.scrollTop += speed * elapsed;
      speed *= Math.exp(-elapsed / 180);
      if (Math.abs(speed) > .05 && Math.abs(otherItems.scrollTop - top) > .5) scrollMomentum = requestAnimationFrame(coast);
    }
    scrollMomentum = requestAnimationFrame(coast);
  });
  tray.addEventListener('touchcancel', () => { endTouch(); touchVelocity = 0; });
  otherItems.addEventListener('keydown', (event) => {
    if (!quickAdd || !tray.open) return;
    const { min, max } = trayHeights();
    if (['ArrowDown', 'PageDown', 'End', ' '].includes(event.key) && !event.shiftKey && resizeForScroll(max, false)) {
      event.preventDefault();
    }
    if ((['ArrowUp', 'PageUp', 'Home'].includes(event.key) || (event.key === ' ' && event.shiftKey)) && otherItems.scrollTop <= 1 && resizeTray(-max + min)) {
      event.preventDefault();
    }
  });

  function updateTitle() {
    if (!review.hidden) {
      const mealNames = [...new Set(draft.map((entry) => entry.food.meal))];
      const label = mealNames.length === 1 ? mealNames[0] : 'Meals';
      if (quickAdd) {
        const dates = [...new Set(draft.map((entry) => entry.date))];
        if (dates.length === 1) {
          const date = dates[0];
          const [year, month, day] = date.split('-').map(Number);
          const dayLabel = date === app.dataset.today ? 'Today'
            : new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' })
              .format(new Date(year, month - 1, day, 12));
          title.textContent = `Add to ${dayLabel}’s ${label}`;
        } else title.textContent = `Add to ${label}`;
      } else title.textContent = label;
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
    quickAdd = false;
    resetExpansion();
    tray.classList.remove('is-review', 'is-quick-add');
    saveButton.before(closeButton);
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

  function createReviewRow(food, quantity, multipleMeals, onRemove) {
    const row = document.createElement('div');
    row.className = 'add-tray-item';
    if (food.image) {
      const photo = document.createElement('img');
      photo.src = `assets/foods/${food.image}`;
      photo.alt = '';
      row.append(photo);
    }
    const info = document.createElement('div');
    const name = document.createElement('strong');
    name.textContent = food.name;
    const detail = document.createElement('p');
    detail.textContent = `${multipleMeals ? `${food.meal} · ` : ''}${quantity} × ${food.serving}`;
    info.append(name, detail);
    row.append(info);
    if (onRemove) {
      const remove = document.createElement('button');
      remove.className = 'add-tray-remove';
      remove.type = 'button';
      remove.setAttribute('aria-label', `Remove ${food.name}`);
      remove.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12"/></svg>';
      remove.addEventListener('click', onRemove);
      row.append(remove);
    }
    return row;
  }

  function showReview(moveFocus = true) {
    tray.classList.add('is-review');
    tray.classList.toggle('is-quick-add', quickAdd);
    saveButton.before(closeButton);
    types.hidden = true;
    meals.hidden = true;
    back.hidden = quickAdd;
    back.setAttribute('aria-label', 'Back to Add Meal');
    dateTrigger.hidden = true;
    closeButton.hidden = false;
    saveButton.hidden = false;
    moreButton.hidden = quickAdd;
    review.hidden = false;
    mealTrigger.setAttribute('aria-expanded', 'false');
    items.replaceChildren();
    const multipleMeals = new Set(draft.map((entry) => entry.food.meal)).size > 1;
    draft.forEach((entry) => {
      const row = createReviewRow(entry.food, entry.quantity, multipleMeals, () => {
        draft.splice(draft.indexOf(entry), 1);
        if (draft.length) showReview();
        else if (quickAdd) closeTray();
        else showMeals(true);
      });
      items.append(row);
    });
    otherItems.replaceChildren();
    if (quickAdd) {
      const mealsByDate = new Map();
      draft.forEach((entry) => {
        if (!mealsByDate.has(entry.date)) mealsByDate.set(entry.date, new Set());
        mealsByDate.get(entry.date).add(entry.food.meal);
      });
      mealsByDate.forEach((mealNames, date) => {
        const saved = window.nutritionTrack?.getEntries(date) || [];
        saved.filter((entry) => mealNames.has(entry.meal)).forEach((entry) => {
          const row = createReviewRow(entry, entry.quantity, multipleMeals, () => {
            if (saving || closing) return;
            document.dispatchEvent(new CustomEvent('nutrition:logchange', {
              detail: { date, key: entry.key, food: entry, quantity: 0 },
            }));
            const next = row.nextElementSibling || row.previousElementSibling;
            row.remove();
            other.hidden = !otherItems.childElementCount;
            (next?.querySelector('.add-tray-remove') || title).focus({ preventScroll: true });
          });
          otherItems.append(row);
        });
      });
    }
    other.hidden = !otherItems.childElementCount;
    updateTitle();
    if (moveFocus) title.focus({ preventScroll: true });
  }

  document.addEventListener('nutrition:mealpicked', (event) => {
    if (!tray.open) quickAdd = true;
    const selection = event.detail;
    const existing = draft.find((entry) => entry.key === selection.key && entry.date === selection.date);
    if (existing) existing.quantity += selection.quantity;
    else draft.push(structuredClone(selection));
    showReview(false);
    if (!tray.open) openTray();
  });
  document.addEventListener('nutrition:mealpickerclose', () => {
    if (draft.length && tray.open) showReview();
  });
  moreButton.addEventListener('click', () => {
    const last = draft[draft.length - 1];
    if (!last || saving) return;
    if (quickAdd) {
      closeTray();
      return;
    }
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
    const label = title.textContent.replace(/^Add to /, '');
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
    resetExpansion();
    if (draft.length) showReview(false);
    else if (!choosingDate) showMeals(false, false);
    updateTitle();
    tray.showModal();
    otherItems.scrollTop = 0;
    trigger.setAttribute('aria-expanded', 'true');
    title.focus({ preventScroll: true });
  }

  async function closeTray(restoreFocus = true, { preserveDraft = false } = {}) {
    if (!tray.open || closing) return;
    cancelAnimationFrame(scrollMomentum);
    closing = true;
    tray.classList.add('is-closing');
    if (!reducedMotion.matches) {
      await Promise.all(tray.getAnimations().map((animation) => animation.finished.catch(() => {})));
    }
    tray.close();
    if (!preserveDraft) {
      draft.length = 0;
      items.replaceChildren();
      otherItems.replaceChildren();
      other.hidden = true;
      showMeals(false, false);
    }
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
    await closeTray(false, { preserveDraft: true });
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
