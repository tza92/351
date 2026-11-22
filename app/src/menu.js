(() => {
  const app = document.querySelector('.app');
  const homeHeader = document.querySelector('.today-header');
  const homeContent = document.querySelector('.dashboard');
  const menuContent = document.querySelector('.menu-content');
  const search = document.querySelector('#menu-search');
  const list = document.querySelector('.menu-foods');
  const empty = document.querySelector('.menu-empty');
  const notice = document.querySelector('.menu-notice');
  const backToTop = document.querySelector('.menu-back-to-top');
  const portionDialog = document.querySelector('#portion-dialog');
  const portionInput = document.querySelector('#portion-input');
  const quantityInput = document.querySelector('#quantity-input');
  const mealToggle = document.querySelector('.meal-picker-toggle');
  const mealMenu = document.querySelector('#meal-picker-menu');
  const mealOptions = [...mealMenu.querySelectorAll('[data-meal]')];
  const stationPicker = document.querySelector('.menu-stations');
  const filterDialog = document.querySelector('#menu-filter-dialog');
  const filterForm = filterDialog.querySelector('form');
  let menuFilters = { diet: 'any', meats: [] };
  const breakfastStations = [
    { id: 'rise-and-dine', name: 'Rise and Dine' },
    { id: 'create', name: 'Create' },
    { id: 'leaf-market', name: 'Leaf Market' },
  ];
  const mainMealStations = [
    { id: 'global-eats', name: 'Global Eats' },
    { id: 'sprout', name: 'The Sprout' },
    { id: 'spoons-and-ladles', name: 'Spoons and Ladles' },
    { id: 'stacks', name: 'The Stacks' },
    { id: 'hot-plate', name: 'The Hot Plate (Teppanyaki)' },
    { id: 'yin-and-yum', name: 'Yin and Yum' },
    { id: 'fresh-bowl', name: 'Fresh Bowl' },
    { id: 'nori', name: 'Nori' },
    { id: 'leaf-market', name: 'Leaf Market' },
    { id: 'grill-house', name: 'Grill House' },
    { id: 'create', name: 'Create' },
    { id: 'al-forno', name: 'Al Forno' },
    { id: 'sweet-treats', name: 'Sweet Treats' },
  ];
  const stationsByMeal = {
    Breakfast: breakfastStations,
    Lunch: mainMealStations,
    Dinner: mainMealStations,
  };
  let selectedMeal = 'Breakfast';

  function closeMealMenu(restoreFocus = false) {
    mealMenu.hidden = true;
    mealToggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) mealToggle.focus({ preventScroll: true });
  }

  function openMealMenu() {
    mealMenu.hidden = false;
    mealToggle.setAttribute('aria-expanded', 'true');
    mealOptions.find((option) => option.dataset.meal === selectedMeal).focus({ preventScroll: true });
  }

  mealToggle.addEventListener('click', () => {
    if (mealMenu.hidden) openMealMenu();
    else closeMealMenu();
  });
  mealToggle.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    openMealMenu();
  });
  mealOptions.forEach((option) => option.addEventListener('click', () => {
    selectedMeal = option.dataset.meal;
    mealOptions.forEach((item) => item.setAttribute('aria-checked', String(item === option)));
    document.querySelector('.meal-picker-label').textContent = `${selectedMeal} Menu`;
    list.setAttribute('aria-label', `${selectedMeal} foods`);
    document.title = `${selectedMeal} Menu · Nutrition`;
    closeMealMenu(true);
    renderStations();
    updateFoods();
    filterFoods();
  }));
  mealMenu.addEventListener('keydown', (event) => {
    const index = mealOptions.indexOf(document.activeElement);
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % mealOptions.length;
    if (event.key === 'ArrowUp') next = (index - 1 + mealOptions.length) % mealOptions.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = mealOptions.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      mealOptions[next].focus();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mealMenu.hidden) {
      event.preventDefault();
      closeMealMenu(true);
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.meal-picker')) closeMealMenu();
  });
  document.addEventListener('focusin', (event) => {
    if (!event.target.closest('.meal-picker')) closeMealMenu();
  });
  const foodState = new Map();
  const collapsedStations = new Set();
  let foods = [];
  let selectedDate = app.dataset.selectedDate;
  const menuDate = document.querySelector('.menu-date');
  const sectionTitle = document.querySelector('#menu-section-title');
  const dateFormat = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  let station = 'all';
  let editingFood = null;
  let noticeTimeout;
  let lastEditButton;
  let currentPage;
  let pageAnimations = [];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function cancelPageAnimations() {
    pageAnimations.forEach((animation) => animation.cancel());
    pageAnimations = [];
  }

  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) cancelPageAnimations();
  });

  function syncBackToTop() {
    const visible = currentPage === 'menu' && menuContent.scrollTop > 160;
    if (!visible && document.activeElement === backToTop && currentPage === 'menu') {
      document.querySelector('#menu-title').focus({ preventScroll: true });
    }
    backToTop.hidden = !visible;
  }

  menuContent.addEventListener('scroll', syncBackToTop, { passive: true });
  backToTop.addEventListener('click', () => {
    document.querySelector('#menu-title').focus({ preventScroll: true });
    menuContent.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    syncBackToTop();
  });

  function showPage(page, focus = false) {
    if (page === currentPage) return;
    const animate = currentPage !== undefined && !reducedMotion.matches;
    cancelPageAnimations();
    closeMealMenu();
    const menu = page === 'menu';
    if (menu && document.querySelector('#calendar-dropdown').hidden === false) {
      document.querySelector('.today-title').click();
    }
    homeHeader.hidden = menu;
    homeContent.hidden = menu;
    menuContent.hidden = !menu;
    app.classList.toggle('is-menu', menu);
    document.title = menu ? `${selectedMeal} Menu · Nutrition` : 'Today · Nutrition';
    document.querySelectorAll('[data-page]').forEach((button) => {
      const active = button.dataset.page === page;
      button.classList.toggle('is-active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    notice.textContent = '';
    if (focus && menu) document.querySelector('#menu-title').focus({ preventScroll: true });
    if (animate) {
      const incoming = menu ? [menuContent] : [homeContent, homeHeader];
      pageAnimations = incoming.map((element) => element.animate([
        { opacity: 0 },
        { opacity: 1 },
      ], { duration: 120, easing: 'ease-out' }));
    }
    currentPage = page;
    syncBackToTop();
  }

  document.querySelectorAll('[data-page]').forEach((button) => {
    button.addEventListener('click', () => { location.hash = button.dataset.page; });
  });
  document.querySelector('.intake .text-link').addEventListener('click', () => { location.hash = 'menu'; });
  document.querySelector('.add-button').addEventListener('click', () => {
    location.hash = 'menu';
    search.focus({ preventScroll: true });
  });
  window.addEventListener('hashchange', () => showPage(location.hash === '#menu' ? 'menu' : 'home', true));

  function icon(name) {
    return `<svg class="icon" aria-hidden="true"><use href="#${name}"/></svg>`;
  }

  function updateFoods() {
    const data = window.nutritionMenus[selectedMeal];
    const menu = data?.days[selectedDate];
    const [year, month, day] = selectedDate.split('-').map(Number);
    const dateLabel = dateFormat.format(new Date(year, month - 1, day, 12));
    menuDate.textContent = dateLabel;
    sectionTitle.textContent = selectedDate === app.dataset.today ? 'From Today’s Menu' : 'From the Menu';
    foods = [];
    for (const [stationId, entries] of Object.entries(menu?.stations || {})) {
      entries.forEach((entry) => {
        const key = `${selectedDate}:${selectedMeal}:${stationId}:${entry.food}:${entry.serving}`;
        if (!foodState.has(key)) {
          foodState.set(key, { ...data.catalog[entry.food], category: entry.category || data.catalog[entry.food].category, diets: entry.diets || [], meats: entry.meats || [], station: stationId, serving: entry.serving, quantity: 1, added: 0 });
        }
        const food = foodState.get(key);
        food.id = foods.length;
        foods.push(food);
      });
    }
    clearTimeout(noticeTimeout);
    notice.textContent = '';
    menuContent.scrollTop = 0;
    syncBackToTop();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  }

  function createFoodRow(food, headingLevel = 4) {
    const row = document.createElement('li');
    row.className = 'menu-food';
    row.dataset.foodId = food.id;
    row.innerHTML = `
      <span class="food-thumbnail${food.image ? '' : ' food-thumbnail--placeholder'}">
        ${food.image ? `<img src="assets/foods/${food.image}" alt="" width="56" height="56">` : icon(food.category === 'Smoothies' ? 'drink' : food.category === 'Bakery' ? 'cookie' : 'plate')}
      </span>
      <div class="food-details">
        <h${headingLevel} class="food-name">${escapeHtml(food.name)}</h${headingLevel}>
        <p class="food-serving">${escapeHtml(food.serving)}</p>
      </div>
      <div class="food-controls">
        <button class="food-quantity" type="button" data-action="edit" aria-label="Edit ${escapeHtml(food.name)} quantity, ${food.quantity} ${food.quantity === 1 ? 'serving' : 'servings'}" aria-haspopup="dialog" aria-controls="portion-dialog">
          <span class="food-quantity-value">${food.quantity}</span>${icon('edit')}
        </button>
        <button class="food-add${food.added ? ' has-added' : ''}" type="button" data-action="add" aria-label="Add ${escapeHtml(food.name)}${food.added ? ` again, ${food.added} servings added this visit` : ''}">${icon(food.added ? 'check' : 'plus')}</button>
      </div>`;
    return row;
  }

  function createFoodList(items, headingLevel = 4) {
    const rows = document.createElement('ul');
    rows.className = 'menu-food-list';
    items.forEach((food) => rows.append(createFoodRow(food, headingLevel)));
    return rows;
  }

  function isIngredient(food) {
    const ingredientCategories = {
      create: ['Pastas', 'Bases', 'Proteins', 'Vegetables & herbs', 'Sauces & curries', 'Cheeses'],
      stacks: ['Breads & wraps', 'Proteins', 'Cheeses', 'Vegetables', 'Spreads & sauces'],
      'hot-plate': ['Bases', 'Proteins', 'Vegetables', 'Sauces & dips', 'Toppings'],
      'fresh-bowl': ['Bases', 'Proteins', 'Vegetables & sides', 'Sauces & dips', 'Toppings'],
      'leaf-market': selectedMeal === 'Breakfast'
        ? ['Yogurt & granola', 'Toppings']
        : ['Greens & vegetables', 'Proteins & legumes', 'Toppings', 'Dressings'],
    };
    return ingredientCategories[food.station]?.includes(food.category) || false;
  }

  function ingredientBuilder(stationId, stationFoods) {
    if (stationId === 'leaf-market' && selectedMeal === 'Breakfast') {
      return { name: 'Yogurt', bases: stationFoods.filter((food) => /yogurt/i.test(food.name)) };
    }
    if (stationId === 'create') {
      if (selectedMeal === 'Breakfast') {
        const base = stationFoods.find((food) => food.sourceName === 'Omelette Station');
        return { name: base?.name || 'Omelette', base };
      }
      if (stationFoods.some((food) => food.category === 'Pastas')) return { name: 'Pasta' };
      if (stationFoods.some((food) => food.category === 'Sauces & curries' && /curry/i.test(food.name))) return { name: 'Curry' };
      return { name: 'Create' };
    }
    if (stationId === 'hot-plate') {
      const base = stationFoods.find((food) => food.category === 'Breakfast dishes');
      if (base) return { name: base.name, base };
      return { name: stationFoods.some((food) => food.name.includes('Shawarma')) ? 'Shawarma' : 'Teppanyaki' };
    }
    if (stationId === 'fresh-bowl') {
      return { name: stationFoods.some((food) => food.name.includes('Falafel')) ? 'Mediterranean bowl' : 'Rice bowl' };
    }
    return { name: stationId === 'stacks' ? 'Sandwich' : 'Salad' };
  }

  function renderStations() {
    const stations = [{ id: 'all', name: 'All' }, ...stationsByMeal[selectedMeal]];
    if (!stations.some((item) => item.id === station)) station = 'all';
    const buttons = stations.map((item) => {
      const button = document.createElement('button');
      button.className = 'station-chip';
      button.type = 'button';
      button.dataset.station = item.id;
      button.setAttribute('aria-pressed', String(item.id === station));
      button.textContent = item.name;
      return button;
    });
    const filterButton = document.createElement('button');
    filterButton.className = 'menu-filter-toggle';
    filterButton.type = 'button';
    filterButton.setAttribute('aria-haspopup', 'dialog');
    filterButton.setAttribute('aria-controls', 'menu-filter-dialog');
    filterButton.innerHTML = `${icon('tune')}<span class="menu-filter-count" aria-hidden="true" hidden></span>`;
    buttons.splice(1, 0, filterButton);
    stationPicker.replaceChildren(...buttons);
    syncFilterButton();
    stationPicker.setAttribute('aria-label', `${selectedMeal} stations and filters`);
    const active = stationPicker.querySelector('[aria-pressed="true"]');
    stationPicker.scrollLeft = active.offsetLeft - stationPicker.firstElementChild.offsetLeft;
  }

  function filterCount() {
    return Number(menuFilters.diet !== 'any') + menuFilters.meats.length;
  }

  function syncFilterButton() {
    const button = stationPicker.querySelector('.menu-filter-toggle');
    const count = filterCount();
    button.classList.toggle('has-filters', count > 0);
    button.setAttribute('aria-label', count ? `Filter menu, ${count} ${count === 1 ? 'filter' : 'filters'} applied` : 'Filter menu');
    button.setAttribute('aria-expanded', String(filterDialog.open));
    const badge = button.querySelector('.menu-filter-count');
    badge.hidden = count === 0;
    badge.textContent = count;
  }

  function syncMeatOptions() {
    const vegan = filterForm.elements['menu-diet'].value === 'vegan';
    filterForm.querySelector('.menu-meat-options').disabled = vegan;
    if (vegan) filterForm.querySelectorAll('[name="menu-meat"]').forEach((input) => { input.checked = false; });
  }

  function openMenuFilters() {
    filterForm.elements['menu-diet'].value = menuFilters.diet;
    filterForm.querySelectorAll('[name="menu-meat"]').forEach((input) => { input.checked = menuFilters.meats.includes(input.value); });
    syncMeatOptions();
    filterDialog.showModal();
    filterForm.querySelector('[name="menu-diet"]:checked').focus({ preventScroll: true });
    syncFilterButton();
  }

  filterForm.addEventListener('change', (event) => {
    const input = event.target;
    if (input.name === 'menu-meat' && input.checked) {
      filterForm.querySelectorAll('[name="menu-meat"]').forEach((other) => {
        if (other !== input && (input.value === 'any-meat' || other.value === 'any-meat')) other.checked = false;
      });
    }
    syncMeatOptions();
  });
  filterDialog.querySelector('.menu-filter-close').addEventListener('click', () => filterDialog.close());
  filterDialog.querySelector('.menu-filter-clear').addEventListener('click', () => {
    filterForm.reset();
    syncMeatOptions();
  });
  filterDialog.addEventListener('close', () => {
    syncFilterButton();
    stationPicker.querySelector('.menu-filter-toggle').focus({ preventScroll: true });
  });
  filterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    menuFilters = {
      diet: filterForm.elements['menu-diet'].value,
      meats: [...filterForm.querySelectorAll('[name="menu-meat"]:checked')].map((input) => input.value),
    };
    menuContent.scrollTop = 0;
    filterFoods();
    filterDialog.close();
    syncFilterButton();
  });

  function matchesDietaryFilter(food) {
    return menuFilters.diet === 'any' || food.diets.includes(menuFilters.diet);
  }

  function matchesFoodFilters(food) {
    return matchesDietaryFilter(food) && (!menuFilters.meats.length
      || (menuFilters.meats.includes('any-meat') ? food.meats.length > 0 : menuFilters.meats.some((meat) => food.meats.includes(meat))));
  }

  function filterFoods() {
    const query = search.value.trim().toLocaleLowerCase();
    const matches = (food) => food.name.toLocaleLowerCase().includes(query);
    let count = 0;
    const groups = [];
    stationsByMeal[selectedMeal].forEach((item) => {
      if (station !== 'all' && station !== item.id) return;
      const stationFoods = foods.filter((food) => food.station === item.id);
      if (!stationFoods.length) return;
      const choices = stationFoods.filter(isIngredient);
      let builder = choices.length ? ingredientBuilder(item.id, stationFoods) : null;
      if (builder && ((builder.base && !matchesDietaryFilter(builder.base))
        || (builder.bases && !builder.bases.some(matchesDietaryFilter)))) builder = null;
      const dishes = stationFoods.filter((food) => (!builder || !isIngredient(food)) && food !== builder?.base && matchesFoodFilters(food) && matches(food));
      const builderMatches = builder && (builder.name.toLocaleLowerCase().includes(query) || builder.base?.sourceName.toLocaleLowerCase().includes(query));
      const ingredients = builder ? choices.filter((food) => matchesFoodFilters(food) && (builderMatches || matches(food))) : [];
      if (!dishes.length && !ingredients.length) return;
      count += dishes.length + ingredients.length;
      const group = document.createElement('section');
      group.className = 'menu-food-group';
      const heading = document.createElement('h3');
      heading.id = `foods-${item.id}`;
      heading.className = 'menu-station-heading';
      heading.hidden = station !== 'all';
      const expanded = station !== 'all' || Boolean(query) || filterCount() > 0 || !collapsedStations.has(`${selectedMeal}:${item.id}`);
      const toggle = document.createElement('button');
      toggle.className = 'menu-station-toggle';
      toggle.type = 'button';
      toggle.dataset.action = 'toggle-station';
      toggle.dataset.stationId = item.id;
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.setAttribute('aria-controls', `foods-${item.id}-content`);
      toggle.innerHTML = `<span>${escapeHtml(item.name)}</span>${icon('expand-more')}`;
      heading.append(toggle);
      group.setAttribute('aria-labelledby', heading.id);
      group.append(heading);
      const content = document.createElement('div');
      content.id = `foods-${item.id}-content`;
      content.className = 'menu-station-content';
      content.hidden = !expanded;
      if (dishes.length) content.append(createFoodList(dishes));
      if (ingredients.length) {
        const section = document.createElement('section');
        section.className = 'menu-ingredients';
        if (builder.base) section.dataset.builderFoodId = builder.base.id;
        const title = document.createElement('h4');
        title.id = `foods-${item.id}-ingredients`;
        title.className = 'menu-ingredients-heading';
        title.textContent = `${builder.name} - pick your ingredients`;
        section.setAttribute('aria-labelledby', title.id);
        section.append(title, createFoodList(ingredients, 5));
        content.append(section);
      }
      group.append(content);
      groups.push(group);
    });
    list.replaceChildren(...groups);
    syncBackToTop();
    empty.hidden = count > 0;
    if (!count) {
      const hasStationFoods = foods.some((food) => station === 'all' || food.station === station);
      empty.textContent = !foods.length
        ? `No ${selectedMeal.toLowerCase()} menu listed for ${menuDate.textContent}.`
        : filterCount() > 0
        ? 'No items match these filters. Try changing your search or clearing a filter.'
        : hasStationFoods
        ? 'No items match your search. Try another search or station.'
        : `No items listed for ${stationsByMeal[selectedMeal].find((item) => item.id === station).name}.`;
    }
  }

  search.addEventListener('input', filterFoods);

  // Emulate a horizontal swipe with the preview's mouse cursor.
  let stationSwipe = null;
  let suppressStationClick = false;
  stationPicker.addEventListener('pointerdown', (event) => {
    suppressStationClick = false;
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    stationSwipe = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: stationPicker.scrollLeft,
      dragging: false,
    };
  });
  window.addEventListener('pointermove', (event) => {
    if (!stationSwipe || event.pointerId !== stationSwipe.pointerId) return;
    const distance = event.clientX - stationSwipe.startX;
    if (!stationSwipe.dragging) {
      if (Math.abs(distance) < 6) return;
      if (Math.abs(event.clientY - stationSwipe.startY) > Math.abs(distance)) {
        stationSwipe = null;
        return;
      }
      stationSwipe.dragging = true;
      stationPicker.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
    stationPicker.scrollLeft = stationSwipe.scrollLeft - distance;
  });
  function endStationSwipe(event) {
    if (!stationSwipe || event.pointerId !== stationSwipe.pointerId) return;
    suppressStationClick = stationSwipe.dragging;
    stationSwipe = null;
    if (stationPicker.hasPointerCapture(event.pointerId)) {
      stationPicker.releasePointerCapture(event.pointerId);
    }
  }
  window.addEventListener('pointerup', endStationSwipe);
  window.addEventListener('pointercancel', endStationSwipe);
  stationPicker.addEventListener('lostpointercapture', endStationSwipe);
  stationPicker.addEventListener('click', (event) => {
    if (event.target.closest('.menu-filter-toggle')) {
      openMenuFilters();
      return;
    }
    if (!suppressStationClick || event.detail === 0) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    suppressStationClick = false;
  }, true);

  stationPicker.addEventListener('click', (event) => {
    const button = event.target.closest('.station-chip');
    if (!button) return;
    station = button.dataset.station;
    stationPicker.querySelectorAll('.station-chip').forEach((chip) => {
      chip.setAttribute('aria-pressed', String(chip === button));
    });
    filterFoods();
  });

  list.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    if (action === 'toggle-station') {
      const expanded = button.getAttribute('aria-expanded') !== 'true';
      const key = `${selectedMeal}:${button.dataset.stationId}`;
      if (expanded) collapsedStations.delete(key);
      else collapsedStations.add(key);
      button.setAttribute('aria-expanded', String(expanded));
      document.getElementById(button.getAttribute('aria-controls')).hidden = !expanded;
      return;
    }
    const row = button.closest('.menu-food');
    const food = foods[Number(row.dataset.foodId)];
    if (action === 'edit') {
      editingFood = food;
      lastEditButton = button;
      portionDialog.querySelector('.portion-food-name').textContent = food.name;
      portionInput.value = food.serving;
      quantityInput.value = food.quantity;
      portionDialog.showModal();
      quantityInput.focus();
      quantityInput.select();
    } else if (action === 'add') {
      food.added += food.quantity;
      button.classList.add('has-added');
      button.innerHTML = icon('check');
      button.setAttribute('aria-label', `Add ${food.name} again, ${food.added} servings added this visit`);
      clearTimeout(noticeTimeout);
      notice.textContent = `${food.quantity} ${food.quantity === 1 ? 'serving' : 'servings'} of ${food.name} added.`;
      noticeTimeout = setTimeout(() => { notice.textContent = ''; }, 3500);
    }
  });

  portionDialog.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const serving = portionInput.value.trim();
    if (!serving) {
      portionInput.setCustomValidity('Enter a serving size.');
      portionInput.reportValidity();
      return;
    }
    editingFood.serving = serving;
    editingFood.quantity = Number(quantityInput.value);
    const row = list.querySelector(`[data-food-id="${editingFood.id}"]`);
    row.querySelector('.food-quantity-value').textContent = editingFood.quantity;
    row.querySelector('.food-serving').textContent = serving;
    row.querySelector('.food-quantity').setAttribute('aria-label', `Edit ${editingFood.name} quantity, ${editingFood.quantity} ${editingFood.quantity === 1 ? 'serving' : 'servings'}`);
    portionDialog.close();
  });
  portionInput.addEventListener('input', () => portionInput.setCustomValidity(''));
  portionDialog.querySelector('.portion-cancel').addEventListener('click', () => portionDialog.close());
  portionDialog.addEventListener('close', () => lastEditButton?.focus({ preventScroll: true }));

  document.addEventListener('nutrition:datechange', (event) => {
    selectedDate = event.detail.date;
    updateFoods();
    filterFoods();
  });

  showPage(location.hash === '#menu' ? 'menu' : 'home');
  renderStations();
  updateFoods();
  filterFoods();
})();
