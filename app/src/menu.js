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
  const mealToggle = document.querySelector('.meal-picker-toggle');
  const mealMenu = document.querySelector('#meal-picker-menu');
  const mealOptions = [...mealMenu.querySelectorAll('[data-meal]')];
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
  ].map((food, id) => ({ ...food, id, station: 'sprout', quantity: 1, added: 0 }));
  let station = 'sprout';
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
      <div class="food-details">
        <h3>${food.name}</h3>
        <button class="food-serving" type="button" data-action="edit" aria-label="Edit serving size for ${food.name}">
          <span>${food.serving}</span>${icon('edit')}
        </button>
      </div>
      <div class="food-quantity" role="group" aria-label="Quantity for ${food.name}">
        <button type="button" data-action="decrease" aria-label="Decrease ${food.name} quantity" disabled>${icon('chevron')}</button>
        <output aria-label="${food.name} quantity">1</output>
        <button type="button" data-action="increase" aria-label="Increase ${food.name} quantity">${icon('chevron')}</button>
      </div>
      <button class="food-add" type="button" data-action="add" aria-label="Add ${food.name}">${icon('plus')}</button>`;
    list.append(row);
  });

  function filterFoods() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    foods.forEach((food) => {
      const visible = (station === 'all' || food.station === station) && food.name.toLocaleLowerCase().includes(query);
      list.children[food.id].hidden = !visible;
      if (visible) count++;
    });
    empty.hidden = count > 0;
  }

  search.addEventListener('input', filterFoods);
  document.querySelectorAll('.station-chip').forEach((button) => {
    button.addEventListener('click', () => {
      station = button.dataset.station;
      document.querySelectorAll('.station-chip').forEach((chip) => {
        chip.setAttribute('aria-pressed', String(chip === button));
      });
      filterFoods();
    });
  });

  list.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const row = button.closest('.menu-food');
    const food = foods[Number(row.dataset.foodId)];
    const action = button.dataset.action;
    if (action === 'increase' || action === 'decrease') {
      food.quantity = Math.max(1, Math.min(99, food.quantity + (action === 'increase' ? 1 : -1)));
      row.querySelector('output').textContent = food.quantity;
      row.querySelector('[data-action="decrease"]').disabled = food.quantity === 1;
      row.querySelector('[data-action="increase"]').disabled = food.quantity === 99;
    } else if (action === 'edit') {
      editingFood = food;
      lastEditButton = button;
      portionDialog.querySelector('.portion-food-name').textContent = food.name;
      portionInput.value = food.serving;
      portionDialog.showModal();
      portionInput.focus();
      portionInput.select();
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
    list.children[editingFood.id].querySelector('.food-serving span').textContent = serving;
    portionDialog.close();
  });
  portionInput.addEventListener('input', () => portionInput.setCustomValidity(''));
  portionDialog.querySelector('.portion-cancel').addEventListener('click', () => portionDialog.close());
  portionDialog.addEventListener('close', () => lastEditButton?.focus({ preventScroll: true }));

  showPage(location.hash === '#menu' ? 'menu' : 'home');
  filterFoods();
})();
