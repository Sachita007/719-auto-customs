# 719 Auto Customs integration

Publish only this directory through `Sachita007/719-auto-customs`, GitHub Pages `main` at `/`. Never deploy the parent Super Shine repository. The approved offer remains 10-year ceramic coating for $499, with `assets/corvette.webp` as the hero.

- One parser-loaded LeadConnector iframe: `oYZgIVmRdXh5I9xnMYt8`, DOM ID `inline-oYZgIVmRdXh5I9xnMYt8`. The lower quote card and footer link to `#hero-quote`; no duplicate embed IDs, preview forms, local lead capture, or invented success redirect.
- Provider embed script appears once. Supplied attributes, including cookie-consent metadata and `data-height="undefined"`, remain literal. CSS supplies a 560px minimum; the provider controls resizing. These attributes alone do not establish privacy-law compliance.
- Supplied GTM `GTM-WHZLPNRQ` and Ads `AW-11364267259` snippets appear once each; GTM noscript is in the body. The existing remote GTM container also initializes this same Ads destination and has existing conversion tags for other thank-you URLs. Its configuration has not been modified. A single direct page config call does not prove account-level deduplication or successful-lead attribution.
- No conversion labels/events or synthetic success messages added. No fields filled, leads submitted, or test conversions fired. CRM receipt, provider success navigation, and successful-lead conversion attribution are untested.

## Read-only checks

Serve with `python3 -m http.server 4175 --bind 127.0.0.1`. After the provider has rendered, run these in the page console at desktop, 390px and 320px widths:

```js
await (await import('./smoke-form.js')).checkQuoteForm()
await (await import('./smoke-review-carousel.js')).checkReviewCarousel()
```

The form check verifies visible frame geometry, no horizontal overflow, and keyboard-accessible quote navigation. Cross-origin field rendering and network loads must additionally be inspected in a browser. Never reuse the removed preview-submission smoke test against this live form.

The deployment evidence bundle is `/tmp/719-real-form-deployment-20261002/`, with the final commit, Pages workflow, isolation comparisons, screenshots, and observed network limits in `report.json`.
