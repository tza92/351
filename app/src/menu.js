(() => {
  const app = document.querySelector('.app');
  const homeHeader = document.querySelector('.today-header');
  const homeContent = document.querySelector('.dashboard');
  const menuContent = document.querySelector('.menu-content');
  const search = document.querySelector('#menu-search');
  const list = document.querySelector('.menu-foods');
  const empty = document.querySelector('.menu-empty');
  const notice = document.querySelector('.menu-notice');
  const portionDialog = document.querySelector('#portion-dialog');
  const portionInput = document.querySelector('#portion-input');
  const quantityInput = document.querySelector('#quantity-input');
  const mealToggle = document.querySelector('.meal-picker-toggle');
  const mealMenu = document.querySelector('#meal-picker-menu');
  const mealOptions = [...mealMenu.querySelectorAll('[data-meal]')];
  const stationPicker = document.querySelector('.menu-stations');
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
  const foods = [
    { name: 'Avocado', serving: '1 medium sized' },
    { name: 'Blueberries', serving: '1 cup' },
    { name: 'Banana', serving: '1 medium sized' },
    { name: 'Strawberries', serving: '1 cup' },
    { name: 'Cherry Tomatoes', serving: '½ cup' },
    { name: 'Baby Carrots', serving: '½ cup' },
  ].map((food, id) => ({ ...food, id, station: 'leaf-market', quantity: 1, added: 0 }));
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

  foods.forEach((food) => {
    const row = document.createElement('li');
    row.className = 'menu-food';
    row.dataset.foodId = food.id;
    row.innerHTML = `
      <span class="food-thumbnail${food.name === 'Baby Carrots' ? ' food-thumbnail--carrots' : food.name === 'Avocado' ? ' food-thumbnail--avocado' : ''}">
        <img src="assets/foods/${food.name.toLowerCase().replaceAll(' ', '-')}.jpg" alt="" width="56" height="56">
      </span>
      <div class="food-details">
        <h3>${food.name}</h3>
      </div>
      <div class="food-controls">
        <button class="food-quantity" type="button" data-action="edit" aria-label="Edit ${food.name} quantity, 1 serving" aria-haspopup="dialog" aria-controls="portion-dialog">
          <span class="food-quantity-value">1</span>${icon('edit')}
        </button>
        <button class="food-add" type="button" data-action="add" aria-label="Add ${food.name}">${icon('plus')}</button>
      </div>`;
    list.append(row);
  });

  function renderStations() {
    const stations = [{ id: 'all', name: 'All' }, ...stationsByMeal[selectedMeal]];
    if (!stations.some((item) => item.id === station)) station = 'all';
    stationPicker.replaceChildren(...stations.map((item) => {
      const button = document.createElement('button');
      button.className = 'station-chip';
      button.type = 'button';
      button.dataset.station = item.id;
      button.setAttribute('aria-pressed', String(item.id === station));
      button.textContent = item.name;
      return button;
    }));
    stationPicker.setAttribute('aria-label', `${selectedMeal} dining station`);
    const active = stationPicker.querySelector('[aria-pressed="true"]');
    stationPicker.scrollLeft = active.offsetLeft - stationPicker.firstElementChild.offsetLeft;
  }

  function filterFoods() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    foods.forEach((food) => {
      const visible = (station === 'all' || food.station === station) && food.name.toLocaleLowerCase().includes(query);
      list.children[food.id].hidden = !visible;
      if (visible) count++;
    });
    empty.hidden = count > 0;
    if (count === 0) {
      const hasStationFoods = foods.some((food) => station === 'all' || food.station === station);
      empty.textContent = hasStationFoods
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
    const row = button.closest('.menu-food');
    const food = foods[Number(row.dataset.foodId)];
    const action = button.dataset.action;
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
    const row = list.children[editingFood.id];
    row.querySelector('.food-quantity-value').textContent = editingFood.quantity;
    row.querySelector('.food-quantity').setAttribute('aria-label', `Edit ${editingFood.name} quantity, ${editingFood.quantity} ${editingFood.quantity === 1 ? 'serving' : 'servings'}`);
    portionDialog.close();
  });
  portionInput.addEventListener('input', () => portionInput.setCustomValidity(''));
  portionDialog.querySelector('.portion-cancel').addEventListener('click', () => portionDialog.close());
  portionDialog.addEventListener('close', () => lastEditButton?.focus({ preventScroll: true }));

  showPage(location.hash === '#menu' ? 'menu' : 'home');
  renderStations();
  filterFoods();
})();
