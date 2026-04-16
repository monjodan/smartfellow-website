# Smart Fellow — Website

Marketing website for [Smart Fellow](https://smartfellow.kr), an AI team member service for businesses in Korea. Hosted on GitHub Pages.

## Stack

Static marketing site generated from shared HTML templates, locale data, and vanilla JavaScript.

- **Fonts:** Fraunces (serif) + Plus Jakarta Sans (sans-serif) via Google Fonts
- **Forms:** [Formspree](https://formspree.io) for email capture
- **Hosting:** GitHub Pages
- **Locales:** English, French, Korean

## Local development

Build the localized pages first:

```bash
node scripts/build-site.js
```

Then serve the repository root with any static server:

```bash
# Python 3
python -m http.server 8080

# Node (npx)
npx serve .
```

The build updates:

- `index.html` and `technology.html` redirects at the site root
- localized pages under `en/`, `fr/`, and `ko/`
- `sitemap.xml`

## Editing content

- Shared page shells live in `templates/index.template.html` and `templates/technology.template.html`
- English and Korean strings live in `i18n.js`
- French strings live in `data/fr-locale.js`
- Shared SEO metadata and locale settings live in `data/site-data.js`

After changing templates, copy, or metadata, rerun:

```bash
node scripts/build-site.js
```

## Deploying to GitHub Pages

1. Push to the `main` branch of your GitHub repository.
2. In the repository **Settings → Pages**, set the source to **Branch: main / root**.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a few minutes.

To use a custom domain (e.g. `smartfellow.kr`):
1. Add a `CNAME` file to the repo root containing your domain name.
2. Configure the DNS records with your domain registrar as described in the [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Setting up the contact form

The email capture form submits to [Formspree](https://formspree.io):

1. Create a free account at formspree.io.
2. Create a new form and copy the form ID (looks like `xabc1234`).
3. In `index.html`, replace `YOUR_FORMSPREE_ID` with your actual ID:

```html
<form ... action="https://formspree.io/f/YOUR_FORMSPREE_ID" ...>
```

Formspree's free tier allows 50 submissions per month.

## Open Graph image

For rich link previews on social media, create a `og-image.png` (1200×630 px) and add it to the repo, then update the `og:image` meta tag in `index.html`:

```html
<meta property="og:image" content="https://smartfellow.kr/og-image.png">
```
