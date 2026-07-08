# Grene Gardening Hostinger Website

## 1. Project overview

This is a clean Hostinger rebuild for Grene Gardening, replacing the old Wix website with lightweight HTML, CSS, JavaScript and PHP files. The project is designed for Hostinger shared hosting. Upload the repository root contents directly into the hosting account's `public_html` directory.

No Wix, WordPress, React, Bootstrap or Tailwind code is used.

Public URLs are extensionless. Files such as `services.html` remain at the repository root, but Apache rewrite rules serve them at clean URLs such as `/services`, `/gallery`, `/contact` and `/quote`.

## 2. Folder structure

- The repository root contains the live website files that should be deployed into Hostinger `public_html`.
- `assets/css/` contains the main stylesheet.
- `assets/js/` contains lightweight JavaScript.
- `assets/images/` contains folders for logo, favicon, hero, service, gallery, testimonial and before/after images.
- `backend/` contains PHP form handlers and SMTP configuration examples.

## 3. How to add real images

Copy real website images into:

- `assets/images/logo/`
- `assets/images/hero/`
- `assets/images/services/`
- `assets/images/gallery/`
- `assets/images/before-after/`

The current build already uses selected real images from `rawphotos` through optimised copies in the public image folders. Add future images the same way: keep originals in `rawphotos`, then create web-sized copies with `loading="lazy"` and descriptive `alt` text.

## 4. Recommended image naming

Use SEO-friendly file names such as:

- `grene-gardening-logo.png`
- `gardener-st-ives-hero.jpg`
- `garden-maintenance-st-ives.jpg`
- `lawn-mowing-st-ives.jpg`
- `hedge-trimming-st-ives.jpg`
- `strata-gardening-sydney.jpg`
- `garden-clean-up-north-shore.jpg`
- `garden-makeover-st-ives.jpg`

## 5. Favicon setup

The favicon files are stored in `assets/images/favicon/` and are linked from every HTML page with root-relative paths so they work on clean URLs.

Current favicon files:

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `site.webmanifest`

The current favicon set was generated from `assets/images/logo/Original on Transparent.png`, using the house and leaf mark from the logo. If the logo changes later, regenerate the favicon set from the clearest transparent logo source and keep the same file names.

## 6. How to configure SMTP on Hostinger

1. Copy `backend/config.example.php` to `backend/config.php`.
2. Add the real Hostinger SMTP username and password.
3. Use `smtp.hostinger.com`.
4. Use port `465` with SSL.
5. Test the contact form and quote form on Hostinger after upload.

Do not commit or publicly share `config.php`.
Configure SMTP only on Hostinger or the final private hosting environment. Never add SMTP passwords, Hostinger passwords, API keys, private keys or email passwords to GitHub.

## 7. PHPMailer setup

Copy PHPMailer into:

`backend/phpmailer/`

The PHP handlers expect these files:

- `backend/phpmailer/src/PHPMailer.php`
- `backend/phpmailer/src/SMTP.php`
- `backend/phpmailer/src/Exception.php`

## 8. How to upload to Hostinger

1. Zip the contents of the repository root, not the project folder itself.
2. Upload the zip file into Hostinger File Manager.
3. Extract it inside the hosting account's `public_html`.
4. Confirm `index.html`, `.htaccess`, `assets/` and `backend/` are directly inside Hostinger `public_html`, not inside another nested folder.
5. Test the homepage.
6. Test the contact page.
7. Test the quote page.

## 9. DNS and go-live checklist

- Do not cancel Wix until the new site is tested.
- Upload the new site to Hostinger.
- Test using a temporary URL if Hostinger provides one.
- Point the domain to Hostinger nameservers or update the A record.
- Enable SSL in Hostinger.
- Confirm `https://www.grenegardening.com.au` loads.
- Test the non-www to www redirect.
- If testing with a temporary Hostinger URL or local server, temporarily comment out the canonical HTTPS/www redirect block in `.htaccess`.
- Test `.html` to clean URL redirects, such as `/services.html` to `/services`.
- Test clean extensionless pages, such as `/garden-maintenance` and `/quote`.
- Test old Wix redirects.
- Test contact and quote forms.

## 10. SEO checklist

- Review every title tag and meta description.
- Confirm each page has one H1.
- Check internal service links.
- Review real image choices and alt text after the owner confirms the preferred photo set.
- Confirm `robots.txt` loads.
- Confirm `sitemap.xml` loads.
- Add the site to Google Search Console.
- Submit the sitemap in Google Search Console.
- Update the Google Business Profile website link if needed.
- Run a page speed check.
- Run a mobile-friendly check.

## 11. Manual work still required

- Replace the contact page map area with the preferred Google Maps embed or static map link.
- Add real testimonials or Google review excerpts.
- Add a Google review link.
- Add Google Analytics or Google Tag Manager if required.
- Add Google Search Console verification.
- Create `backend/config.php` from the example file.
- Add real SMTP credentials on Hostinger.
- Install or copy PHPMailer into `backend/phpmailer/`.
- Test forms on Hostinger.
- Submit the sitemap to Google.

## 12. GitHub safety notes

- `backend/config.php` is ignored and must not be committed.
- `assets/images/rawphotos/` is ignored and must not be committed because it contains original photos and large raw videos.
- Keep `backend/config.example.php` committed as the safe template.
- Keep optimised web images committed only when they are actually used by the website.
- Add real SMTP credentials only on Hostinger by copying `config.example.php` to `config.php` there.
- Check `git status --ignored` before pushing if this is turned into a Git repository.

## 13. Local quality review notes

Reviewed locally on 7 July 2026. The site uses the simplified navigation, real logo, optimised image copies, lazy-loaded non-critical images, a metadata-only video embed, clean extensionless public URLs, and exact-match old URL redirects. PHP form syntax still needs to be linted/tested on a PHP-enabled Hostinger environment because PHP is not installed in the local review environment.

