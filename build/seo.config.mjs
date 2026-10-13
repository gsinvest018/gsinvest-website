// Source data for per-locale <head> tags, structured data and GEO text files.
// Contact details must match I18N.*.contact.info in src/app.prod.js
// (tests/seo.spec.ts checks this against the rendered page).
export const SITE_URL = "https://gsinvest.com.tw";
export const OG_IMAGE = { path: "/og-image.png", width: 1200, height: 630 };

export const ORGANIZATION = {
  legalNameZh: "創世紀國際投資股份有限公司",
  legalNameEn: "GS Genesis International Investment Co., Ltd.",
  alternateNames: ["GS 創世紀國際投資", "GS Genesis", "Genesis International Capital"],
  foundingDate: "2025",
  telephone: "+886-4-2299-1928",
  email: "gsinvest@gsinvest.com.tw",
  address: {
    streetAddress: "北屯區后庄路 41 號 10 樓-41",
    addressLocality: "台中市",
    addressCountry: "TW",
  },
  hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "17:30" },
};

export const LOCALE_META = {
  zh: {
    path: "/",
    ogLocale: "zh_TW",
    title: "GS 創世紀國際投資｜台中 AI 量化交易金融科技公司",
    description:
      "GS 創世紀國際投資（Genesis International Capital）是 2025 年成立於台中的金融科技公司，以 AI 驅動量化交易為核心，自主研發交易系統，所有策略皆以自有資金於實盤驗證；業務涵蓋自營交易、AI 應用軟體開發與顧問服務。",
  },
  en: {
    path: "/en/",
    ogLocale: "en_US",
    title: "Genesis International Capital — AI Quant Trading, Taichung",
    description:
      "Genesis International Capital (GS Genesis) is a Taichung-based fintech firm founded in 2025, built around AI-driven quantitative trading. We build our trading systems in-house and prove every strategy with our own capital in live markets.",
  },
};

export const AI_CRAWLERS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot"];
