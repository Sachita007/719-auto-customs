// Run in this local page's browser console:
// await (await import('./smoke-preview.js')).checkPreviewForms()
export function checkPreviewForms() {
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const originalUrl = location.href;
  const forms = [...document.querySelectorAll('.quote-form')];
  assert(forms.length === 2, 'Both quote placements must be present');
  for (const form of forms) {
    const status = form.querySelector('.form-status');
    let submitted = false;
    let prevented = false;
    const observe = event => { submitted = true; prevented = event.defaultPrevented; };
    form.addEventListener('submit', observe);
    try {
      form.reset();
      status.hidden = true;
      form.requestSubmit();
      assert(!submitted && status.hidden, 'Empty required fields must not proceed');
      form.elements.name.value = 'Local Preview';
      form.elements.phone.value = '7195550100';
      form.elements.vehicle.value = '2024 Test Vehicle';
      form.requestSubmit();
      assert(submitted && !status.hidden, 'Valid preview must explain that it is not sent');
      assert(prevented, 'Preview submission must be prevented');
      assert(status.textContent.includes('No request was sent or saved.'), 'Never claim successful lead receipt');
      assert(location.href === originalUrl, 'Preview must not redirect to a thank-you page');
    } finally {
      form.removeEventListener('submit', observe);
      form.reset();
      status.hidden = true;
      status.textContent = '';
    }
  }
  return { forms: forms.length, requiredFields: true, previewOnly: true, redirected: false };
}
