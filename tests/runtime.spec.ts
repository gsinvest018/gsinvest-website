import { test, expect } from "@playwright/test";
import { LOCALES } from "./helpers";

for (const loc of LOCALES) {
  test(`${loc.url} hydrates without console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(loc.url);
    await page.waitForFunction(() => (window as any).__appReady === true);
    await page.waitForLoadState("networkidle");
    expect(errors).toEqual([]);
  });
}
