document.documentElement.classList.add('js');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
function closeMenu() {
  toggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
}
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
});
nav?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());


// General questions stay separate from the reservation form and its message.
const whatsappWidget = document.createElement('aside');
whatsappWidget.className = 'whatsapp-widget';
whatsappWidget.setAttribute('aria-label', 'WhatsApp-contact');
whatsappWidget.innerHTML = `
  <section class="whatsapp-panel" id="whatsapp-panel" role="dialog" aria-labelledby="whatsapp-title" aria-describedby="whatsapp-description" hidden>
    <button class="whatsapp-close" type="button" aria-label="WhatsApp-venster sluiten">×</button>
    <h2 id="whatsapp-title">Even overleggen over Durfboot?</h2>
    <p id="whatsapp-description">Stuur Ben een bericht via WhatsApp.</p>
    <a class="whatsapp-start" href="https://wa.me/31610761118?text=Hallo%20Ben%2C%20ik%20heb%20een%20vraag%20over%20Durfboot.">Start WhatsApp</a>
  </section>
  <button class="whatsapp-toggle" type="button" aria-label="WhatsApp-contact openen" aria-controls="whatsapp-panel" aria-expanded="false">
    <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31.2l7.8-2A15.1 15.1 0 1 0 16 .8Zm0 27.6a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.5 12.5 0 1 1 16 28.4Zm6.9-9.4c-.4-.2-2.2-1.1-2.5-1.2-.4-.1-.6-.2-.9.2l-1.1 1.3c-.2.3-.4.3-.8.1-1.1-.5-2.1-1.1-3-1.9a11.4 11.4 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.3 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5a4.2 4.2 0 0 0-1.3 3.1c0 1.8 1.4 3.5 1.6 3.8.2.2 2.7 4.1 6.5 5.7.9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.1-.4-.2-.9-.4Z"/></svg>
  </button>`;
document.body.append(whatsappWidget);
const whatsappToggle = whatsappWidget.querySelector('.whatsapp-toggle');
const whatsappPanel = whatsappWidget.querySelector('.whatsapp-panel');
const whatsappClose = whatsappWidget.querySelector('.whatsapp-close');

function setWhatsappOpen(open) {
  whatsappPanel.hidden = !open;
  whatsappToggle.setAttribute('aria-expanded', String(open));
  whatsappToggle.setAttribute('aria-label', open ? 'WhatsApp-contact sluiten' : 'WhatsApp-contact openen');
  positionWhatsapp();
  (open ? whatsappClose : whatsappToggle).focus({ preventScroll: true });
  if (whatsappWidget.classList.contains('whatsapp-widget--inline')) {
    whatsappWidget.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  }
}
whatsappToggle.addEventListener('click', () => setWhatsappOpen(whatsappPanel.hidden));
whatsappClose.addEventListener('click', () => setWhatsappOpen(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !whatsappPanel.hidden) {
    event.preventDefault();
    setWhatsappOpen(false);
  }
});

// Keep the floating component clear of forms and other interactive controls.
// If the viewport has no free space, give it its own place after the footer.
function positionWhatsapp() {
  whatsappWidget.classList.remove('whatsapp-widget--inline');
  whatsappWidget.style.bottom = '';
  const box = whatsappWidget.getBoundingClientRect();
  const gap = 12;
  const obstacles = [...document.querySelectorAll('form, a, button, input, textarea, select')]
    .filter(node => !whatsappWidget.contains(node))
    .map(node => node.getBoundingClientRect())
    .filter(rect => rect.width && rect.height && rect.bottom > 0 && rect.top < innerHeight);
  let top = box.top;
  // Each move clears at least one obstructing control.
  for (let i = 0; i <= obstacles.length; i++) {
    const hits = obstacles.filter(rect => box.left < rect.right + gap && box.right > rect.left - gap && top < rect.bottom + gap && top + box.height > rect.top - gap);
    if (!hits.length && top >= gap) {
      whatsappWidget.style.bottom = `${innerHeight - top - box.height}px`;
      return;
    }
    if (!hits.length || top < gap) break;
    top = Math.min(...hits.map(rect => rect.top)) - gap - box.height;
  }
  whatsappWidget.classList.add('whatsapp-widget--inline');
}
let whatsappFrame;
function scheduleWhatsappPosition() {
  cancelAnimationFrame(whatsappFrame);
  whatsappFrame = requestAnimationFrame(positionWhatsapp);
}
window.addEventListener('scroll', scheduleWhatsappPosition, { passive: true });
window.addEventListener('resize', scheduleWhatsappPosition);
new ResizeObserver(scheduleWhatsappPosition).observe(document.body);
positionWhatsapp();
