// Before/after screenshots of every section, desktop and mobile.
// Usage: node build/screenshots.mjs <baseUrl> <outDir> [legacy]
//   legacy: the pre-redesign site, which pages on every viewport (navigate by hash).
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const SECTIONS = ["top", "about", "services", "philosophy", "team", "space", "milestones", "contact"];
const VIEWPORTS = {
  desktop: { viewport: { width: 1440, height: 900 } },
  mobile: { viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
};

const [base, outDir, legacy] = process.argv.slice(2);
await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();
try {
  for (const [name, options] of Object.entries(VIEWPORTS)) {
    const page = await browser.newPage(options);
    const paged = legacy === "legacy" || name === "desktop";
    for (const [i, id] of SECTIONS.entries()) {
      if (paged) {
        // A fresh load per section so each page renders as a visitor arriving by link.
        await page.goto(`${base}/#${id}`, { waitUntil: "networkidle" });
      } else {
        if (i === 0) await page.goto(`${base}/`, { waitUntil: "networkidle" });
        await page.evaluate((sid) => document.getElementById(sid).scrollIntoView({ behavior: "instant" }), id);
      }
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1200);
      await page.screenshot({ path: path.join(outDir, `${name}-${i + 1}-${id}.png`) });
    }
    await page.close();
  }
} finally {
  await browser.close();
}
console.log(`Saved screenshots to ${outDir}`);
