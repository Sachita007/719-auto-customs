// Preview from this directory: python3 -m http.server 4175 --bind 127.0.0.1
// Content stays visible without JavaScript; entering the viewport only adds motion.
if ('IntersectionObserver' in window) {
  const reveals = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('motion-reveal');
      reveals.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .benefit, .reason, .portfolio-grid figure, .studio-statement > *, .quote-copy').forEach(element => reveals.observe(element));
}

// Mobile quote bar: jump to whichever form is closest so its fields land just under the sticky header.
const formPanels = [...document.querySelectorAll('#hero-quote, .ghl-quote')];
document.querySelector('[data-form-jump]').addEventListener('click', event => {
  event.preventDefault();
  const nearest = formPanels.reduce((a, b) => Math.abs(a.getBoundingClientRect().top) <= Math.abs(b.getBoundingClientRect().top) ? a : b);
  nearest.scrollIntoView({ block: 'start' });
  nearest.focus({ preventScroll: true });
});
