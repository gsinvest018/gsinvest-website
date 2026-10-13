import { test, expect } from "@playwright/test";
import { LOCALES, openStatic } from "./helpers";

for (const loc of LOCALES) {
  test.describe(`links in ${loc.file}`, () => {
    test("no empty or placeholder links, and every in-page anchor resolves", async ({ browser }) => {
      const page = await openStatic(browser, loc.file);
      const hrefs = await page.locator("#root a[href]").evaluateAll((els) => els.map((e) => e.getAttribute("href")!));
      expect(hrefs.length).toBeGreaterThan(0);
      for (const href of hrefs) {
        expect(href.trim(), "empty href").not.toBe("");
        expect(href, "placeholder href").not.toBe("#");
        if (href.startsWith("#")) {
          await expect(page.locator(`[id="${href.slice(1)}"]`), `anchor ${href}`).toHaveCount(1);
        }
      }
    });

    test("contact details are actionable links", async ({ browser }) => {
      const page = await openStatic(browser, loc.file);
      const contact = page.locator("section#contact");
      await expect(contact.locator('a[href="tel:+886422991928"]')).toHaveCount(1);
      await expect(contact.locator('a[href="mailto:gsinvest@gsinvest.com.tw"]')).toHaveCount(1);
      await expect(contact.locator('a[href^="https://www.google.com/maps/search/"]')).toHaveCount(1);
    });

    test("risk disclaimer is shown in the footer", async ({ browser }) => {
      const page = await openStatic(browser, loc.file);
      const footer = page.locator("section#contact footer");
      await expect(footer).toHaveCount(1);
      await expect(footer).toContainText(loc.key === "zh" ? "不構成任何投資建議" : "do not constitute investment advice");
    });
  });
}
