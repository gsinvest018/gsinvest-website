import { test, expect } from "@playwright/test";
import { LOCALES, SECTION_IDS, openStatic, readDist } from "./helpers";

for (const loc of LOCALES) {
  test.describe(`prerendered ${loc.file}`, () => {
    test("contains every section and a single h1 without JavaScript", async ({ browser }) => {
      const page = await openStatic(browser, loc.file);
      const root = page.locator("#root");
      await expect(root).toHaveAttribute("data-prerendered", loc.key);
      for (const id of SECTION_IDS) {
        await expect(root.locator(`section#${id}`)).toHaveCount(1);
      }
      await expect(page.locator("h1")).toHaveCount(1);
    });

    test("has no runtime-only leftovers", async () => {
      const html = readDist(loc.file);
      expect(html).not.toContain("<canvas");
      expect(html).not.toContain("boot-splash");
      expect(html).not.toMatch(/>\s*Loading\s*</i);
    });
  });
}
