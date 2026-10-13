import { test, expect } from "@playwright/test";

test("root path renders Traditional Chinese", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-Hant");
  await expect(page.locator("h1.hero-title")).toContainText("穿越市場循環");
});

test("/en/ renders English", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("h1.hero-title")).not.toContainText("穿越市場循環");
});

test("language toggle updates the URL and back restores it", async ({ page }) => {
  await page.goto("/#about");
  await page.locator("[data-lang-switch]").first().click();
  await expect(page).toHaveURL(/\/en\/#about$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.goBack();
  await expect(page).toHaveURL(/127\.0\.0\.1:4173\/#about$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-Hant");
});
