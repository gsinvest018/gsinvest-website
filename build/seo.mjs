// Generates per-locale <head> markup and the crawler-facing text files.
import { AI_CRAWLERS, LOCALE_META, OG_IMAGE, ORGANIZATION as ORG, SITE_URL } from "./seo.config.mjs";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const abs = (p) => SITE_URL + p;

export function structuredData(localeKey) {
  const inLanguage = localeKey === "zh" ? "zh-Hant" : "en";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Corporation, not FinancialService: the firm trades its own capital and
        // does not offer regulated financial services to the public.
        "@type": "Corporation",
        "@id": abs("/#organization"),
        name: localeKey === "zh" ? ORG.legalNameZh : ORG.legalNameEn,
        legalName: ORG.legalNameZh,
        alternateName: [localeKey === "zh" ? ORG.legalNameEn : ORG.legalNameZh, ...ORG.alternateNames],
        url: abs("/"),
        logo: abs("/logo-512.png"),
        image: abs(OG_IMAGE.path),
        description: LOCALE_META[localeKey].description,
        foundingDate: ORG.foundingDate,
        telephone: ORG.telephone,
        email: ORG.email,
        address: { "@type": "PostalAddress", ...ORG.address },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: ORG.telephone,
          email: ORG.email,
          availableLanguage: ["zh-Hant", "en"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ORG.hours.days,
            opens: ORG.hours.opens,
            closes: ORG.hours.closes,
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": abs("/#website"),
        url: abs("/"),
        name: "GS 創世紀國際投資 · Genesis International Capital",
        inLanguage,
        publisher: { "@id": abs("/#organization") },
      },
    ],
  };
}

export function renderHead(localeKey) {
  const meta = LOCALE_META[localeKey];
  const other = localeKey === "zh" ? LOCALE_META.en : LOCALE_META.zh;
  const json = JSON.stringify(structuredData(localeKey)).replace(/</g, "\\u003c");
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${abs(meta.path)}" />`,
    `<link rel="alternate" hreflang="zh-Hant" href="${abs(LOCALE_META.zh.path)}" />`,
    `<link rel="alternate" hreflang="en" href="${abs(LOCALE_META.en.path)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${abs(LOCALE_META.zh.path)}" />`,
    `<meta name="theme-color" content="#070707" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="GS 創世紀國際投資 · Genesis International Capital" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${abs(meta.path)}" />`,
    `<meta property="og:image" content="${abs(OG_IMAGE.path)}" />`,
    `<meta property="og:image:width" content="${OG_IMAGE.width}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE.height}" />`,
    `<meta property="og:locale" content="${meta.ogLocale}" />`,
    `<meta property="og:locale:alternate" content="${other.ogLocale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${abs(OG_IMAGE.path)}" />`,
    `<script type="application/ld+json">${json}</script>`,
  ].join("\n");
}

export function robotsTxt() {
  const ai = AI_CRAWLERS.map((bot) => `User-agent: ${bot}\nAllow: /`).join("\n\n");
  return `User-agent: *\nAllow: /\n\n${ai}\n\nSitemap: ${abs("/sitemap.xml")}\n`;
}

export function sitemapXml(lastmod) {
  const links = Object.entries({ "zh-Hant": LOCALE_META.zh.path, en: LOCALE_META.en.path, "x-default": LOCALE_META.zh.path })
    .map(([lang, p]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${abs(p)}"/>`)
    .join("\n");
  const urls = Object.values(LOCALE_META)
    .map((m) => `  <url>\n    <loc>${abs(m.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${links}\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

export function llmsTxt() {
  const a = ORG.address;
  return `# GS 創世紀國際投資 · Genesis International Capital

> ${LOCALE_META.en.description}

## 公司概要

- 公司名稱：${ORG.legalNameZh}（${ORG.legalNameEn}）
- 品牌：${ORG.alternateNames.join("、")}
- 成立：${ORG.foundingDate} 年，總部位於台灣台中
- 核心：以 AI 驅動量化交易，自主研發交易系統；所有策略皆以自有資金於實盤驗證
- 業務：股票、期貨與海外股票之自營交易；AI 應用軟體開發與顧問服務
- 團隊：AI 部門、交易部門、策略部門

## Company profile (English)

- Legal name: ${ORG.legalNameEn}
- Founded in ${ORG.foundingDate}, headquartered in Taichung, Taiwan
- Focus: AI-driven quantitative trading on in-house systems, proven with the firm's own capital
- Business lines: proprietary trading (equities, futures, overseas stocks); AI software development and advisory
- Website content is for general information only and does not constitute investment advice

## 聯絡方式 / Contact

- 地址 Address：${a.addressLocality}${a.streetAddress}, Taiwan
- 電話 Phone：${ORG.telephone}
- Email：${ORG.email}
- 服務時間 Hours：週一至週四 Mon–Thu ${ORG.hours.opens}–${ORG.hours.closes} (GMT+8)

## 網頁 / Pages

- [繁體中文首頁](${abs(LOCALE_META.zh.path)})
- [English homepage](${abs(LOCALE_META.en.path)})
`;
}
