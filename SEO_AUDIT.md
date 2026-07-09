# Grene Gardening SEO Audit

Date reviewed: 8 July 2026

## Pages reviewed

- `/`
- `/about`
- `/services`
- `/garden-maintenance`
- `/lawn-mowing-st-ives`
- `/hedge-trimming-st-ives`
- `/strata-gardening-sydney`
- `/local-gardener-st-ives`
- `/garden-makeovers-st-ives`
- `/gallery`
- `/blog`
- `/contact`
- `/quote`
- `/404`

## Files changed during SEO pass

- `SEO_AUDIT.md`
- `sitemap.xml`
- `index.html`
- `about.html`
- `services.html`
- `garden-maintenance.html`
- `lawn-mowing-st-ives.html`
- `hedge-trimming-st-ives.html`
- `strata-gardening-sydney.html`
- `local-gardener-st-ives.html`
- `garden-makeovers-st-ives.html`
- `gallery.html`
- `blog.html`
- `contact.html`
- `quote.html`
- `404.html`
- `assets/css/style.css`
- `GOOGLE_REVIEWS_SYNC_PLAN.md`

## Current SEO issues found

- Several title tags were longer than ideal or repeated similar keyword patterns.
- Some meta descriptions were serviceable but not as local or conversion-focused as they could be.
- Key service pages had useful content but needed stronger FAQ coverage for local search intent.
- FAQ structured data was missing from the main service pages.
- Breadcrumb structured data was missing from the service landing page and individual service pages.
- LocalBusiness schema existed, but service area coverage was not fully consistent across pages.
- Blog content was present as previews but needed the three specific local SEO topics requested.
- Sitemap already used clean URLs, but `lastmod` dates were added during this pass.
- Social profile links are not confirmed, so no `sameAs` URLs were added.

## Keyword targets per page

- `/`: Gardener St Ives, Gardening St Ives, Garden maintenance Sydney North Shore
- `/about`: Local gardener St Ives, Reliable local gardener, North Shore gardening business
- `/services`: Garden services St Ives, Garden services North Shore
- `/garden-maintenance`: Garden maintenance St Ives, Gardening St Ives, Garden maintenance services St Ives Chase
- `/lawn-mowing-st-ives`: Lawn mowing St Ives, Lawn care St Ives
- `/hedge-trimming-st-ives`: Hedge trimming St Ives, Hedge pruning St Ives, Hedge pruning North Shore
- `/strata-gardening-sydney`: Strata gardening Sydney, Strata gardener North Shore, Garden maintenance Sydney North Shore
- `/local-gardener-st-ives`: Local gardener St Ives, Local gardener North Shore, Residential gardener St Ives
- `/garden-makeovers-st-ives`: Garden makeovers St Ives, Garden clean ups St Ives
- `/gallery`: Garden maintenance gallery, Grene Gardening St Ives
- `/blog`: Gardening tips St Ives, Garden maintenance advice, Strata gardening advice
- `/contact`: Contact Grene Gardening, Gardener St Ives
- `/quote`: Gardening quote St Ives, Garden maintenance quote
- `/404`: Brand recovery and navigation support

## Title and meta recommendations completed

Each page now has one unique title tag and one unique meta description. Titles were shortened where practical and written around natural local search intent rather than repeated keyword lists.

## Content improvements completed

- Added FAQ sections to:
  - `/garden-maintenance`
  - `/lawn-mowing-st-ives`
  - `/hedge-trimming-st-ives`
  - `/strata-gardening-sydney`
  - `/garden-makeovers-st-ives`
- Added a service-area section to `/services`.
- Improved local service-area wording on `/local-gardener-st-ives`.
- Updated `/blog` with three static preview topics:
  - How regular garden maintenance keeps your property looking its best
  - Why strata properties need reliable garden maintenance
  - When to book a garden clean up in St Ives
- Preserved call and quote CTAs across important pages.
- Removed homepage review placeholders and replaced them with a Google Reviews CTA section.
- Retained both Google review actions: read Google reviews and leave a Google review.

## Structured data completed

- LocalBusiness or HomeAndConstructionBusiness JSON-LD is present across all HTML pages.
- Business name, URL, phone, email, address, service areas, services and image are included.
- Service area coverage was standardised to St Ives, St Ives Chase, Gordon, Pymble, Turramurra, Killara, Wahroonga, Roseville, Chatswood and Sydney North Shore.
- Opening hours were not added because they are not confirmed.
- `sameAs` URLs were not added because social profile URLs are not confirmed.
- BreadcrumbList JSON-LD was added to:
  - `/services`
  - `/garden-maintenance`
  - `/lawn-mowing-st-ives`
  - `/hedge-trimming-st-ives`
  - `/strata-gardening-sydney`
  - `/local-gardener-st-ives`
  - `/garden-makeovers-st-ives`
- FAQPage JSON-LD was added to:
  - `/garden-maintenance`
  - `/lawn-mowing-st-ives`
  - `/hedge-trimming-st-ives`
  - `/strata-gardening-sydney`
  - `/garden-makeovers-st-ives`
- Review schema was not added because real review text and ratings are not displayed on the website.

## Technical SEO checks completed

- Clean canonical URLs confirmed.
- No `.html` links found in HTML, JavaScript or sitemap files.
- No noindex tags found.
- Every reviewed HTML page has one title tag.
- Every reviewed HTML page has one meta description.
- Every reviewed HTML page has one H1.
- JSON-LD blocks parse as valid JSON.
- No missing local image, video poster or script references found.
- All image tags have alt text.
- Non-logo images use lazy loading.
- Internal clean page links resolve to known local pages.
- `robots.txt` allows crawling and includes the sitemap URL.
- `sitemap.xml` uses clean URLs only and includes no backend, raw photo or `.html` URLs.

## Sitemap status

`sitemap.xml` includes the main public pages only and uses clean URLs:

- `https://www.grenegardening.com.au/`
- `https://www.grenegardening.com.au/about`
- `https://www.grenegardening.com.au/services`
- `https://www.grenegardening.com.au/garden-maintenance`
- `https://www.grenegardening.com.au/lawn-mowing-st-ives`
- `https://www.grenegardening.com.au/hedge-trimming-st-ives`
- `https://www.grenegardening.com.au/strata-gardening-sydney`
- `https://www.grenegardening.com.au/local-gardener-st-ives`
- `https://www.grenegardening.com.au/garden-makeovers-st-ives`
- `https://www.grenegardening.com.au/gallery`
- `https://www.grenegardening.com.au/blog`
- `https://www.grenegardening.com.au/contact`
- `https://www.grenegardening.com.au/quote`

## Robots status

`robots.txt` allows crawling and includes:

`Sitemap: https://www.grenegardening.com.au/sitemap.xml`

## Manual SEO tasks remaining

- Confirm Google Business Profile details match the website name, phone, address and service areas.
- Add confirmed social profile URLs to LocalBusiness `sameAs` only after the real links are available.
- Add real Google reviews manually only if approved, using exact review text, reviewer first names or initials, and star ratings only if visible.
- Automatic review syncing can be considered later using the Google Business Profile API or a third-party widget. API keys and credentials must never be exposed in frontend JavaScript.
- Replace the contact page map placeholder with the preferred Google Maps embed or static map link.
- Submit `https://www.grenegardening.com.au/sitemap.xml` in Google Search Console after deployment.
- Run Google Rich Results Test on FAQ and breadcrumb pages after upload.
- Run PageSpeed Insights after deployment and compress any assets flagged as too large.
- Consider future real blog article pages if the business wants ongoing content marketing.
