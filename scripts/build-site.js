const fs = require('fs');
const path = require('path');
const vm = require('vm');

const siteData = require('../data/site-data');
const frLocale = require('../data/fr-locale');

const rootDir = path.resolve(__dirname, '..');
const templatesDir = path.join(rootDir, 'templates');
const buildDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

function readTranslations() {
  const source = fs.readFileSync(path.join(rootDir, 'i18n.js'), 'utf8');
  const match = source.match(/const T = (\{[\s\S]*?\n  \});\n\n  var _extraLocales/m);
  if (!match) {
    throw new Error('Could not extract translations from i18n.js');
  }
  const locales = vm.runInNewContext(`(${match[1]})`);
  locales.fr = frLocale;
  return locales;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, '&quot;');
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function urlFor(locale, pageName) {
  const pagePath = siteData.pages[pageName].path;
  return pagePath === '/' ? `/${locale}/` : `/${locale}${pagePath}`;
}

function absoluteUrl(pathname) {
  return `${siteData.site.baseUrl}${pathname}`;
}

function replaceLocalizedBlocks(html, localeStrings) {
  html = html.replace(/<([a-z0-9:-]+)([^>]*data-i18n-html="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/gi, (full, tag, attrs, key) => {
    if (!Object.prototype.hasOwnProperty.call(localeStrings, key)) return full;
    return `<${tag}${attrs}>${localeStrings[key]}</${tag}>`;
  });

  html = html.replace(/<([a-z0-9:-]+)([^>]*data-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/gi, (full, tag, attrs, key) => {
    if (!Object.prototype.hasOwnProperty.call(localeStrings, key)) return full;
    return `<${tag}${attrs}>${escapeHtml(localeStrings[key])}</${tag}>`;
  });

  return html;
}

function buildLanguageSwitcher(locale, pageName, mobile) {
  const className = mobile ? 'lang-switcher lang-switcher-mobile' : 'lang-switcher';
  const links = siteData.localeOrder.map((targetLocale) => {
    const active = targetLocale === locale;
    const classes = active ? 'lang-option is-current' : 'lang-option';
    const ariaCurrent = active ? ' aria-current="page"' : '';
    return `<a href="${urlFor(targetLocale, pageName)}" class="${classes}" data-locale="${targetLocale}" lang="${siteData.localeMeta[targetLocale].lang}"${ariaCurrent}>${siteData.languageNames[targetLocale]}</a>`;
  }).join('');
  return `<div class="${className}" role="group" aria-label="${escapeAttribute(siteData.ui[locale].chooseLanguage)}">${links}</div>`;
}

function buildSeo(pageName, locale) {
  const meta = siteData.pages[pageName].meta[locale];
  const localeMeta = siteData.localeMeta[locale];
  const canonical = absoluteUrl(urlFor(locale, pageName));
  const ogImageUrl = absoluteUrl(siteData.site.ogImage || '/og-image.png');
  const alternates = siteData.localeOrder.map((targetLocale) => {
    const href = absoluteUrl(urlFor(targetLocale, pageName));
    const hreflang = siteData.localeMeta[targetLocale].lang;
    return `<link rel="alternate" hreflang="${hreflang}" href="${href}">`;
  }).join('\n');
  const alternateLocales = siteData.localeOrder
    .filter((targetLocale) => targetLocale !== locale)
    .map((targetLocale) => `<meta property="og:locale:alternate" content="${siteData.localeMeta[targetLocale].ogLocale}">`)
    .join('\n');

  const xDefault = absoluteUrl(urlFor('en', pageName));

  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttribute(meta.description)}">`,
    '<meta name="robots" content="index, follow">',
    `<link rel="canonical" href="${canonical}">`,
    alternates,
    `<link rel="alternate" hreflang="x-default" href="${xDefault}">`,
    '<meta property="og:type" content="website">',
    `<meta property="og:title" content="${escapeAttribute(meta.ogTitle)}">`,
    `<meta property="og:description" content="${escapeAttribute(meta.ogDescription)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:locale" content="${localeMeta.ogLocale}">`,
    `<meta property="og:site_name" content="${escapeAttribute(siteData.site.name)}">`,
    `<meta property="og:image" content="${ogImageUrl}">`,
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    alternateLocales,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${escapeAttribute(meta.ogTitle)}">`,
    `<meta name="twitter:description" content="${escapeAttribute(meta.ogDescription)}">`,
    `<meta name="twitter:image" content="${ogImageUrl}">`
  ].filter(Boolean).join('\n');
}

function buildJsonLd(pageName, locale) {
  const meta = siteData.pages[pageName].meta[locale];
  const canonical = absoluteUrl(urlFor(locale, pageName));
  const localeMeta = siteData.localeMeta[locale];

  const organization = {
    '@type': 'Organization',
    '@id': `${siteData.site.baseUrl}/#organization`,
    name: siteData.site.name,
    url: siteData.site.baseUrl,
    logo: absoluteUrl('/assets/smart-fellow-logo.svg'),
    description: 'Smart Fellow builds private AI teams for companies that care about their data: fine-tuned local models on hardware they own.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Seoul',
      addressCountry: 'KR'
    },
    areaServed: { '@type': 'Country', name: 'South Korea' },
    knowsLanguage: ['en', 'ko', 'fr']
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: meta.title,
    description: meta.description,
    inLanguage: localeMeta.lang,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteData.site.baseUrl}/#website`,
      name: siteData.site.name,
      url: siteData.site.baseUrl,
      publisher: { '@id': `${siteData.site.baseUrl}/#organization` }
    },
    publisher: { '@id': `${siteData.site.baseUrl}/#organization` }
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, webPage]
  };

  return `<script type="application/ld+json">${JSON.stringify(graph)}</script>`;
}

function buildConfigScript(locale) {
  return `<script>window.SF_CONFIG=${JSON.stringify({ locale })};</script>`;
}

function buildLocaleScript(locale) {
  if (locale !== 'fr') return '';
  return '<script src="/data/fr-locale.js"></script>';
}

function localizeInternalLinks(html, locale) {
  // Localize every internal page link to its locale-specific path.
  // Order matters: more specific paths first, so /use-cases/studio-monjo/
  // doesn't get partially matched by a /use-cases/ pattern.
  const pages = Object.keys(siteData.pages)
    .map((name) => ({ name, path: siteData.pages[name].path }))
    .sort((a, b) => b.path.length - a.path.length);

  pages.forEach(({ name, path: pagePath }) => {
    if (pagePath === '/') return; // handled separately to avoid greedy match
    const escaped = escapeRegex(pagePath);
    html = html.replace(new RegExp(`href="${escaped}"`, 'g'), `href="${urlFor(locale, name)}"`);
  });

  // Home: only exact `href="/"` and home anchors
  html = html.replace(/href="\/"/g, `href="${urlFor(locale, 'home')}"`);
  html = html.replace(/href="\/(#[a-zA-Z0-9_-]+)"/g, (_m, anchor) => `href="${urlFor(locale, 'home')}${anchor}"`);

  return html;
}

function transformTemplate(template, pageName, locale, localeStrings) {
  let html = replaceLocalizedBlocks(template, localeStrings);
  html = html.replace('<html lang="en">', `<html lang="${siteData.localeMeta[locale].lang}">`);
  html = html.replace(/<title[\s\S]*?<link rel="icon"/m, `${buildSeo(pageName, locale)}\n<link rel="icon"`);
  html = html.replace('</head>', `${buildJsonLd(pageName, locale)}\n</head>`);
  html = html.replace(/href="shared\.css"/g, 'href="/shared.css"');
  html = html.replace(/src="i18n\.js"/g, 'src="/i18n.js"');
  html = localizeInternalLinks(html, locale);
  html = html.replace(/aria-label="Open menu"/g, `aria-label="${escapeAttribute(siteData.ui[locale].openMenu)}"`);
  html = html.replace(/<button id="lang-toggle"[\s\S]*?<\/button>/, buildLanguageSwitcher(locale, pageName, false));
  html = html.replace(/<button id="lang-toggle-mobile"[\s\S]*?<\/button>/, buildLanguageSwitcher(locale, pageName, true));
  html = html.replace(/<script src="https:\/\/assets\.calendly\.com\/assets\/external\/widget\.js" async><\/script>/g, '');
  html = html.replace(/<script src="\/i18n\.js"><\/script>/, `${buildConfigScript(locale)}\n${buildLocaleScript(locale)}\n<script src="/i18n.js"></script>`);

  if (pageName === 'home' || pageName === 'sovereign') {
    html = html.replace('</body>', '<script src="https://assets.calendly.com/assets/external/widget.js" async></script>\n</body>');
  }

  return html;
}

function rootOutputForPage(pageName) {
  const pagePath = siteData.pages[pageName].path;
  if (pagePath === '/') return 'index.html';
  return pagePath.endsWith('/') ? `${pagePath.slice(1)}index.html` : pagePath.slice(1);
}

function buildRedirect(pageName) {
  const pagePath = siteData.pages[pageName].path;
  const fallback = pagePath === '/' ? '/en/' : `/en${pagePath}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, follow">
<title>Smart Fellow</title>
<script>
(function () {
  var saved = null;
  try { saved = localStorage.getItem('sf-lang'); } catch (e) {}
  var browser = (navigator.language || navigator.userLanguage || '').toLowerCase();
  var locale = saved || (browser.indexOf('ko') === 0 ? 'ko' : browser.indexOf('fr') === 0 ? 'fr' : 'en');
  window.location.replace('/' + locale + '${pagePath}');
})();
</script>
<noscript><meta http-equiv="refresh" content="0; url=${fallback}"></noscript>
</head>
<body></body>
</html>
`;
}

function buildLegacyRedirect(toPath) {
  // Hard redirect (not locale-aware) for old .html paths that have been
  // renamed. Sends crawlers and inbound links to the new canonical path.
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, follow">
<title>Smart Fellow</title>
<link rel="canonical" href="${absoluteUrl(toPath)}">
<meta http-equiv="refresh" content="0; url=${toPath}">
<script>window.location.replace('${toPath}');</script>
</head>
<body><p>Redirecting to <a href="${toPath}">${toPath}</a>…</p></body>
</html>
`;
}

function buildSitemap() {
  const entries = [];
  siteData.localeOrder.forEach((locale) => {
    Object.keys(siteData.pages).forEach((pageName) => {
      entries.push({
        loc: absoluteUrl(urlFor(locale, pageName)),
        alternates: siteData.localeOrder.map((alt) => ({
          hreflang: siteData.localeMeta[alt].lang,
          href: absoluteUrl(urlFor(alt, pageName))
        }))
      });
    });
  });

  const body = entries.map((entry) => {
    const links = entry.alternates
      .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`)
      .join('\n');
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${entry.alternates[0].href}"/>`;
    return `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${buildDate}</lastmod>\n${links}\n${xDefault}\n  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
}

function buildRobotsTxt() {
  return `# https://www.robotstxt.org/
User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;
}

function build404() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page not found — Smart Fellow</title>
<meta name="robots" content="noindex, follow">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%231b4d3e'/><text x='50' y='68' text-anchor='middle' font-family='Georgia,serif' font-size='52' font-weight='500' fill='white'>SF</text></svg>">
<link rel="stylesheet" href="/shared.css">
<style>
  body { display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 2rem; }
  .nf {
    max-width: 36rem;
    text-align: center;
  }
  .nf-num {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(4rem, 12vw, 8rem);
    font-weight: 400;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 1rem;
  }
  .nf h1 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 0.75rem;
  }
  .nf p {
    color: var(--ink-soft);
    margin-bottom: 1.75rem;
  }
  .nf-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
</head>
<body>
  <main class="nf">
    <div class="nf-num">404</div>
    <h1>This page doesn't exist.</h1>
    <p>The link may be broken or the page may have moved. Try the home page, or book a free AI readiness review.</p>
    <div class="nf-actions">
      <a href="/" class="btn-dark">Home</a>
      <a href="/assessment/" class="btn-outline">Book a free review</a>
    </div>
  </main>
</body>
</html>
`;
}

function writeFile(relativePath, contents) {
  const fullPath = path.join(rootDir, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, contents);
}

function buildSite() {
  const locales = readTranslations();
  Object.keys(siteData.pages).forEach((pageName) => {
    const templatePath = path.join(templatesDir, siteData.pages[pageName].template);
    const template = fs.readFileSync(templatePath, 'utf8');
    siteData.localeOrder.forEach((locale) => {
      const outDir = path.join(rootDir, locale);
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      const localeStrings = Object.assign({}, locales.en || {}, locales[locale] || {});
      const output = transformTemplate(template, pageName, locale, localeStrings);
      writeFile(path.join(locale, siteData.pages[pageName].output), output);
    });
  });

  Object.keys(siteData.pages).forEach((pageName) => {
    writeFile(rootOutputForPage(pageName), buildRedirect(pageName));
  });

  // Legacy path redirects (e.g. /how-we-work.html -> /how-we-work/)
  (siteData.legacyRedirects || []).forEach(({ from, to }) => {
    const relativePath = from.replace(/^\//, '');
    writeFile(relativePath, buildLegacyRedirect(to));
  });

  writeFile('sitemap.xml', buildSitemap());
  writeFile('robots.txt', buildRobotsTxt());
  writeFile('404.html', build404());
}

buildSite();
