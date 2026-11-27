(() => {
  const app = document.querySelector('.app');
  const homeHeader = document.querySelector('.today-header');
  const homeContent = document.querySelector('.dashboard');
  const menuContent = document.querySelector('.menu-content');
  const trackContent = document.querySelector('.track-content');
  const mealSheet = document.querySelector('#add-meal-dialog');
  const search = document.querySelector('#menu-search');
  const list = document.querySelector('.menu-foods');
  const empty = document.querySelector('.menu-empty');
  const notice = document.querySelector('.menu-notice');
  const backToTop = document.querySelector('.menu-back-to-top');
  const portionDialog = document.querySelector('#portion-dialog');
  const nutritionDialog = document.querySelector('#nutrition-dialog');
  let lastNutritionButton;
  let nutritionFood;
  const favouriteButton = nutritionDialog.querySelector('.nutrition-favourite');
  const favourites = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem('nutrition-favourites') || '[]');
    if (Array.isArray(saved)) saved.filter((name) => typeof name === 'string').forEach((name) => favourites.add(name));
  } catch {}
  const portionUnit = document.querySelector('#portion-unit');
  const unitDialog = document.querySelector('#portion-unit-dialog');
  const unitToggle = document.querySelector('#portion-unit-toggle');
  const unitOptions = document.querySelector('#portion-unit-options');
  const unitButtons = [...unitOptions.querySelectorAll('[data-unit]')];
  const quantityInput = document.querySelector('#quantity-input');
  const quantityDecrease = portionDialog.querySelector('.quantity-decrease');
  let originalServingDraft;
  const mealToggle = document.querySelector('.meal-picker-toggle');
  const mealMenu = document.querySelector('#meal-picker-menu');
  const mealOptions = [...mealMenu.querySelectorAll('[data-meal]')];
  const stationPicker = document.querySelector('.menu-stations');
  const filterDialog = document.querySelector('#menu-filter-dialog');
  const filterForm = filterDialog.querySelector('form');
  let menuFilters = { diet: 'any', meats: [], items: [] };
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
    All: [...new Map([...breakfastStations, ...mainMealStations].map((item) => [item.id, item])).values()],
  };
  let selectedMeal = 'Breakfast';

  function visibleMeals() {
    return selectedMeal === 'All' ? ['Breakfast', 'Lunch', 'Dinner'] : [selectedMeal];
  }

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
  let noticeClearTimeout;
  let lastEditButton;
  let currentPage;
  function syncFramePage() {
    if (window.parent === window) return;
    const origin = location.protocol === 'file:' ? '*' : location.origin;
    window.parent.postMessage({ type: 'app-page-state', page: currentPage }, origin);
  }
  window.addEventListener('load', syncFramePage);
  let pageAnimations = [];
  let foodAnimation;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function cancelPageAnimations() {
    pageAnimations.forEach((animation) => animation.cancel());
    pageAnimations = [];
    foodAnimation?.cancel();
  }

  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) cancelPageAnimations();
  });

  function syncBackToTop() {
    const visible = (currentPage === 'menu' || mealSheet.open) && menuContent.scrollTop > 160;
    const covered = app.classList.contains('has-menu-notice');
    if ((!visible || covered) && document.activeElement === backToTop && currentPage === 'menu') {
      (mealSheet.open ? mealSheet.querySelector('.add-meal-location') : document.querySelector('#menu-title')).focus({ preventScroll: true });
    }
    backToTop.hidden = !visible;
    backToTop.inert = covered;
  }

  function setMenuNotice(message = '') {
    clearTimeout(noticeTimeout);
    clearTimeout(noticeClearTimeout);
    if (message) notice.textContent = message;
    app.classList.toggle('has-menu-notice', Boolean(message));
    mealSheet.classList.toggle('has-menu-notice', Boolean(message));
    syncBackToTop();
    if (message) {
      noticeTimeout = setTimeout(() => setMenuNotice(), 1500);
    } else {
      noticeClearTimeout = setTimeout(() => { notice.textContent = ''; }, reducedMotion.matches ? 0 : 150);
    }
  }

  menuContent.addEventListener('scroll', syncBackToTop, { passive: true });
  backToTop.addEventListener('click', () => {
    (mealSheet.open ? mealSheet.querySelector('.add-meal-location') : document.querySelector('#menu-title')).focus({ preventScroll: true });
    menuContent.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    syncBackToTop();
  });

  function showPage(page, focus = false) {
    if (page === currentPage) return;
    const animate = currentPage !== undefined && !reducedMotion.matches;
    cancelPageAnimations();
    closeMealMenu();
    const menu = page === 'menu';
    const track = page === 'track';
    homeHeader.hidden = menu || track;
    homeContent.hidden = menu || track;
    menuContent.hidden = !menu;
    trackContent.hidden = !track;
    app.classList.toggle('is-menu', menu);
    app.classList.toggle('is-track', track);
    if (menu && window.nutritionTrack) {
      updateFoods();
      filterFoods();
    }
    document.title = menu ? `${selectedMeal} Menu · Nutrition` : 'Today · Nutrition';
    if (track) document.title = 'Track · Nutrition';
    document.querySelectorAll('[data-page]').forEach((button) => {
      const active = button.dataset.page === page;
      button.classList.toggle('is-active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    setMenuNotice();
    if (focus && menu) document.querySelector('#menu-title').focus({ preventScroll: true });
    if (focus && track) document.querySelector('#track-title').focus({ preventScroll: true });
    if (animate) {
      const incoming = menu ? [menuContent] : track ? [trackContent] : [homeContent, homeHeader];
      pageAnimations = incoming.map((element) => element.animate([
        { opacity: 0 },
        { opacity: 1 },
      ], { duration: 120, easing: 'ease-out' }));
    }
    currentPage = page;
    syncFramePage();
    syncBackToTop();
  }

  document.querySelectorAll('[data-page]').forEach((button) => {
    button.addEventListener('click', () => { location.hash = button.dataset.page; });
  });
  document.querySelector('.intake .text-link').addEventListener('click', () => { location.hash = 'menu'; });
  const pageFromHash = () => ['menu', 'track'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'home';
  window.addEventListener('hashchange', () => showPage(pageFromHash(), true));

  // Move the live menu into the sheet so its controls and IDs stay shared.
  const sheetElements = [menuContent, backToTop, notice].map((element) => {
    const placeholder = document.createComment('Menu screen position');
    element.before(placeholder);
    return { element, placeholder };
  });
  let mealSheetTrigger;
  let closingMealSheet = false;
  let pageTitleBeforeSheet;
  const locationPicker = mealSheet.querySelector('.add-meal-location');
  const locationTitle = mealSheet.querySelector('.add-meal-location-label');
  const locationMenu = mealSheet.querySelector('#add-meal-location-menu');
  const locationOptions = [...locationMenu.querySelectorAll('[data-location]')];
  let selectedLocation = 'Dining Commons';

  function closeLocationMenu(restoreFocus = false) {
    locationMenu.hidden = true;
    locationPicker.setAttribute('aria-expanded', 'false');
    if (restoreFocus) locationPicker.focus({ preventScroll: true });
  }
  function openLocationMenu() {
    closeMealMenu();
    locationMenu.hidden = false;
    locationPicker.setAttribute('aria-expanded', 'true');
    locationOptions.find((option) => option.dataset.location === selectedLocation).focus();
  }
  locationPicker.addEventListener('click', () => {
    if (locationMenu.hidden) openLocationMenu();
    else closeLocationMenu();
  });
  locationPicker.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    openLocationMenu();
  });
  locationOptions.forEach((option) => option.addEventListener('click', () => {
    selectedLocation = option.dataset.location;
    updateSheetLocation();
    closeLocationMenu(true);
  }));
  locationMenu.addEventListener('keydown', (event) => {
    const index = locationOptions.indexOf(document.activeElement);
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % locationOptions.length;
    if (event.key === 'ArrowUp') next = (index - 1 + locationOptions.length) % locationOptions.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = locationOptions.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      locationOptions[next].focus();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !locationMenu.hidden) {
      event.preventDefault();
      closeLocationMenu(true);
    }
  });
  ['click', 'focusin'].forEach((type) => document.addEventListener(type, (event) => {
    if (!event.target.closest('.add-meal-location-picker')) closeLocationMenu();
  }));
  const locationEmpty = document.createElement('p');
  locationEmpty.className = 'add-meal-location-empty';
  locationEmpty.hidden = true;
  locationEmpty.setAttribute('role', 'status');
  const menuSection = menuContent.querySelector('section');
  const sheetActions = mealSheet.querySelector('.add-meal-actions');
  const mealPicker = mealToggle.closest('.meal-picker');
  const mealPickerPosition = document.createComment('Menu meal picker position');
  mealPicker.before(mealPickerPosition);
  sheetActions.querySelectorAll('[data-meal-action="previous"], [data-meal-action="picture"], [data-meal-action="barcode"]').forEach((button) => {
    button.addEventListener('click', () => setMenuNotice(`${button.textContent.trim()} is coming soon.`));
  });

  function updateSheetLocation() {
    const location = selectedLocation;
    const commons = location === 'Dining Commons';
    locationTitle.textContent = location;
    locationOptions.forEach((option) => option.setAttribute('aria-checked', String(option.dataset.location === location)));
    menuSection.hidden = !commons;
    locationEmpty.hidden = commons;
    locationEmpty.textContent = commons ? '' : `No menu items available for ${location} yet.`;
    search.placeholder = commons ? 'Search dining menu or food' : `Search ${location}`;
    search.setAttribute('aria-label', `Search ${location}`);
    menuContent.scrollTop = 0;
    document.title = `${location} · Nutrition`;
    syncBackToTop();
  }

  document.addEventListener('nutrition:openmeal', (event) => {
    const option = mealOptions.find((item) => item.dataset.meal === event.detail.meal);
    if (!option || mealSheet.open || closingMealSheet) return;
    mealSheetTrigger = event.detail.trigger;
    pageTitleBeforeSheet = document.title;
    sheetElements.forEach(({ element }) => mealSheet.append(element));
    menuContent.querySelector('.menu-header').append(sheetActions);
    menuSection.prepend(mealPicker);
    menuContent.hidden = false;
    search.value = '';
    mealSheet.showModal();
    option.click();
    selectedLocation = 'Dining Commons';
    menuContent.append(locationEmpty);
    updateSheetLocation();
    menuContent.scrollTop = 0;
    syncBackToTop();
    mealSheetTrigger.setAttribute('aria-expanded', 'true');
    locationPicker.focus({ preventScroll: true });
  });

  async function closeMealSheet() {
    if (!mealSheet.open || closingMealSheet) return;
    closingMealSheet = true;
    closeLocationMenu();
    closeMealMenu();
    setMenuNotice();
    mealSheet.classList.add('is-closing');
    if (!reducedMotion.matches) {
      await Promise.all(mealSheet.getAnimations().map((animation) => animation.finished.catch(() => {})));
    }
    mealSheet.close();
  }
  mealSheet.querySelector('.add-meal-close').addEventListener('click', closeMealSheet);
  mealSheet.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeMealSheet();
  });
  mealSheet.addEventListener('close', () => {
    closeLocationMenu();
    locationEmpty.remove();
    mealPickerPosition.after(mealPicker);
    mealSheet.querySelector('.add-meal-heading').after(sheetActions);
    menuSection.hidden = false;
    search.placeholder = 'Search dining menu';
    search.setAttribute('aria-label', 'Search dining menu');
    sheetElements.forEach(({ element, placeholder }) => placeholder.after(element));
    menuContent.hidden = currentPage !== 'menu';
    mealSheet.classList.remove('is-closing');
    closingMealSheet = false;
    updateFoods();
    filterFoods();
    document.title = currentPage === 'menu' ? `${selectedMeal} Menu · Nutrition`
      : currentPage === 'track' ? 'Track · Nutrition' : pageTitleBeforeSheet;
    syncBackToTop();
    mealSheetTrigger?.setAttribute('aria-expanded', 'false');
    if (mealSheetTrigger?.closest('dialog')?.open) mealSheetTrigger.focus({ preventScroll: true });
    document.dispatchEvent(new CustomEvent('nutrition:mealpickerclose'));
  });
  window.addEventListener('hashchange', () => {
    if (mealSheet.open) mealSheet.close();
  });

  function icon(name) {
    return `<svg class="icon" aria-hidden="true"><use href="#${name}"/></svg>`;
  }

  function updateFoods() {
    const [year, month, day] = selectedDate.split('-').map(Number);
    const dateLabel = dateFormat.format(new Date(year, month - 1, day, 12));
    menuDate.textContent = dateLabel;
    sectionTitle.textContent = selectedDate === app.dataset.today ? 'From Today’s Menu' : 'From the Menu';
    foods = [];
    for (const meal of visibleMeals()) {
      const data = window.nutritionMenus[meal];
      const menu = window.resolveNutritionMenu(meal, selectedDate).menu;
      for (const [stationId, entries] of Object.entries(menu?.stations || {})) {
        entries.forEach((entry) => {
          const key = `${selectedDate}:${meal}:${stationId}:${entry.food}:${entry.serving}`;
          if (!foodState.has(key)) {
            const details = data.catalog[entry.food];
            const photo = window.nutritionFoodPhotos?.[details.sourceName] || {};
            const sourceDate = menu.stationSourceDates?.[stationId] || menu.sourceDate || selectedDate;
            const nutritionKey = JSON.stringify([sourceDate, meal, stationId, entry.food, entry.serving]);
            const nutritionId = entry.nutritionId || window.nutritionFacts?.bindings[nutritionKey];
            foodState.set(key, { ...details, ...photo, meal, category: entry.category || details.category, diets: entry.diets || [], meats: entry.meats || [], station: stationId, serving: entry.serving, nutrition: window.nutritionFacts?.records[nutritionId], source: menu.stationSources?.[stationId] || menu.source, quantity: 1, added: 0 });
          }
          const food = foodState.get(key);
          if (window.nutritionTrack) food.added = mealSheet.open ? 0 : window.nutritionTrack.getQuantity(selectedDate, foodLogKey(food));
          food.id = foods.length;
          foods.push(food);
        });
      }
    }
    const availableMeats = new Set(foods.flatMap((food) => food.meats).filter((meat) => menuFilters.diet !== 'vegan' && (menuFilters.diet !== 'halal' || meat !== 'pork')));
    menuFilters.meats = menuFilters.meats.filter((meat) => meat === 'any-meat' ? menuFilters.diet === 'any' && availableMeats.size > 0 : availableMeats.has(meat));
    syncFilterButton();
    setMenuNotice();
    menuContent.scrollTop = 0;
    syncBackToTop();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  }

  function openNutrition(food, button) {
    const facts = food.nutrition;
    nutritionFood = food;
    syncFavouriteButton();
    lastNutritionButton = button;
    nutritionDialog.querySelector('#nutrition-title').textContent = food.name;
    const content = nutritionDialog.querySelector('.nutrition-content');
    if (!facts) {
      content.innerHTML = '<p class="nutrition-note">Nutrition information is unavailable for this menu item.</p>';
    } else {
      const available = (value) => value !== null && value !== undefined && String(value).trim() !== '' && !/^[-–—]$/.test(String(value).trim());
      const nutrientRows = facts.nutrients.filter(([name]) => name !== 'Calories').map(([name, value, unit]) => {
        const label = name.replace(/\s+\((?:g|mg|IU|RE)\)$/, '');
        const amount = available(value) ? `${value}${unit ? ` ${unit}` : ''}` : 'Unavailable';
        return `<tr><th scope="row">${escapeHtml(label)}</th><td>${escapeHtml(amount)}</td></tr>`;
      }).join('');
      const placeholder = facts.calories === 0 && /chef.?s special/i.test(facts.name);
      content.innerHTML = `
        <section class="nutrition-label" aria-label="Nutrition facts per published serving">
          <h3>Nutrition Facts</h3>
          <p class="nutrition-per-serving">Per published serving</p>
          <p class="nutrition-serving"><span>Serving size</span><strong>${escapeHtml(facts.portion)}</strong></p>
          <p class="nutrition-calories"><strong>Calories</strong><span${available(facts.calories) ? '' : ' class="nutrition-unavailable"'}>${available(facts.calories) ? escapeHtml(facts.calories) : 'Unavailable'}</span></p>
          <table class="nutrition-table"><caption class="sr-only">Nutrients per published serving</caption><tbody>${nutrientRows || '<tr><td>Nutrition information unavailable.</td></tr>'}</tbody></table>
        </section>
        ${placeholder ? '<p class="nutrition-note">This is a generic menu entry. Its published zero values may be placeholders.</p>' : ''}
        <section class="nutrition-ingredients"><h3>Ingredients</h3><p>${escapeHtml(facts.ingredients || 'Unavailable')}</p></section>
        ${facts.allergens.length ? `<section class="nutrition-allergens"><h3>Contains</h3><p>${escapeHtml(facts.allergens.join(', '))}</p></section>` : ''}`;
    }
    nutritionDialog.showModal();
    nutritionDialog.scrollTop = 0;
    nutritionDialog.querySelector('#nutrition-title').focus({ preventScroll: true });
  }

  function syncFavouriteButton() {
    const active = favourites.has(nutritionFood.sourceName || nutritionFood.name);
    favouriteButton.setAttribute('aria-pressed', String(active));
    const label = `${active ? 'Unfavourite' : 'Favourite'} ${nutritionFood.name}`;
    favouriteButton.setAttribute('aria-label', label);
    favouriteButton.title = label;
  }

  favouriteButton.addEventListener('click', () => {
    const key = nutritionFood.sourceName || nutritionFood.name;
    if (favourites.has(key)) favourites.delete(key);
    else favourites.add(key);
    try { localStorage.setItem('nutrition-favourites', JSON.stringify([...favourites])); } catch {}
    syncFavouriteButton();
    if (menuFilters.items.includes('favourited')) filterFoods();
  });

  nutritionDialog.querySelector('.nutrition-close').addEventListener('click', () => nutritionDialog.close());
  nutritionDialog.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const controls = [...nutritionDialog.querySelectorAll('button:not([disabled]), a[href]')];
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && (document.activeElement === first || document.activeElement === nutritionDialog.querySelector('#nutrition-title'))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  nutritionDialog.addEventListener('click', (event) => {
    if (event.target !== nutritionDialog) return;
    const bounds = nutritionDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) nutritionDialog.close();
  });
  nutritionDialog.addEventListener('close', () => {
    if (lastNutritionButton?.isConnected) lastNutritionButton.focus({ preventScroll: true });
    else search.focus({ preventScroll: true });
  });

  function foodServingLabel(food) {
    const namedMeat = /\b(chicken|turkey|duck|beef|veal|pork|ham|bacon|salami|pepperoni|prosciutto|pancetta|bologna|lamb|mutton|fish|seafood|salmon|tuna|cod|pollock|haddock|trout|halibut|tilapia|shrimp|prawns?|crab|lobster|clams?|mussels?|scallops?|oysters?)\b/i;
    if (!food.meats.length || food.diets.includes('vegan') || namedMeat.test(food.name)) return food.serving;
    const proteins = [
      ['chicken', 'Chicken', /\bchicken\b/i],
      ['turkey', 'Turkey', /\bturkey\b/i],
      ['duck', 'Duck', /\bduck\b/i],
      ['beef', 'Beef', /\b(beef|veal)\b/i],
      ['pork', 'Pork', /\b(pork|ham|bacon|salami|pepperoni|chorizo|prosciutto|pancetta|bologna)\b/i],
      ['lamb', 'Lamb', /\b(lamb|mutton)\b/i],
      ['fish', 'Fish', /\b(fish|salmon|tuna|cod|pollock|haddock|trout|halibut|tilapia|surimi|imitation crab)\b/i],
      ['shellfish', 'Shellfish', /\b(shrimp|prawns?|crab|lobster|clams?|mussels?|scallops?|oysters?)\b/i],
    ];
    for (const ingredient of (food.nutrition?.ingredients || '').split(',')) {
      // A fish sauce, chicken stock, or flavouring does not identify the filling.
      if (/\b(stock|broth|base|sauce|flavou?r|seasoning|concentrate|bouillon|extract|fat|lard|gelatin)\b/i.test(ingredient)) continue;
      const protein = proteins.find(([type, , pattern]) => food.meats.includes(type) && pattern.test(ingredient)
        && !(type === 'shellfish' && /imitation crab/i.test(ingredient)));
      if (protein) return `${protein[1]}, ${food.serving}`;
    }
    return food.serving;
  }

  function syncFoodAddButton(button, food) {
    const added = food.added > 0;
    const quantity = button.closest('.food-controls').querySelector('.food-quantity');
    quantity.classList.toggle('has-added', added);
    quantity.querySelector('.food-quantity-value').textContent = added ? food.added : food.quantity;
    button.classList.toggle('has-added', added);
    button.setAttribute('aria-pressed', String(added));
    button.setAttribute('aria-label', added
      ? `Remove ${food.name}, ${foodAmountLabel(food, food.added)} saved`
      : `Add ${food.name}`);
    if (added) {
      button.removeAttribute('aria-haspopup');
      button.removeAttribute('aria-controls');
    } else {
      button.setAttribute('aria-haspopup', 'dialog');
      button.setAttribute('aria-controls', mealSheet.open ? 'add-meal-dialog' : 'add-tray');
    }
  }

  function createFoodRow(food) {
    const row = document.createElement('li');
    row.className = 'menu-food';
    row.dataset.foodId = food.id;
    row.innerHTML = `
      <button class="food-info" type="button" data-action="nutrition" aria-label="Nutrition facts for ${escapeHtml(food.name)}" aria-haspopup="dialog" aria-controls="nutrition-dialog">
        <span class="food-thumbnail${food.image ? '' : ' food-thumbnail--placeholder'}"${food.image ? ` style="--food-image-scale: ${food.imageScale || 1}; --food-image-position: ${food.imagePosition || '50% 50%'}"` : ''}>
          ${food.image ? `<img src="assets/foods/${food.image}" alt="" width="56" height="56" loading="lazy" decoding="async">` : icon(food.category === 'Smoothies' ? 'drink' : food.category === 'Bakery' ? 'cookie' : 'plate')}
        </span>
        <span class="food-details">
          <span class="food-name">${escapeHtml(food.name)}</span>
          <span class="food-serving">${escapeHtml(foodServingLabel(food))}</span>
        </span>
      </button>
      <div class="food-controls">
        <button class="food-quantity" type="button" data-action="edit" aria-label="Edit ${escapeHtml(food.name)} quantity, ${foodAmountLabel(food, food.quantity)}" aria-haspopup="dialog" aria-controls="portion-dialog">
          <span class="food-quantity-value">${food.quantity}</span>${icon('edit')}
        </button>
        <button class="food-add" type="button" data-action="add">${icon('plus')}${icon('check')}</button>
      </div>`;
    syncFoodAddButton(row.querySelector('.food-add'), food);
    return row;
  }

  function createFoodList(items) {
    const rows = document.createElement('ul');
    rows.className = 'menu-food-list';
    items.forEach((food) => rows.append(createFoodRow(food)));
    return rows;
  }

  function isIngredient(food) {
    const ingredientCategories = {
      create: ['Pastas', 'Bases', 'Proteins', 'Vegetables & herbs', 'Sauces & curries', 'Cheeses'],
      stacks: ['Breads & wraps', 'Proteins', 'Cheeses', 'Vegetables', 'Spreads & sauces'],
      'hot-plate': ['Bases', 'Proteins', 'Vegetables', 'Sauces & dips', 'Toppings'],
      'fresh-bowl': ['Bases', 'Proteins', 'Vegetables & sides', 'Sauces & dips', 'Toppings'],
      'leaf-market': food.meal === 'Breakfast'
        ? ['Yogurt & granola', 'Toppings']
        : ['Greens & vegetables', 'Proteins & legumes', 'Toppings', 'Dressings'],
    };
    return ingredientCategories[food.station]?.includes(food.category) || false;
  }

  function ingredientBuilder(stationId, stationFoods) {
    const meal = stationFoods[0]?.meal;
    if (stationId === 'leaf-market' && meal === 'Breakfast') {
      return { name: 'Yogurt', bases: stationFoods.filter((food) => /yogurt/i.test(food.name)) };
    }
    if (stationId === 'create') {
      if (meal === 'Breakfast') {
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
    buttons.unshift(filterButton);
    stationPicker.replaceChildren(...buttons);
    syncFilterButton();
    stationPicker.setAttribute('aria-label', `${selectedMeal} stations and filters`);
    const active = stationPicker.querySelector('[aria-pressed="true"]');
    stationPicker.scrollLeft = station === 'all' ? 0 : active.offsetLeft - stationPicker.firstElementChild.offsetLeft;
  }

  function filterCount() {
    return Number(menuFilters.diet !== 'any') + menuFilters.meats.length + menuFilters.items.length;
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
    const diet = filterForm.elements['menu-diet'].value;
    const vegan = diet === 'vegan';
    const availableMeats = new Set(foods.flatMap((food) => food.meats));
    const matchingMeats = new Set([...availableMeats].filter((meat) => !vegan && (diet !== 'halal' || meat !== 'pork')));
    filterForm.querySelectorAll('[name="menu-meat"]').forEach((input) => {
      const available = input.value === 'any-meat' ? availableMeats.size > 0 : availableMeats.has(input.value);
      const matching = input.value === 'any-meat' ? matchingMeats.size > 0 : matchingMeats.has(input.value);
      input.closest('label').hidden = !available;
      input.disabled = vegan || !matching || (diet === 'halal' && input.value === 'any-meat');
      if (input.disabled) input.checked = false;
    });
    filterForm.querySelector('.menu-meat-options').disabled = vegan;
    if (vegan) filterForm.querySelectorAll('[name="menu-meat"]').forEach((input) => { input.checked = false; });
  }

  function openMenuFilters() {
    filterForm.elements['menu-diet'].value = menuFilters.diet;
    filterForm.querySelectorAll('[name="menu-items"]').forEach((input) => {
      input.checked = input.value === 'all' ? !menuFilters.items.length : menuFilters.items.includes(input.value);
    });
    filterForm.querySelectorAll('[name="menu-meat"]').forEach((input) => { input.checked = menuFilters.meats.includes(input.value); });
    syncMeatOptions();
    filterDialog.showModal();
    filterForm.querySelector('[name="menu-diet"]:checked').focus({ preventScroll: true });
    syncFilterButton();
  }

  filterForm.addEventListener('change', (event) => {
    const input = event.target;
    if (input.name === 'menu-items') {
      const options = [...filterForm.querySelectorAll('[name="menu-items"]')];
      if (input.checked) {
        options.forEach((other) => {
          if (other !== input && (input.value === 'all' || other.value === 'all')) other.checked = false;
        });
      }
      if (!options.some((option) => option.checked)) options.find((option) => option.value === 'all').checked = true;
    }
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
    menuFilters = { diet: 'any', meats: [], items: [] };
    menuContent.scrollTop = 0;
    filterFoods();
    syncFilterButton();
  });
  filterDialog.addEventListener('close', () => {
    syncFilterButton();
    stationPicker.querySelector('.menu-filter-toggle').focus({ preventScroll: true });
  });
  filterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    menuFilters = {
      diet: filterForm.elements['menu-diet'].value,
      items: [...filterForm.querySelectorAll('[name="menu-items"]:checked')].map((input) => input.value).filter((value) => value !== 'all'),
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
    const matchesItems = !menuFilters.items.length
      || (menuFilters.items.includes('favourited') && favourites.has(food.sourceName || food.name))
      || (menuFilters.items.includes('added') && food.added > 0);
    return matchesItems && matchesDietaryFilter(food) && (!menuFilters.meats.length
      || (menuFilters.meats.includes('any-meat') ? food.meats.length > 0 : menuFilters.meats.some((meat) => food.meats.includes(meat))));
  }

  function filterFoods() {
    foodAnimation?.cancel();
    const query = search.value.trim().toLocaleLowerCase();
    const matches = (food) => food.name.toLocaleLowerCase().includes(query);
    let count = 0;
    const groups = [];
    const sections = visibleMeals().flatMap((meal) => stationsByMeal[meal].map((item) => ({ ...item, meal })));
    sections.forEach((item) => {
      if (station !== 'all' && station !== item.id) return;
      const stationFoods = foods.filter((food) => food.station === item.id && food.meal === item.meal);
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
      const sectionId = `foods-${item.meal.toLowerCase()}-${item.id}`;
      heading.id = sectionId;
      heading.className = 'menu-station-heading';
      heading.hidden = station !== 'all' && selectedMeal !== 'All';
      const expanded = station !== 'all' || Boolean(query) || filterCount() > 0 || !collapsedStations.has(`${item.meal}:${item.id}`);
      const toggle = document.createElement('button');
      toggle.className = 'menu-station-toggle';
      toggle.type = 'button';
      toggle.dataset.action = 'toggle-station';
      toggle.dataset.stationId = item.id;
      toggle.dataset.meal = item.meal;
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.setAttribute('aria-controls', `${sectionId}-content`);
      toggle.innerHTML = `<span>${selectedMeal === 'All' ? `${item.meal} · ` : ''}${escapeHtml(item.name)}</span>${icon('expand-more')}`;
      heading.append(toggle);
      group.setAttribute('aria-labelledby', heading.id);
      group.append(heading);
      const content = document.createElement('div');
      content.id = `${sectionId}-content`;
      content.className = 'menu-station-content';
      content.hidden = !expanded;
      if (dishes.length) content.append(createFoodList(dishes));
      if (ingredients.length) {
        const section = document.createElement('section');
        section.className = 'menu-ingredients';
        if (builder.base) section.dataset.builderFoodId = builder.base.id;
        const title = document.createElement('h4');
        title.id = `${sectionId}-ingredients`;
        title.className = 'menu-ingredients-heading';
        title.textContent = `${builder.name} - pick your ingredients`;
        section.setAttribute('aria-labelledby', title.id);
        section.append(title, createFoodList(ingredients));
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
        ? `No ${selectedMeal === 'All' ? '' : `${selectedMeal.toLowerCase()} `}menu listed for ${menuDate.textContent}.`
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
    if (!button || station === button.dataset.station) return;
    station = button.dataset.station;
    stationPicker.querySelectorAll('.station-chip').forEach((chip) => {
      chip.setAttribute('aria-pressed', String(chip === button));
    });
    filterFoods();
    if (!reducedMotion.matches) {
      const results = empty.hidden ? list : empty;
      foodAnimation = results.animate([
        { opacity: 0 },
        { opacity: 1 },
      ], { duration: 180, easing: 'ease-out' });
    }
  });

  list.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    if (action === 'toggle-station') {
      const expanded = button.getAttribute('aria-expanded') !== 'true';
      const key = `${button.dataset.meal}:${button.dataset.stationId}`;
      if (expanded) collapsedStations.delete(key);
      else collapsedStations.add(key);
      button.setAttribute('aria-expanded', String(expanded));
      document.getElementById(button.getAttribute('aria-controls')).hidden = !expanded;
      return;
    }
    const row = button.closest('.menu-food');
    const food = foods[Number(row.dataset.foodId)];
    if (action === 'nutrition') {
      openNutrition(food, button);
    } else if (action === 'edit') {
      editingFood = food;
      lastEditButton = button;
      portionDialog.querySelector('.portion-food-name').textContent = food.name;
      setServingUnit(food.measureUnit || 'each');
      closeUnitPicker();
      originalServingDraft = { serving: food.serving, unit: portionUnit.value };
      quantityInput.value = food.quantity;
      quantityInput.setCustomValidity('');
      syncQuantityControls();
      portionDialog.showModal();
      quantityInput.focus();
      quantityInput.select();
    } else if (action === 'add') {
      if (closingMealSheet) return;
      if (!mealSheet.open && food.added > 0) {
        document.dispatchEvent(new CustomEvent('nutrition:logchange', { detail: {
          date: selectedDate, key: foodLogKey(food), quantity: 0,
          food: { name: food.name, meal: food.meal },
        } }));
        setMenuNotice(`${food.name} removed.`);
        if (!button.isConnected) (list.querySelector('.food-add') || search).focus({ preventScroll: true });
        return;
      }
      document.dispatchEvent(new CustomEvent('nutrition:mealpicked', { detail: {
        date: selectedDate, key: foodLogKey(food), quantity: food.quantity,
        food: { name: food.name, image: food.image, meal: food.meal, category: food.category, serving: food.serving, nutrition: food.nutrition },
      } }));
      if (mealSheet.open) closeMealSheet();
    }
  });

  function syncQuantityControls() {
    quantityDecrease.disabled = !quantityInput.value || Number(quantityInput.value) <= 1;
  }

  function setServingUnit(unit) {
    portionUnit.value = unit;
    document.querySelector('#portion-unit-value').textContent = unit;
    unitButtons.forEach((button) => {
      const selected = button.dataset.unit === unit;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
  }

  function closeUnitPicker(restoreFocus = false) {
    if (unitDialog.open) unitDialog.close();
    unitToggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) unitToggle.focus({ preventScroll: true });
  }

  function openUnitPicker() {
    quantityInput.blur();
    if (unitDialog.open) return;
    unitDialog.showModal();
    unitToggle.setAttribute('aria-expanded', 'true');
    const selected = unitButtons.find((button) => button.dataset.unit === portionUnit.value) || unitButtons[0];
    selected.focus({ preventScroll: true });
    selected.scrollIntoView({ block: 'center' });
  }

  unitToggle.addEventListener('click', openUnitPicker);
  unitToggle.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    openUnitPicker();
  });
  unitOptions.addEventListener('click', (event) => {
    const button = event.target.closest('[data-unit]');
    if (!button) return;
    setServingUnit(button.dataset.unit);
    closeUnitPicker(true);
  });
  unitOptions.addEventListener('keydown', (event) => {
    const index = unitButtons.indexOf(document.activeElement);
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % unitButtons.length;
    if (event.key === 'ArrowUp') next = (index - 1 + unitButtons.length) % unitButtons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = unitButtons.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      unitButtons[next].focus({ preventScroll: true });
      unitButtons[next].scrollIntoView({ block: 'nearest' });
    } else if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      closeUnitPicker(true);
    }
  });
  unitDialog.querySelector('.portion-unit-close').addEventListener('click', () => closeUnitPicker(true));
  unitDialog.addEventListener('close', () => {
    unitToggle.setAttribute('aria-expanded', 'false');
    if (portionDialog.open) unitToggle.focus({ preventScroll: true });
  });
  unitDialog.addEventListener('click', (event) => {
    if (event.target !== unitDialog) return;
    const bounds = unitDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom) closeUnitPicker(true);
  });

  function foodLogKey(food) {
    return [food.meal, food.station, food.sourceName || food.name, food.serving, food.measureUnit || 'each'].join(':');
  }

  function foodAmountLabel(food, amount) {
    const unit = food.measureUnit;
    if (!unit || unit === 'each' || unit === 'serving') return `${amount} ${amount === 1 ? 'serving' : 'servings'}`;
    const plural = ['piece', 'slice', 'cup'].includes(unit) && amount !== 1 ? `${unit}s` : unit;
    return `${amount} ${plural}`;
  }

  for (const [selector, change] of [['.quantity-decrease', -1], ['.quantity-increase', 1]]) {
    portionDialog.querySelector(selector).addEventListener('click', () => {
      const current = Number(quantityInput.value);
      const next = Number.isSafeInteger(current) && current >= 1 ? Math.max(1, current + change) : 1;
      quantityInput.value = Number.isSafeInteger(next) ? next : current;
      quantityInput.setCustomValidity('');
      syncQuantityControls();
    });
  }
  quantityInput.addEventListener('input', () => {
    quantityInput.setCustomValidity('');
    syncQuantityControls();
  });
  quantityInput.addEventListener('change', () => {
    if (quantityInput.value && Number(quantityInput.value) < 1) quantityInput.value = 1;
    syncQuantityControls();
  });

  portionDialog.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const quantity = Number(quantityInput.value);
    if (!Number.isSafeInteger(quantity) || quantity < 1) {
      quantityInput.setCustomValidity('Enter a whole quantity of at least 1.');
      quantityInput.reportValidity();
      return;
    }
    const unit = portionUnit.value;
    const serving = unit === originalServingDraft.unit ? originalServingDraft.serving
      : unit === 'each' ? editingFood.nutrition?.portion || 'each' : unit;
    if (unit !== (editingFood.measureUnit || 'each')) {
      editingFood.addedByUnit ||= {};
      editingFood.addedByUnit[editingFood.measureUnit || 'each'] = editingFood.added;
      editingFood.added = editingFood.addedByUnit[unit] || 0;
    }
    editingFood.serving = serving;
    editingFood.quantity = quantity;
    editingFood.measureUnit = unit;
    const row = list.querySelector(`[data-food-id="${editingFood.id}"]`);
    row.querySelector('.food-quantity-value').textContent = editingFood.quantity;
    row.querySelector('.food-serving').textContent = foodServingLabel(editingFood);
    row.querySelector('.food-quantity').setAttribute('aria-label', `Edit ${editingFood.name} quantity, ${foodAmountLabel(editingFood, quantity)}`);
    const addButton = row.querySelector('.food-add');
    syncFoodAddButton(addButton, editingFood);
    if (menuFilters.items.includes('added') && editingFood.added === 0) filterFoods();
    portionDialog.close();
  });
  portionDialog.querySelector('.portion-cancel').addEventListener('click', () => portionDialog.close());
  portionDialog.querySelector('.portion-close').addEventListener('click', () => portionDialog.close());
  portionDialog.addEventListener('close', () => {
    closeUnitPicker();
    if (lastEditButton?.isConnected) lastEditButton.focus({ preventScroll: true });
    else search.focus({ preventScroll: true });
  });

  document.addEventListener('nutrition:logchange', (event) => {
    const { date, key, quantity } = event.detail;
    if (date !== selectedDate || mealSheet.open) return;
    foods.forEach((food) => {
      if (foodLogKey(food) !== key) return;
      food.added = quantity;
      const button = list.querySelector(`[data-food-id="${food.id}"] .food-add`);
      if (button) syncFoodAddButton(button, food);
    });
    if (menuFilters.items.includes('added')) filterFoods();
  });

  document.addEventListener('nutrition:datechange', (event) => {
    selectedDate = event.detail.date;
    updateFoods();
    filterFoods();
  });

  document.addEventListener('DOMContentLoaded', () => {
    updateFoods();
    filterFoods();
  });

  showPage(pageFromHash());
  renderStations();
  updateFoods();
  filterFoods();
})();
