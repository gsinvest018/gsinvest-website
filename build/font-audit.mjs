// Lists the (family, weight, style) combinations actually used by text on the
// site, to keep the Google Fonts request down to what is needed.
// Usage: npm run build && node build/font-audit.mjs
import { chromium } from "@playwright/test";
import { startServer } from "./serve.mjs";

const { server, url } = await startServer("dist");
const browser = await chromium.launch();
const used = new Map();
try {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 375, height: 812 }]) {
    const page = await browser.newPage({ viewport });
    for (const p of ["/", "/en/"]) {
      await page.goto(url + p);
      await page.waitForFunction(() => window.__appReady === true);
      const combos = await page.evaluate(() => {
        const out = [];
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          const node = walker.currentNode;
          if (!node.textContent.trim() || !node.parentElement) continue;
          const cs = getComputedStyle(node.parentElement);
          const family = cs.fontFamily.split(",")[0].replace(/["']/g, "").trim();
          const hasCjk = /[㐀-鿿]/.test(node.textContent);
          out.push(`${family}|${cs.fontWeight}|${cs.fontStyle}|${hasCjk ? "cjk" : "latin"}`);
        }
        return out;
      });
      for (const c of combos) used.set(c, (used.get(c) || 0) + 1);
    }
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
for (const [combo, n] of [...used].sort()) console.log(combo.padEnd(48), n);
