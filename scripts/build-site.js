const fs = require('fs');
const path = require('path');
const vm = require('vm');

const siteData = require('../data/site-data');
const frLocale = require('../data/fr-locale');

const rootDir = path.resolve(__dirname, '..');
const templatesDir = path.join(rootDir, 'templates');

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
    alternateLocales,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${escapeAttribute(meta.ogTitle)}">`,
    `<meta name="twitter:description" content="${escapeAttribute(meta.ogDescription)}">`
  ].filter(Boolean).join('\n');
}

function buildConfigScript(locale) {
  return `<script>window.SF_CONFIG=${JSON.stringify({ locale })};</script>`;
}

function buildLocaleScript(locale) {
  if (locale !== 'fr') return '';
  return '<script src="/data/fr-locale.js"></script>';
}

function transformTemplate(template, pageName, locale, localeStrings) {
  let html = replaceLocalizedBlocks(template, localeStrings);
  html = html.replace('<html lang="en">', `<html lang="${siteData.localeMeta[locale].lang}">`);
  html = html.replace(/<title[\s\S]*?<link rel="icon"/m, `${buildSeo(pageName, locale)}\n<link rel="icon"`);
  html = html.replace(/href="shared\.css"/g, 'href="/shared.css"');
  html = html.replace(/src="i18n\.js"/g, 'src="/i18n.js"');
  html = html.replace(/href="\/technology\.html"/g, `href="${urlFor(locale, 'technology')}"`);
  html = html.replace(/href="\/"/g, `href="${urlFor(locale, 'home')}"`);
  html = html.replace(/href="\/#how"/g, `href="${urlFor(locale, 'home')}#how"`);
  html = html.replace(/href="\/#roles"/g, `href="${urlFor(locale, 'home')}#roles"`);
  html = html.replace(/href="\/#contact"/g, `href="${urlFor(locale, 'home')}#contact"`);
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

function buildSitemap() {
  const paths = [];
  siteData.localeOrder.forEach((locale) => {
    Object.keys(siteData.pages).forEach((pageName) => {
      paths.push(urlFor(locale, pageName));
    });
  });
  const body = paths
    .map((pathname) => `  <url><loc>${absoluteUrl(pathname)}</loc></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
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
  writeFile('sitemap.xml', buildSitemap());
}

buildSite();
