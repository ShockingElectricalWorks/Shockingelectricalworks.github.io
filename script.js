// Header mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Floating chat widget
const chatWidget = document.getElementById('chatWidget');
const chatFab = document.getElementById('chatFab');
const chatClose = document.getElementById('chatClose');

function setChat(open) {
  if (!chatWidget || !chatFab) return;
  chatWidget.classList.toggle('is-open', open);
  chatFab.setAttribute('aria-expanded', String(open));
}

if (chatFab) chatFab.addEventListener('click', () => setChat(!chatWidget.classList.contains('is-open')));
if (chatClose) chatClose.addEventListener('click', () => setChat(false));

// Close chat when clicking outside
document.addEventListener('click', (e) => {
  if (!chatWidget) return;
  const panel = document.getElementById('chatPanel');
  if (!panel || !chatFab) return;
  const clickedInside = chatWidget.contains(e.target);
  if (!clickedInside) setChat(false);
});

// Enquiry form -> mailto (no backend required)
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name')?.value?.trim() || '';
    const phone = document.getElementById('phone')?.value?.trim() || '';
    const property = document.getElementById('property')?.value || '';
    const msg = document.getElementById('message')?.value?.trim() || '';

    const subject = encodeURIComponent('Enquiry - Shocking Electrical Works');
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Contact: ${phone}\n` +
      `Property type: ${property}\n\n` +
      `Request:\n${msg}\n\n` +
      `Sent from shockingelectricalworks.com`
    );

    window.location.href = `mailto:contact@shockingelectricalworks.com?subject=${subject}&body=${body}`;
  });
}

