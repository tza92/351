(() => {
  const trigger = document.querySelector('.today-title');
  const dropdown = document.querySelector('#calendar-dropdown');
  const grid = document.querySelector('.calendar-days');
  const monthHeading = document.querySelector('#calendar-month');
  const previous = document.querySelector('.calendar-previous');
  const next = document.querySelector('.calendar-next');
  const completedFilter = document.querySelector('.calendar-filter-completed');
  const incompleteFilter = document.querySelector('.calendar-filter-incomplete');
  const weekDays = [...document.querySelectorAll('.week .day')];
  const weekStrip = document.querySelector('.week');
  const app = document.querySelector('.app');
  const dashboard = document.querySelector('.dashboard');
  let headerScrolled = false;
  const weekRange = document.querySelector('.week-label-range');
  // Keep the prototype's Wednesday and completed Tuesday consistent.
  const today = new Date(2026, 10, 18, 12);
  const completed = new Set(['2026-11-17']);
  let selected = new Date(today);
  let month = new Date(today.getFullYear(), today.getMonth(), 1, 12);
  const fullDate = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
  const shortMonth = new Intl.DateTimeFormat('en-US', { month: 'short' });

  function key(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  function fromKey(value) {
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day, 12);
  }

  function addDays(date, count) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + count, 12);
  }

  function startOfWeek(date) {
    return addDays(date, -((date.getDay() + 6) % 7));
  }

  function icon(name) {
    return `<svg class="icon day-plus${name === 'plus' ? ' day-add' : ''}" aria-hidden="true"><use href="#${name}"/></svg>`;
  }

  function renderWeekLabel() {
    const start = startOfWeek(selected);
    const currentWeek = key(start) === key(startOfWeek(today));
    const end = addDays(start, 6);
    const range = `${shortMonth.format(start)} ${start.getDate()}\u2013${start.getMonth() === end.getMonth() ? '' : `${shortMonth.format(end)} `}${end.getDate()}`;
    weekRange.textContent = range;
    trigger.classList.toggle('is-history', !currentWeek);
    trigger.setAttribute('aria-label', `Choose date, ${fullDate.format(selected)} selected`);
  }

  function renderWeek() {
    app.dataset.selectedDate = key(selected);
    app.dataset.today = key(today);
    renderWeekLabel();
    const start = startOfWeek(selected);
    weekDays.forEach((button, index) => {
      const date = addDays(start, index);
      const isToday = key(date) === key(today);
      const isSelected = key(date) === key(selected);
      const isComplete = completed.has(key(date));
      const isFuture = date > today;
      button.dataset.date = key(date);
      button.classList.toggle('is-selected', isSelected);
      button.classList.toggle('day--complete', isComplete);
      button.classList.toggle('day--future', isFuture);
      button.classList.toggle('day--missed', date < today && !isComplete);
      button.disabled = false;
      button.setAttribute('aria-pressed', String(isSelected));
      if (isToday) button.setAttribute('aria-current', 'date');
      else button.removeAttribute('aria-current');
      const state = isComplete ? 'completed' : isFuture ? 'upcoming' : isToday ? 'today' : 'not completed';
      button.setAttribute('aria-label', `${fullDate.format(date)}, ${state}`);
      button.querySelector('.day-circle').innerHTML = isComplete ? icon('check') : (isToday || isSelected) ? icon('plus') : '';
    });
  }

  function renderCalendar(focusDate = selected) {
    grid.getAnimations().forEach((animation) => animation.cancel());
    document.querySelector('.calendar-today').classList.toggle('is-current', key(selected) === key(today));
    monthHeading.textContent = monthName.format(month);
    const first = startOfWeek(month);
    const rows = document.createDocumentFragment();
    let focusKey = key(focusDate);
    if (focusDate.getFullYear() !== month.getFullYear() || focusDate.getMonth() !== month.getMonth()) focusKey = key(month);
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
      const row = document.createElement('div');
      row.className = 'calendar-row';
      row.setAttribute('role', 'row');
      row.classList.toggle('is-selected-week', key(addDays(first, rowIndex * 7)) === key(startOfWeek(selected)));
      for (let column = 0; column < 7; column++) {
        const date = addDays(first, rowIndex * 7 + column);
        const cell = document.createElement('div');
        cell.className = 'calendar-cell';
        const isComplete = completed.has(key(date));
        cell.classList.toggle('is-complete', isComplete);
        cell.classList.toggle('is-future', date > today);
        const filter = isComplete ? completedFilter : incompleteFilter;
        cell.classList.toggle('is-filtered', (isComplete || date < today) && filter.getAttribute('aria-pressed') === 'false');
        cell.setAttribute('role', 'gridcell');
        cell.setAttribute('aria-selected', String(key(date) === key(selected)));
        const button = document.createElement('button');
        button.className = 'calendar-date';
        button.type = 'button';
        button.textContent = date.getDate();
        button.dataset.date = key(date);
        button.tabIndex = key(date) === focusKey ? 0 : -1;
        const state = isComplete ? ', completed' : date > today ? ', upcoming' : date < today ? ', not completed' : '';
        button.setAttribute('aria-label', `${fullDate.format(date)}${state}`);
        if (key(date) === key(today)) button.setAttribute('aria-current', 'date');
        button.classList.toggle('is-selected', key(date) === key(selected));
        button.classList.toggle('is-future', date > today);
        button.classList.toggle('is-outside-month', date.getMonth() !== month.getMonth());
        cell.append(button);
        row.append(cell);
      }
      rows.append(row);
    }
    grid.replaceChildren(rows);
  }

  function closeCalendar(restoreFocus = false) {
    dropdown.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    document.querySelector('.today-header').classList.remove('calendar-open');
    if (restoreFocus) trigger.focus({ preventScroll: true });
  }

  function selectDate(date, restoreFocus = true) {
    selected = date;
    month = new Date(date.getFullYear(), date.getMonth(), 1, 12);
    renderWeek();
    closeCalendar(restoreFocus);
    document.dispatchEvent(new CustomEvent('nutrition:datechange', { detail: { date: key(selected) } }));
  }

  trigger.addEventListener('click', () => {
    if (!dropdown.hidden) return closeCalendar(true);
    month = new Date(selected.getFullYear(), selected.getMonth(), 1, 12);
    renderCalendar();
    dropdown.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    document.querySelector('.today-header').classList.add('calendar-open');
    grid.querySelector('[tabindex="0"]').focus({ preventScroll: true });
  });

  function slideIn(elements, direction) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    elements.forEach((element) => {
      element.getAnimations().forEach((animation) => animation.cancel());
      element.animate(
        [{ transform: `translateX(${direction * 24}px)`, opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }],
        { duration: 220, easing: 'cubic-bezier(.2, .8, .2, 1)' }
      );
    });
  }

  function changeMonth(direction) {
    month = new Date(month.getFullYear(), month.getMonth() + direction, 1, 12);
    renderCalendar();
    slideIn([grid], direction);
  }

  previous.addEventListener('click', () => changeMonth(-1));
  next.addEventListener('click', () => changeMonth(1));
  grid.addEventListener('click', (event) => {
    const button = event.target.closest('.calendar-date');
    if (button && !button.disabled) selectDate(fromKey(button.dataset.date));
  });
  const todayButton = document.querySelector('.calendar-today');
  todayButton.addEventListener('click', () => selectDate(new Date(today)));
  document.querySelector('.calendar-jump').addEventListener('click', () => {
    const oldMonth = month.getFullYear() * 12 + month.getMonth();
    month = new Date(today.getFullYear(), today.getMonth(), 1, 12);
    renderCalendar(today);
    const direction = Math.sign(month.getFullYear() * 12 + month.getMonth() - oldMonth);
    if (direction) slideIn([grid], direction);
    grid.querySelector('[aria-current="date"]').focus({ preventScroll: true });
  });
  [completedFilter, incompleteFilter].forEach((button) => button.addEventListener('click', () => {
    button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
    renderCalendar();
  }));
  weekDays.forEach((button) => button.addEventListener('click', () => selectDate(fromKey(button.dataset.date))));

  function bindHorizontalSwipe(target, onSwipe, canStart = () => true) {
    let gesture = null;
    let suppressClick = false;
    const scroller = target.closest('.calendar-dropdown') || dashboard;
    target.addEventListener('pointerdown', (event) => {
      suppressClick = false;
      if (event.button !== 0 || !event.isPrimary || !canStart(event)) return;
      gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, scrollTop: scroller.scrollTop, axis: null };
    });
    window.addEventListener('pointermove', (event) => {
      if (!gesture || event.pointerId !== gesture.id) return;
      const dx = event.clientX - gesture.x;
      const dy = event.clientY - gesture.y;
      if (!gesture.axis) {
        const horizontal = Math.abs(dx);
        const vertical = Math.abs(dy);
        // Ignore an initial wobble; require clearer intent before scrolling vertically.
        if (horizontal >= 12 && horizontal > vertical) gesture.axis = 'horizontal';
        else if (vertical >= 20 && vertical > horizontal * 1.5) gesture.axis = 'vertical';
        else return;
        target.setPointerCapture(event.pointerId);
      }
      if (event.cancelable) event.preventDefault();
      if (gesture.axis === 'vertical') scroller.scrollTop = gesture.scrollTop - dy;
    });
    window.addEventListener('pointerup', (event) => {
      if (!gesture || event.pointerId !== gesture.id) return;
      const finished = gesture;
      gesture = null;
      const dx = event.clientX - finished.x;
      const dy = event.clientY - finished.y;
      suppressClick = Boolean(finished.axis) || Math.max(Math.abs(dx), Math.abs(dy)) >= 8;
      if (finished.axis === 'horizontal' && Math.abs(dx) >= 28) onSwipe(dx < 0 ? 1 : -1);
      if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
    });
    window.addEventListener('pointercancel', (event) => {
      if (event.pointerId === gesture?.id) gesture = null;
    });
    target.addEventListener('lostpointercapture', (event) => {
      if (event.target === target) gesture = null;
    });
    target.addEventListener('click', (event) => {
      if (!suppressClick || event.detail === 0) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      suppressClick = false;
    }, true);
  }

  bindHorizontalSwipe(weekStrip, (direction) => {
    selectDate(addDays(selected, direction * 7), false);
    slideIn(weekDays, direction);
  }, (event) => !event.target.closest('.streak'));
  bindHorizontalSwipe(grid, changeMonth);
  grid.addEventListener('keydown', (event) => {
    const button = event.target.closest('.calendar-date');
    if (!button) return;
    const date = fromKey(button.dataset.date);
    const offsets = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7, Home: -((date.getDay() + 6) % 7), End: 6 - ((date.getDay() + 6) % 7) };
    let target;
    if (Object.hasOwn(offsets, event.key)) target = addDays(date, offsets[event.key]);
    else if (event.key === 'PageUp' || event.key === 'PageDown') {
      const direction = event.key === 'PageUp' ? -1 : 1;
      const lastDay = new Date(date.getFullYear(), date.getMonth() + direction + 1, 0, 12).getDate();
      target = new Date(date.getFullYear(), date.getMonth() + direction, Math.min(date.getDate(), lastDay), 12);
    } else return;
    event.preventDefault();
    const oldMonth = month.getFullYear() * 12 + month.getMonth();
    month = new Date(target.getFullYear(), target.getMonth(), 1, 12);
    renderCalendar(target);
    const newMonth = month.getFullYear() * 12 + month.getMonth();
    if (newMonth !== oldMonth) slideIn([grid], Math.sign(newMonth - oldMonth));
    grid.querySelector(`[data-date="${key(target)}"]`).focus({ preventScroll: true });
  });
  document.addEventListener('click', (event) => {
    if (!dropdown.hidden && !dropdown.contains(event.target) && !trigger.contains(event.target)) closeCalendar();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !dropdown.hidden) {
      event.preventDefault();
      closeCalendar(true);
    }
  });
  dropdown.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    setTimeout(() => {
      if (!dropdown.contains(document.activeElement) && !trigger.contains(document.activeElement)) closeCalendar();
    }, 0);
  });

  function syncScrollHeader() {
    const distance = Math.max(1, parseFloat(getComputedStyle(app).getPropertyValue('--top-header-height')) - 60);
    const offset = Math.max(0, Math.min(dashboard.scrollTop, distance));
    app.style.setProperty('--header-offset', `${offset}px`);
    app.style.setProperty('--header-progress', String(offset / distance));
    const scrolled = offset > 0;
    if (scrolled !== headerScrolled) {
      headerScrolled = scrolled;
      app.classList.toggle('header-scrolled', scrolled);
    }
    const hidden = offset >= distance;
    if (hidden && weekStrip.contains(document.activeElement)) trigger.focus({ preventScroll: true });
    weekStrip.inert = hidden;
    weekStrip.setAttribute('aria-hidden', String(hidden));
  }
  dashboard.addEventListener('scroll', syncScrollHeader, { passive: true });
  renderWeek();
  syncScrollHeader();
})();
