// Prerender each locale with headless Chromium and write the rendered #root
// markup back into the static HTML, so crawlers that do not run JavaScript
// still see the full content. React replaces this markup on load.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";
import { startServer } from "./serve.mjs";

export const LOCALES = [
  { key: "zh", htmlLang: "zh-Hant", urlPath: "/", file: "index.html" },
  { key: "en", htmlLang: "en", urlPath: "/en/", file: "en/index.html" },
];

const SERVER_RENDERER = "node_modules/react-dom/umd/react-dom-server-legacy.browser.production.min.js";

// The markup must be ReactDOMServer output (not the live DOM's innerHTML) so
// hydrateRoot can adopt it: React separates adjacent text nodes with comments.
async function renderRoot(page, url) {
  await page.goto(url, { waitUntil: "load" });
  await page.waitForFunction(() => window.__appReady === true);
  await page.addScriptTag({ path: SERVER_RENDERER });
  return page.evaluate(() => ReactDOMServer.renderToString(React.createElement(window.__GSApp)));
}

function inject(shell, locale, rootHtml) {
  const marker = '<div id="root"></div>';
  if (!shell.includes(marker)) throw new Error(`#root marker missing in ${locale.file}`);
  return shell
    .replace(/<html lang="[^"]*">/, `<html lang="${locale.htmlLang}">`)
    .replace(marker, `<div id="root" data-prerendered="${locale.key}">${rootHtml}</div>`);
}

export async function prerender(distDir, { transformHtml = (html) => html } = {}) {
  const { server, url } = await startServer(distDir);
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    for (const locale of LOCALES) {
      const file = path.join(distDir, locale.file);
      const shell = await readFile(file, "utf8");
      const rootHtml = await renderRoot(page, url + locale.urlPath);
      await writeFile(file, transformHtml(inject(shell, locale, rootHtml), locale));
    }
  } finally {
    await browser.close();
    server.close();
  }
}
