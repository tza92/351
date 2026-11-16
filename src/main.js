const device = document.querySelector('.iphone');
const space = document.querySelector('.device-space');
const stage = document.querySelector('.stage');
function fitPhone() {
  const width = device.offsetWidth;
  const height = device.offsetHeight;
  const scale = Math.max(0.05, Math.min((stage.clientWidth - 40) / width, (stage.clientHeight - 48) / height, 1));
  device.style.transform = `scale(${scale})`;
  space.style.width = `${width * scale}px`;
  space.style.height = `${height * scale}px`;
}
new ResizeObserver(fitPhone).observe(stage);
fitPhone();
