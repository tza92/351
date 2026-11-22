(() => {
  const cycle = window.nutritionCycle;
  const dayMs = 24 * 60 * 60 * 1000;
  const anchor = Date.parse(`${cycle.anchorDate}T00:00:00Z`);
  const unpublishedDates = new Set(cycle.unpublishedDates);
  const modulo = (value, divisor) => ((value % divisor) + divisor) % divisor;

  for (const [meal, supplement] of Object.entries(cycle.menus)) {
    Object.assign(window.nutritionMenus[meal].catalog, supplement.catalog);
    Object.assign(window.nutritionMenus[meal].days, supplement.days);
  }

  window.resolveNutritionMenu = (meal, date) => {
    const data = window.nutritionMenus[meal];
    const timestamp = typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)
      ? Date.parse(`${date}T00:00:00Z`) : NaN;
    if (!data || !Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== date) {
      return { menu: null, projected: false, cycleWeek: null };
    }
    // UTC calendar-day arithmetic keeps the phase stable across DST and time zones.
    const offset = Math.round((timestamp - anchor) / dayMs);
    const phase = modulo(offset, cycle.periodDays);
    const cycleWeek = Math.floor(phase / 7) + 1;
    const published = data.days[date];
    if (published) {
      return { menu: { ...published, sourceDate: date }, projected: false, cycleWeek };
    }
    // An explicitly missing historical menu is not a confirmed cycle prediction.
    if (unpublishedDates.has(date)) return { menu: null, projected: false, cycleWeek };
    const sourceDate = cycle.templates[meal]?.[phase];
    if (!sourceDate) return { menu: null, projected: true, cycleWeek };
    const template = data.days[sourceDate];
    const menu = { ...template, stations: { ...template.stations }, sourceDate, stationSourceDates: {}, stationSources: {} };
    const cycleNumber = Math.floor(offset / cycle.periodDays);
    const specialStations = cycle.specials[meal]?.[phase] || {};
    for (const [station, rule] of Object.entries(specialStations)) {
      const variant = rule.variants[modulo(cycleNumber - rule.anchorCycle, rule.variants.length)];
      menu.stations[station] = variant.entries;
      menu.stationSourceDates[station] = variant.sourceDate;
      menu.stationSources[station] = data.days[variant.sourceDate].source;
    }
    return { menu, projected: true, cycleWeek };
  };
})();
