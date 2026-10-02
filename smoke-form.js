// Run after the provider form has loaded, at desktop and mobile widths:
// await (await import('./smoke-form.js')).checkQuoteForm()
// Never fills fields, submits a lead, or synthesizes a provider success event.
export async function checkQuoteForm() {
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const frame = document.querySelector('#inline-oYZgIVmRdXh5I9xnMYt8');
  const bounds = frame.getBoundingClientRect();
  const style = getComputedStyle(frame);
  assert(bounds.width > 0 && bounds.height >= 560 && style.visibility === 'visible' && style.display !== 'none', 'Provider frame must be visible with usable height');
  assert(bounds.left >= 0 && bounds.right <= innerWidth + 1, 'Provider frame must fit the viewport');
  assert(document.documentElement.scrollWidth <= innerWidth, 'Page must not overflow horizontally');
  const links = [...document.querySelectorAll('a[href="#hero-quote"]')];
  assert(links.length === 2, 'Lower and footer quote actions must reach the real form');
  for (const link of links) {
    link.click();
    const deadline = performance.now() + 5000;
    while (Math.abs(document.querySelector('#hero-quote').getBoundingClientRect().top - 30) > 2) {
      assert(performance.now() < deadline, 'Quote action did not scroll to the form');
      await new Promise(requestAnimationFrame);
    }
    assert(document.activeElement.id === 'hero-quote', 'Quote action must move keyboard focus to the form region');
  }
  return { width: innerWidth, frameHeight: bounds.height, quoteActions: links.length, visible: true, submitted: false };
}
