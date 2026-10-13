import { test, expect } from "@playwright/test";
import { SECTION_IDS } from "./helpers";

test.describe("desktop: full-screen paged mode", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("arrow keys change page and the hash follows", async ({ page }) => {
    await page.goto("/");
    await page.waitForFunction(() => (window as any).__appReady === true);
    await page.keyboard.press("ArrowDown");
    await expect(page.locator(".page.active section#about")).toHaveCount(1);
    await expect(page).toHaveURL(/#about$/);
  });

  test("a hash in the URL opens that page directly", async ({ page }) => {
    await page.goto("/#team");
    await expect(page.locator(".page.active section#team")).toHaveCount(1);
  });

  test("page chrome is visible and the document does not scroll", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".pager")).toBeVisible();
    await expect(page.locator(".page-counter")).toBeVisible();
    const scrollable = await page.evaluate(() => document.scrollingElement!.scrollHeight > innerHeight);
    expect(scrollable).toBe(false);
  });
});

test.describe("mobile: continuous scroll", () => {
  test.use({ viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true });

  test("all sections stack in order and the page scrolls", async ({ page }) => {
    await page.goto("/");
    await page.waitForFunction(() => (window as any).__appReady === true);
    const tops = await page.evaluate(
      (ids) => ids.map((id) => document.getElementById(id)!.getBoundingClientRect().top + scrollY),
      SECTION_IDS,
    );
    for (let i = 1; i < tops.length; i++) expect(tops[i]).toBeGreaterThan(tops[i - 1]);
    const scrollable = await page.evaluate(() => document.scrollingElement!.scrollHeight > innerHeight * 4);
    expect(scrollable).toBe(true);
  });

  test("no horizontal overflow and no paged chrome", async ({ page }) => {
    await page.goto("/");
    await page.waitForFunction(() => (window as any).__appReady === true);
    // body has overflow-x: hidden, so compare element edges instead of scrollWidth.
    const offenders = await page.evaluate((ids) => {
      const clipped = (el: Element) => {
        for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
          const o = getComputedStyle(p).overflowX;
          if (o === "hidden" || o === "clip") return true;
        }
        return false;
      };
      const out: string[] = [];
      for (const id of ids) {
        for (const el of document.getElementById(id)!.querySelectorAll("*")) {
          const r = el.getBoundingClientRect();
          if (r.width && r.right > innerWidth + 1 && !clipped(el)) out.push(`#${id} ${el.tagName}.${el.className}`);
        }
      }
      return out;
    }, SECTION_IDS);
    expect(offenders).toEqual([]);
    await expect(page.locator(".pager")).toBeHidden();
    await expect(page.locator(".page-counter")).toBeHidden();
  });

  test("scrolling to a section updates the hash; sections are not aria-hidden", async ({ page }) => {
    await page.goto("/");
    await page.waitForFunction(() => (window as any).__appReady === true);
    // Instant scroll: this checks the observer -> hash wiring, not smooth scrolling.
    await page.evaluate(() => document.getElementById("contact")!.scrollIntoView({ behavior: "instant" }));
    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator('.page[aria-hidden="true"]')).toHaveCount(0);
  });

  test("a hash in the URL scrolls to that section", async ({ page }) => {
    await page.goto("/#milestones");
    await page.waitForFunction(() => (window as any).__appReady === true);
    await expect
      .poll(() => page.evaluate(() => Math.abs(document.getElementById("milestones")!.getBoundingClientRect().top)))
      .toBeLessThan(120);
  });
});

test.describe("mobile: menu and header", () => {
  test.use({ viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true });

  test("burger opens the menu, a link navigates and closes it", async ({ page }) => {
    await page.goto("/");
    await page.waitForFunction(() => (window as any).__appReady === true);
    const burger = page.locator(".nav-burger");
    await expect(burger).toHaveAttribute("aria-expanded", "false");
    await burger.click();
    await expect(burger).toHaveAttribute("aria-expanded", "true");
    const menu = page.locator("#mobile-menu");
    await expect(menu).toBeVisible();
    await menu.getByRole("link", { name: "聯絡我們" }).click();
    await expect(menu).toBeHidden();
    await expect(burger).toHaveAttribute("aria-expanded", "false");
    await expect
      .poll(() => page.evaluate(() => Math.abs(document.getElementById("contact")!.getBoundingClientRect().top - 64)))
      .toBeLessThan(40);
  });

  test("Escape closes the menu", async ({ page }) => {
    await page.goto("/");
    await page.waitForFunction(() => (window as any).__appReady === true);
    await page.locator(".nav-burger").click();
    await expect(page.locator("#mobile-menu")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("#mobile-menu")).toBeHidden();
  });

  test("header fits on one line with a single language switch", async ({ page }) => {
    await page.goto("/");
    const nav = await page.locator("nav.nav").boundingBox();
    expect(nav!.height).toBeLessThanOrEqual(72);
    const name = await page.locator(".nav-logo-text .zh").boundingBox();
    expect(name!.height).toBeLessThan(26);
    const switches = page.locator("nav.nav [data-lang-switch]:visible");
    await expect(switches).toHaveCount(1);
    await expect(switches).toHaveText("EN");
  });
});
