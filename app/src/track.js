(() => {
  const app = document.querySelector('.app');
  const content = document.querySelector('.track-content');
  const periodTabs = content.querySelector('.track-period');
  const note = document.querySelector('#track-note');
  const status = document.querySelector('.track-note-status');
  const notesDialog = document.querySelector('#track-notes-dialog');
  const notesTrigger = document.querySelector('.track-notes-open');
  const notesPreview = document.querySelector('.track-note-preview');
  let notesDate;
  let closingNotes = false;
  const editDialog = document.querySelector('#track-edit-dialog');
  const quantity = document.querySelector('#track-edit-quantity');
  const storageKey = 'nutrition-track-v1';
  const highlightedNutrients = [
    ['Fiber', 'Dietary Fiber (g)', 'g'],
    ['Iron', 'Iron (mg)', 'mg'],
    ['Calcium', 'Calcium (mg)', 'mg'],
    ['Vitamin A', 'Vitamin A (RE)', 'RE'],
    ['Vitamin C', 'Vitamin C (mg)', 'mg'],
    ['Vitamin B12', 'Vitamin B12 (mcg)', 'mcg'],
    ['Folate', 'Folate (mcg)', 'mcg'],
    ['Potassium', 'Potassium (mg)', 'mg'],
  ];
  const highlightedMinerals = [
    highlightedNutrients[1], highlightedNutrients[2], highlightedNutrients[7],
    ['Sodium', 'Sodium (mg)', 'mg'],
  ];
  const trackedNutrients = [...highlightedNutrients, highlightedMinerals[3]];
  // Health Canada daily values (ages 4+), not personalized intake targets.
  // Source: https://www.canada.ca/en/health-canada/services/technical-documents-labelling-requirements/table-daily-values/nutrition-labelling.html
  // Vitamin A is supplied as RE; do not compare it directly with a RAE reference.
  const dailyReferences = {
    'Dietary Fiber (g)': 28, 'Iron (mg)': 18, 'Calcium (mg)': 1300,
    'Vitamin C (mg)': 90, 'Vitamin B12 (mcg)': 2.4,
    'Folate (mcg)': 400, 'Potassium (mg)': 3400, 'Sodium (mg)': 2300,
  };
  const dateKey = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const parseDate = (value) => new Date(`${value}T12:00:00`);
  const addDays = (date, days) => { const result = new Date(date); result.setDate(result.getDate() + days); return result; };
  const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });
  let selected = app.dataset.selectedDate;
  let period = 'day';
  let summaryPage = 0;
  let summaryExpanded = false;
  let summaryAnimations = [];
  let summarySlideAnimations = [];
  let summaryIndicatorAnimation;
  let editing;
  let editTrigger;
  let pendingLogKind = null;
  let logs = {};
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) logs = saved;
    else logs[app.dataset.today] = { entries: [{ key: 'sample-avocado', name: 'Avocado', image: 'avocado.jpg', meal: 'Breakfast', serving: '1 avocado', quantity: 1, macros: [12.8, 22, 3], calories: 240, fibre: 10 }], note: '' };
  } catch {}

  function dayLog(date) {
    if (!logs[date] || !Array.isArray(logs[date].entries)) logs[date] = { entries: [], note: '' };
    return logs[date];
  }

  function persist() {
    try { localStorage.setItem(storageKey, JSON.stringify(logs)); return true; }
    catch { status.textContent = 'Changes are available for this visit. Browser storage is unavailable.'; return false; }
  }

  window.nutritionTrack = {
    getQuantity: (date, key) => dayLog(date).entries.find((entry) => entry.key === key)?.quantity || 0,
  };

  function reportDates() {
    const date = parseDate(selected);
    const start = period === 'week' ? addDays(date, -((date.getDay() + 6) % 7)) : date;
    return Array.from({ length: period === 'week' ? 7 : 1 }, (_, index) => dateKey(addDays(start, index)));
  }

  const number = (value) => Number(value.toFixed(1)).toLocaleString('en-US');
  function nutrient(food, name) {
    return Number(food.nutrition?.nutrients?.find((row) => row[0] === name)?.[1]) || 0;
  }

  function nutrientValue(food, name) {
    const raw = food.nutrition?.nutrients?.find((row) => row[0] === name)?.[1];
    if (raw == null || String(raw).trim() === '' || raw === '-') return null;
    const value = Number(String(raw).replace(/\+$/, ''));
    return Number.isFinite(value) ? value : null;
  }

  function renderHighlights(entries, definitions, days = 1) {
    return definitions.map(([label, key, unit]) => {
      let total = 0;
      let missing = false;
      entries.forEach((entry) => {
        const value = key === 'Dietary Fiber (g)' ? entry.fibre : entry.nutrients?.[key];
        if (!Number.isFinite(value)) missing = true;
        else total += value * entry.quantity;
      });
      const goal = dailyReferences[key] * days;
      const hasGoal = Number.isFinite(goal);
      const sodium = key === 'Sodium (mg)';
      const progress = Math.max(0, Math.min(100, total / goal * 100));
      const value = missing ? '\u2014' : `${number(total)} ${unit}`;
      const amount = !missing && hasGoal ? `${number(total)} / ${number(goal)} ${unit}` : value;
      const bar = !missing && hasGoal
        ? `<div class="track-highlight-bar${sodium && total > goal ? ' is-over' : ''}" style="--progress: ${progress}%" role="progressbar" aria-label="${label}${sodium ? ' limit' : ''}" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${Math.min(goal, Math.max(0, total))}" aria-valuetext="${amount}"><span></span></div>`
        : '<div class="track-highlight-bar is-unavailable" aria-hidden="true"></div>';
      return `<div class="track-highlight"><div class="track-highlight-heading"><span>${label}</span><strong>${amount}</strong></div>${bar}</div>`;
    }).join('');
  }

  function syncPeriodIndicator() {
    const label = periodTabs.querySelector('[aria-pressed="true"] span').getBoundingClientRect();
    const tabs = periodTabs.getBoundingClientRect();
    if (!tabs.width || !label.width) return;
    periodTabs.style.setProperty('--indicator-x', `${label.left - tabs.left - 8}px`);
    periodTabs.style.setProperty('--indicator-width', `${label.width + 16}px`);
  }
  new ResizeObserver(syncPeriodIndicator).observe(periodTabs);
  document.fonts.ready.then(syncPeriodIndicator);

  function startAdd(kind) {
    pendingLogKind = kind;
    location.hash = 'menu';
  }
  const entryKind = (entry) => entry.kind || (entry.meal === 'Snack' ? 'snack' : entry.meal === 'Drink' ? 'drink' : 'meal');

  function renderEntries(target, entries, kind) {
    target.replaceChildren();
    if (!entries.length) {
      const button = document.createElement('button');
      button.className = 'track-empty-card';
      button.type = 'button';
      button.innerHTML = `<span>Add ${kind === 'meal' ? 'a meal' : kind === 'snack' ? 'a snack' : 'a drink'}</span><svg class="icon" aria-hidden="true"><use href="#plus"/></svg>`;
      button.addEventListener('click', () => startAdd(kind));
      target.append(button);
      return;
    }
    const groups = new Map();
    entries.forEach((entry) => {
      const label = `${period === 'week' ? `${dateFormat.format(parseDate(entry.date))} · ` : ''}${kind === 'meal' ? entry.meal : kind === 'snack' ? 'Snack' : 'Drink'}`;
      if (!groups.has(label)) groups.set(label, []);
      groups.get(label).push(entry);
    });
    groups.forEach((items, label) => {
      const group = document.createElement('div');
      group.className = 'menu-ingredients track-meal-group';
      const heading = document.createElement('h3');
      heading.textContent = label;
      group.append(heading);
      items.forEach((entry) => {
        const row = document.createElement('div');
        row.className = 'menu-food track-food';
        if (entry.image && /^[\w.-]+$/.test(entry.image)) {
          const photo = document.createElement('img');
          photo.src = `assets/foods/${entry.image}`;
          photo.alt = '';
          row.append(photo);
        }
        const text = document.createElement('div');
        const name = document.createElement('strong');
        name.textContent = entry.name;
        const serving = document.createElement('span');
        serving.className = 'sr-only';
        serving.textContent = `${number(entry.quantity)} ${entry.quantity === 1 ? 'serving' : 'servings'} · ${entry.serving}`;
        text.append(name, serving);
        const button = document.createElement('button');
        button.className = 'track-edit';
        button.type = 'button';
        button.setAttribute('aria-label', `Edit ${entry.name}`);
        button.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#edit"/></svg>';
        button.addEventListener('click', () => {
          editing = entry;
          editTrigger = button;
          document.querySelector('#track-edit-title').textContent = entry.name;
          quantity.value = entry.quantity;
          editDialog.showModal();
          quantity.focus();
          quantity.select();
        });
        row.append(text, button);
        group.append(row);
      });
      target.append(group);
    });
  }

  function syncSummaryIndicator(animate) {
    const pages = document.querySelector('.track-summary-pages');
    const indicator = document.querySelector('.track-summary-indicator');
    const bounds = indicator.getBoundingClientRect();
    const parent = pages.getBoundingClientRect();
    const start = bounds.left - parent.left - parent.width / 2;
    const target = (summaryPage - 1) * 16 - 7.5;
    const left = (value) => `calc(50% + ${value}px)`;
    summaryIndicatorAnimation?.cancel();
    indicator.style.left = left(target);
    indicator.style.width = '15px';
    if (!animate || pages.hidden || !bounds.width || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // The leading edge reaches the next dot before the trailing edge catches up.
    const bridgeLeft = Math.min(start, target);
    const bridgeRight = Math.max(start + bounds.width, target + 15);
    const animation = indicator.animate([
      { left: left(start), width: `${bounds.width}px`, offset: 0 },
      { left: left(bridgeLeft), width: `${bridgeRight - bridgeLeft}px`, offset: .5 },
      { left: left(target), width: '15px', offset: 1 },
    ], { duration: 360, easing: 'cubic-bezier(.4, 0, .2, 1)', fill: 'both' });
    summaryIndicatorAnimation = animation;
    animation.onfinish = () => {
      if (summaryIndicatorAnimation !== animation) return;
      animation.cancel();
      summaryIndicatorAnimation = null;
    };
  }

  function render(animateIndicator = false) {
    summarySlideAnimations.forEach((animation) => animation.cancel());
    summarySlideAnimations = [];
    summaryAnimations.forEach((animation) => animation.cancel());
    summaryAnimations = [];
    const isWeek = period === 'week';
    content.querySelector('.track-report').hidden = isWeek;
    content.querySelector('.track-week-placeholder').hidden = !isWeek;
    periodTabs.querySelectorAll('[data-period]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.period === period)));
    syncPeriodIndicator();
    if (isWeek) return;
    const dates = reportDates();
    const entries = dates.flatMap((date) => dayLog(date).entries.map((entry) => ({ ...entry, date })));
    const total = entries.reduce((sum, entry) => {
      entry.macros.forEach((value, index) => { sum.macros[index] += value * entry.quantity; });
      sum.calories += entry.calories * entry.quantity;
      sum.fibre += entry.fibre * entry.quantity;
      return sum;
    }, { macros: [0, 0, 0], calories: 0, fibre: 0 });
    const format = (date) => dateFormat.format(parseDate(date));
    document.querySelector('#track-report-date').textContent = period === 'day' ? `Report for ${format(selected)}` : `${format(dates[0])} – ${format(dates[6])}`;
    ['previous', 'next'].forEach((direction) => document.querySelector(`.track-${direction}`).setAttribute('aria-label', `${direction === 'previous' ? 'Previous' : 'Next'} ${period}`));
    const goals = [130, 72, 100].map((value) => value * dates.length);
    document.querySelector('.track-macros').innerHTML = ['Carbs', 'Fats', 'Protein'].map((label, index) => {
      const value = number(total.macros[index]);
      const goal = goals[index];
      return `<div class="macro"><div class="macro-ring" style="--progress: ${Math.min(100, total.macros[index] / goal * 100)}%" role="img" aria-label="${label}: ${value} of ${goal} grams"><span>${value}g<small>of ${goal}g</small></span></div><span>${label}</span></div>`;
    }).join('');
    document.querySelector('#track-macro-title').textContent = ['Your Macro Nutrients', 'Your Vitamins', 'Your Minerals'][summaryPage];
    const macros = document.querySelector('.track-macros');
    macros.style.visibility = summaryPage === 0 ? 'visible' : 'hidden';
    macros.setAttribute('aria-hidden', String(summaryPage !== 0));
    macros.inert = summaryPage !== 0;
    const alternate = document.querySelector('.track-summary-alt');
    alternate.hidden = summaryPage === 0;
    const definitions = summaryPage === 1 ? highlightedNutrients : highlightedMinerals;
    alternate.innerHTML = summaryPage === 0 ? '' : renderHighlights(entries, definitions.slice(0, 4), dates.length);
    const details = document.querySelector('#track-nutrient-details');
    details.innerHTML = summaryPage === 0
      ? `<div><span>Energy</span><strong>${number(total.calories)} kcal</strong></div><div><span>Fiber</span><strong>${number(total.fibre)}g</strong></div>`
      : renderHighlights(entries, definitions.slice(4), dates.length);
    details.hidden = !summaryExpanded;
    details.inert = !summaryExpanded;
    document.querySelector('.track-summary-pages').hidden = summaryExpanded;
    const more = document.querySelector('.track-more');
    more.setAttribute('aria-expanded', String(summaryExpanded));
    more.querySelector('span').textContent = summaryExpanded ? 'Less' : 'More';
    document.querySelector('.track-summary-previous').disabled = summaryPage === 0;
    document.querySelector('.track-summary-next').disabled = summaryPage === 2;
    document.querySelectorAll('.track-summary-pages span').forEach((dot, index) => dot.classList.toggle('is-active', index === summaryPage));
    syncSummaryIndicator(animateIndicator);
    const meals = entries.filter((entry) => entryKind(entry) === 'meal');
    renderEntries(document.querySelector('.track-meal-list'), meals, 'meal');
    renderEntries(document.querySelector('.track-snack-list'), entries.filter((entry) => entryKind(entry) === 'snack'), 'snack');
    renderEntries(document.querySelector('.track-drink-list'), entries.filter((entry) => entryKind(entry) === 'drink'), 'drink');
    document.querySelector('.track-add').hidden = !meals.length;
    if (!notesDialog.open) note.value = dayLog(selected).note || '';
    const hasNote = Boolean(dayLog(selected).note?.trim());
    notesPreview.textContent = hasNote ? 'View note' : 'Add a note';
    notesTrigger.querySelector('use').setAttribute('href', hasNote ? '#edit' : '#plus');
    notesTrigger.setAttribute('aria-label', `${dayLog(selected).note?.trim() ? 'Edit' : 'Write'} notes for ${format(selected)}`);
    document.querySelector('#track-notes-title').textContent = period === 'week' ? `Notes · ${format(selected)}` : 'Notes';
  }

  let periodAnimation;
  let dateAnimation;
  function renderDateChange() {
    dateAnimation?.cancel();
    periodAnimation?.cancel();
    if (content.hidden || period === 'week' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      render();
      return;
    }
    const report = content.querySelector('.track-report');
    const outgoing = report.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 90, easing: 'ease-out', fill: 'forwards',
    });
    dateAnimation = outgoing;
    outgoing.onfinish = () => {
      if (dateAnimation !== outgoing) return;
      render();
      outgoing.cancel();
      dateAnimation = report.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 120, easing: 'ease-out',
      });
    };
  }
  function selectPeriod(next) {
    if (next === period) return;
    periodTabs.classList.add('is-switching');
    const direction = next === 'week' ? 1 : -1;
    period = next;
    document.dispatchEvent(new CustomEvent('nutrition:periodchange'));
    periodAnimation?.cancel();
    dateAnimation?.cancel();
    render();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      periodAnimation = content.querySelector(period === 'week' ? '.track-week-placeholder' : '.track-report').animate([
        { opacity: .6, transform: `translateX(${direction * 24}px)` },
        { opacity: 1, transform: 'translateX(0)' },
      ], { duration: 240, easing: 'cubic-bezier(.2, 0, 0, 1)' });
    }
  }
  content.querySelectorAll('[data-period]').forEach((button) => button.addEventListener('click', () => selectPeriod(button.dataset.period)));

  // Match the calendar's direction lock so a small wobble cannot steal a swipe.
  let periodSwipe;
  let suppressPeriodClick = false;
  content.addEventListener('pointerdown', (event) => {
    suppressPeriodClick = false;
    if (!event.isPrimary) { periodSwipe = null; return; }
    if (event.button !== 0 || event.target.closest('input, textarea, select, [contenteditable="true"], .calendar-dropdown')) return;
    periodSwipe = {
      id: event.pointerId, x: event.clientX, y: event.clientY,
      scrollTop: content.scrollTop, axis: null,
      summary: Boolean(event.target.closest('.track-macro-card')),
    };
  });
  content.addEventListener('pointermove', (event) => {
    if (!periodSwipe || event.pointerId !== periodSwipe.id) return;
    const dx = event.clientX - periodSwipe.x;
    const dy = event.clientY - periodSwipe.y;
    if (!periodSwipe.axis) {
      const horizontal = Math.abs(dx);
      const vertical = Math.abs(dy);
      if (horizontal >= 12 && horizontal > vertical) periodSwipe.axis = 'horizontal';
      else if (vertical >= 20 && vertical > horizontal * 1.5) periodSwipe.axis = 'vertical';
      else return;
      content.setPointerCapture(event.pointerId);
    }
    if (event.cancelable) event.preventDefault();
    if (periodSwipe.axis === 'vertical') content.scrollTop = periodSwipe.scrollTop - dy;
  });
  function finishPeriodSwipe(event) {
    if (!periodSwipe || event.pointerId !== periodSwipe.id) return;
    const swipe = periodSwipe;
    periodSwipe = null;
    const dx = event.clientX - swipe.x;
    const dy = event.clientY - swipe.y;
    suppressPeriodClick = Boolean(swipe.axis) || Math.max(Math.abs(dx), Math.abs(dy)) >= 8;
    if (content.hasPointerCapture(event.pointerId)) content.releasePointerCapture(event.pointerId);
    if (event.type === 'pointerup' && swipe.axis === 'horizontal' && Math.abs(dx) >= 28) {
      if (swipe.summary) selectSummary(dx < 0 ? 'next' : 'previous');
      else selectPeriod(dx < 0 ? 'week' : 'day');
    }
  }
  content.addEventListener('pointerup', finishPeriodSwipe);
  content.addEventListener('pointercancel', finishPeriodSwipe);
  content.addEventListener('lostpointercapture', (event) => {
    if (event.target === content) periodSwipe = null;
  });
  content.addEventListener('click', (event) => {
    if (!suppressPeriodClick || event.detail === 0) return;
    suppressPeriodClick = false;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);
  function selectSummary(direction) {
    const step = direction === 'previous' ? -1 : 1;
    const next = Math.max(0, Math.min(2, summaryPage + step));
    if (next === summaryPage) return;
    const body = document.querySelector('.track-summary-overview');
    const title = document.querySelector('#track-macro-title');
    const outgoingOpacity = getComputedStyle(body).opacity;
    summarySlideAnimations.forEach((animation) => animation.cancel());
    summarySlideAnimations = [];
    summaryPage = next;
    summaryExpanded = false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      render();
      return;
    }
    const outgoing = [body, title].map((element) => element.animate([
      { opacity: outgoingOpacity, transform: 'translateX(0)' },
      { opacity: 0, transform: `translateX(${-step * 8}px)` },
    ], { duration: 100, easing: 'ease-out', fill: 'both' }));
    summarySlideAnimations = outgoing;
    outgoing[0].onfinish = () => {
      if (!summarySlideAnimations.includes(outgoing[0])) return;
      render(true);
      const incoming = [body, title].map((element) => element.animate([
        { opacity: 0, transform: `translateX(${step * 8}px)` },
        { opacity: 1, transform: 'translateX(0)' },
      ], { duration: 240, easing: 'cubic-bezier(.2, 0, 0, 1)', fill: 'both' }));
      summarySlideAnimations = incoming;
      summarySlideAnimations.forEach((animation) => {
        animation.onfinish = () => {
          if (!summarySlideAnimations.includes(animation)) return;
          animation.cancel();
          summarySlideAnimations = summarySlideAnimations.filter((current) => current !== animation);
        };
      });
    };
  }
  ['previous', 'next'].forEach((direction) => document.querySelector(`.track-summary-${direction}`).addEventListener('click', () => selectSummary(direction)));
  ['previous', 'next'].forEach((direction) => document.querySelector(`.track-${direction}`).addEventListener('click', () => {
    const date = dateKey(addDays(parseDate(selected), (direction === 'previous' ? -1 : 1) * (period === 'week' ? 7 : 1)));
    document.dispatchEvent(new CustomEvent('nutrition:selectdate', { detail: { date } }));
  }));
  function toggleSummary() {
    const details = document.querySelector('#track-nutrient-details');
    const pages = document.querySelector('.track-summary-pages');
    const elements = [details, pages];
    const starts = elements.map((element) => ({
      height: element.hidden ? 0 : element.getBoundingClientRect().height,
      margin: element.hidden ? '0px' : getComputedStyle(element).marginTop,
      opacity: element.hidden ? 0 : getComputedStyle(element).opacity,
      transform: element.hidden ? 'scale(.65)' : getComputedStyle(element).transform,
    }));
    summaryAnimations.forEach((animation) => animation.cancel());
    summaryAnimations = [];
    summaryExpanded = !summaryExpanded;
    details.inert = !summaryExpanded;
    const more = document.querySelector('.track-more');
    more.setAttribute('aria-expanded', String(summaryExpanded));
    more.querySelector('span').textContent = summaryExpanded ? 'Less' : 'More';
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    elements.forEach((element, index) => {
      const visible = index === 0 ? summaryExpanded : !summaryExpanded;
      if (reducedMotion) {
        element.hidden = !visible;
        return;
      }
      element.hidden = false;
      const frames = index === 1 ? [
        { height: `${starts[index].height}px`, marginTop: starts[index].margin, opacity: starts[index].opacity, transform: starts[index].transform, overflow: 'hidden', offset: 0 },
        { height: visible ? `${element.scrollHeight}px` : `${starts[index].height}px`, marginTop: visible ? '16px' : starts[index].margin, opacity: 0, transform: 'scale(.65)', overflow: 'hidden', offset: visible ? .55 : .45 },
        { height: visible ? `${element.scrollHeight}px` : '0px', marginTop: visible ? '16px' : '0px', opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(.65)', overflow: 'hidden', offset: 1 },
      ] : [
        { height: `${starts[index].height}px`, marginTop: starts[index].margin, opacity: starts[index].opacity, overflow: 'hidden' },
        { height: visible ? `${element.scrollHeight}px` : '0px', marginTop: visible ? '16px' : '0px', opacity: visible ? 1 : 0, overflow: 'hidden' },
      ];
      const animation = element.animate(frames, { duration: 280, easing: 'cubic-bezier(.4, 0, .2, 1)', fill: 'both' });
      summaryAnimations.push(animation);
      animation.onfinish = () => {
        if (!summaryAnimations.includes(animation)) return;
        element.hidden = !visible;
        animation.cancel();
        summaryAnimations = summaryAnimations.filter((current) => current !== animation);
      };
    });
  }
  document.querySelector('.track-more').addEventListener('click', toggleSummary);
  document.querySelector('.track-add').addEventListener('click', () => startAdd('meal'));
  window.addEventListener('hashchange', () => {
    periodTabs.classList.remove('is-switching');
    if (location.hash !== '#menu') pendingLogKind = null;
  });
  document.querySelector('[data-add-type="log"]').addEventListener('click', () => {
    if (location.hash === '#track') document.querySelector('.add-tray-close').click();
    else location.hash = 'track';
  });
  notesTrigger.addEventListener('click', () => {
    if (notesDialog.open || closingNotes) return;
    notesDate = selected;
    note.value = dayLog(notesDate).note || '';
    note.setAttribute('aria-label', `Notes for ${dateFormat.format(parseDate(notesDate))}`);
    document.querySelector('#track-note-editor-title').textContent = `Notes \u00b7 ${dateFormat.format(parseDate(notesDate))}`;
    status.textContent = '';
    notesDialog.showModal();
    notesTrigger.setAttribute('aria-expanded', 'true');
    note.focus({ preventScroll: true });
  });
  async function closeNotes() {
    if (!notesDialog.open || closingNotes) return;
    closingNotes = true;
    notesDialog.classList.add('is-closing');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      await Promise.all(notesDialog.getAnimations().map((animation) => animation.finished.catch(() => {})));
    }
    notesDialog.close();
    notesDialog.classList.remove('is-closing');
    closingNotes = false;
  }
  document.querySelector('.track-notes-close').addEventListener('click', closeNotes);
  document.querySelector('.track-notes-save').addEventListener('click', () => {
    dayLog(notesDate || selected).note = note.value;
    status.textContent = persist() ? 'Saved' : status.textContent;
    closeNotes();
  });
  notesDialog.addEventListener('cancel', (event) => { event.preventDefault(); closeNotes(); });
  notesDialog.addEventListener('close', () => {
    notesTrigger.setAttribute('aria-expanded', 'false');
    render();
    if (!content.hidden) notesTrigger.focus({ preventScroll: true });
  });
  note.addEventListener('input', () => {
    dayLog(notesDate || selected).note = note.value;
    status.textContent = persist() ? 'Saved' : status.textContent;
  });
  document.addEventListener('nutrition:datechange', (event) => {
    const changed = selected !== event.detail.date;
    selected = event.detail.date;
    status.textContent = '';
    if (changed) renderDateChange();
    else render();
  });
  document.addEventListener('nutrition:logchange', (event) => {
    const { date, key, food, quantity: amount, kind } = event.detail;
    const log = dayLog(date);
    log.entries = log.entries.filter((entry) => entry.key !== key);
    if (amount > 0) log.entries.push({ key, name: food.name, image: food.image, meal: food.meal,
      kind: kind || pendingLogKind || (/smoothie|beverage|drink/i.test(food.category || '') ? 'drink' : food.meal === 'Snack' ? 'snack' : food.meal === 'Drink' ? 'drink' : 'meal'),
      serving: food.serving, quantity: amount,
      macros: ['Total Carbohydrates (g)', 'Total Fat (g)', 'Protein (g)'].map((name) => nutrient(food, name)),
      calories: Number(food.nutrition?.calories) || 0, fibre: nutrient(food, 'Dietary Fiber (g)'),
      nutrients: Object.fromEntries(trackedNutrients.map(([, name]) => [name, nutrientValue(food, name)])) });
    persist();
    render();
  });
  document.querySelector('.track-edit-close').addEventListener('click', () => editDialog.close());
  editDialog.addEventListener('close', () => {
    if (editTrigger?.isConnected) editTrigger.focus({ preventScroll: true });
    else content.querySelector('.track-add:not([hidden]), .track-empty-card').focus({ preventScroll: true });
  });
  function saveEdit(remove = false) {
    const log = dayLog(editing.date);
    const entry = log.entries.find((item) => item.key === editing.key);
    if (remove) log.entries = log.entries.filter((item) => item.key !== editing.key);
    else if (entry) entry.quantity = Number(quantity.value);
    persist();
    render();
    editDialog.close();
  }
  editDialog.querySelector('form').addEventListener('submit', (event) => { event.preventDefault(); saveEdit(); });
  document.querySelector('.track-remove').addEventListener('click', () => saveEdit(true));
  render();
})();
