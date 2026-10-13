// One-off generator for src/static/og-image.png (1200x630 social preview).
// Run manually after brand changes: node build/og-image.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const mark = await readFile(path.join(ROOT, "src/favicon.svg"), "utf8");

const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&family=Cormorant+Garamond:ital,wght@1,500&family=Inter:wght@500&display=block" rel="stylesheet">
<style>
  html,body{margin:0;width:1200px;height:630px;background:#070707;overflow:hidden}
  body{display:flex;align-items:center;gap:72px;padding:0 96px;box-sizing:border-box;
    background:radial-gradient(ellipse at 22% 50%,#2c250f 0%,#0d0b06 45%,#070707 75%);color:#efe6d2}
  .mark{width:300px;height:300px;flex:none}
  .mark svg{width:100%;height:100%}
  .eyebrow{font:500 18px Inter,sans-serif;letter-spacing:.42em;color:#D4AF37;margin-bottom:28px}
  .zh{font:700 64px "Noto Serif TC",serif;letter-spacing:.06em;line-height:1.15}
  .en{font:500 italic 40px "Cormorant Garamond",serif;color:#D4AF37;margin-top:14px}
  .rule{width:120px;height:1px;background:#D4AF37;margin:34px 0 26px}
  .tag{font:500 28px "Noto Serif TC",serif;color:#9a907a;letter-spacing:.08em}
</style></head><body>
  <div class="mark">${mark}</div>
  <div>
    <div class="eyebrow">GS GENESIS · EST. 2025 · TAICHUNG</div>
    <div class="zh">創世紀國際投資</div>
    <div class="en">Genesis International Capital</div>
    <div class="rule"></div>
    <div class="tag">AI 驅動量化交易 · 以紀律之名，築世代之資</div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
const out = path.join(ROOT, "src/static/og-image.png");
await page.screenshot({ path: out, type: "png" });
await browser.close();
console.log(`Wrote ${out}`);
