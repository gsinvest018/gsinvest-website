import { test, expect } from "@playwright/test";
import { existsSync } from "node:fs";
import { LOCALES, openStatic, readDist } from "./helpers";

const SITE = "https://gsinvest.com.tw";
const digits = (s: string) => s.replace(/\D/g, "");

for (const loc of LOCALES) {
  test.describe(`head of ${loc.file}`, () => {
    test("has title, description, canonical and hreflang", async ({ browser }) => {
      const page = await openStatic(browser, loc.file);
      expect((await page.title()).length).toBeGreaterThan(10);
      const desc = await page.locator('meta[name="description"]').getAttribute("content");
      expect(desc && desc.length).toBeGreaterThan(50);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", SITE + loc.url);
      const alternates = page.locator('link[rel="alternate"][hreflang]');
      await expect(alternates).toHaveCount(3);
      await expect(page.locator('link[hreflang="zh-Hant"]')).toHaveAttribute("href", SITE + "/");
      await expect(page.locator('link[hreflang="en"]')).toHaveAttribute("href", SITE + "/en/");
      await expect(page.locator('link[hreflang="x-default"]')).toHaveAttribute("href", SITE + "/");
    });

    test("has Open Graph and Twitter Card tags", async ({ browser }) => {
      const page = await openStatic(browser, loc.file);
      for (const prop of ["og:title", "og:description", "og:image", "og:url", "og:type", "og:locale"]) {
        await expect(page.locator(`meta[property="${prop}"]`)).toHaveCount(1);
      }
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", SITE + loc.url);
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    });

    test("JSON-LD parses and matches the visible contact details", async ({ browser }) => {
      const page = await openStatic(browser, loc.file);
      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(blocks.length).toBeGreaterThan(0);
      const graph = blocks.flatMap((b) => JSON.parse(b)["@graph"] ?? [JSON.parse(b)]);
      const org = graph.find((n) => n["@type"] === "Corporation");
      expect(org).toBeTruthy();
      const contactText = await page.locator("section#contact").innerText();
      // Visible numbers are "04-2299-1928" (zh) or "+886 4 2299 1928" (en); compare the national part.
      expect(digits(contactText)).toContain(digits(org.telephone).replace(/^886/, ""));
      expect(contactText).toContain(org.email);
      if (loc.key === "zh") expect(contactText).toContain(org.address.streetAddress);
      expect(graph.some((n) => n["@type"] === "WebSite")).toBe(true);
    });
  });
}

test("robots.txt, sitemap.xml and llms.txt are generated", async () => {
  for (const f of ["robots.txt", "sitemap.xml", "llms.txt", "og-image.png"]) {
    expect(existsSync(`dist/${f}`), f).toBe(true);
  }
  const robots = readDist("dist/robots.txt");
  expect(robots).toContain(`Sitemap: ${SITE}/sitemap.xml`);
  for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]) {
    expect(robots).toContain(`User-agent: ${bot}`);
  }
  const sitemap = readDist("dist/sitemap.xml");
  expect(sitemap).toContain(`<loc>${SITE}/</loc>`);
  expect(sitemap).toContain(`<loc>${SITE}/en/</loc>`);
  expect(readDist("dist/llms.txt")).toContain("gsinvest@gsinvest.com.tw");
});
