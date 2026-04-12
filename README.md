# Smart Fellow — Website

Marketing website for [Smart Fellow](https://smartfellow.kr), an AI team member service for businesses in Korea. Hosted on GitHub Pages.

## Stack

Single-page static site — plain HTML, CSS, and vanilla JavaScript. No build step required.

- **Fonts:** Lora (serif) + Nunito (sans-serif) via Google Fonts
- **Forms:** [Formspree](https://formspree.io) for email capture
- **Hosting:** GitHub Pages

## Local development

No build tools needed. Open `index.html` directly in a browser, or serve it with any static server:

```bash
# Python 3
python -m http.server 8080

# Node (npx)
npx serve .
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
