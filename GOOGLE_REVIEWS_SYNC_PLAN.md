# Google Reviews Sync Plan

This website is prepared for Google reviews without scraping Google, inventing review content, or exposing credentials.

## Current setup

- The homepage has a Google Reviews section.
- The section links to the public Google reviews page:
  `https://share.google/C8BXugNSVUIbRjyyX`
- The section links to the Google review form:
  `https://g.page/r/CXbAQezLUD0aEAE/review`
- Current review cards are placeholders only.
- Review schema is not active because exact real review text and ratings have not been confirmed.

## Option 1: Manual review updates

Manually copy approved Google review excerpts into `index.html`.

Rules:

- Use exact review text only.
- Use reviewer first name or initials only if visible.
- Use star rating only if visible.
- Do not add dates unless visible.
- Keep a link to Google reviews near the cards.
- Add Review structured data only after real review text and ratings are confirmed.

This is the simplest and safest option for a small local business website.

## Option 2: Google Business Profile API integration

A future backend integration could use the Google Business Profile API to retrieve reviews.

Important:

- Do not expose API keys, OAuth tokens or service credentials in frontend JavaScript.
- Store credentials only on the server or hosting environment.
- Cache review output so the public website remains fast.
- Add error handling so the site still loads if the API is unavailable.
- Confirm the API terms and permissions before publishing review content.

This option requires backend work and proper credential management.

## Option 3: Third-party Google review widget

A third-party widget can display Google reviews with less custom development.

Considerations:

- Check load speed and script size.
- Check privacy and cookie impact.
- Confirm the widget does not inject spammy markup or unwanted links.
- Confirm the widget supports Australian privacy and consent expectations.
- Avoid widgets that require exposing private keys in frontend code.

This option may be convenient but adds third-party dependency risk.

## Recommendation

Use manual review updates first. Consider an API or widget later only if review volume grows and the business wants automated syncing.
