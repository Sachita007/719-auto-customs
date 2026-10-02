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

// These local design forms never send or save a lead.
document.querySelectorAll('.quote-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    status.textContent = 'Preview only. No request was sent or saved. Call (719) 437-8333 to enquire about the $499 offer.';
    status.hidden = false;
    status.focus();
  });
});
