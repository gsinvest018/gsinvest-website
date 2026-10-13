import { test, expect } from "@playwright/test";

const SPACE_IMAGE = /\/data\/images\/(office_build|workspace)-/;

test.describe("desktop paged mode", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("space images load only once the space page is shown", async ({ page }) => {
    const requested: string[] = [];
    page.on("request", (r) => {
      if (SPACE_IMAGE.test(r.url())) requested.push(r.url());
    });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(requested).toEqual([]);

    await page.goto("/#space");
    await expect(page.locator(".page.active section#space")).toHaveCount(1);
    await expect.poll(() => requested.length).toBeGreaterThan(0);
    expect(requested.every((u) => /\.(avif|webp)$/.test(u))).toBe(true);
  });
});

test("space images have alt text and intrinsic size", async ({ page }) => {
  await page.goto("/");
  const imgs = page.locator("section#space img");
  await expect(imgs).toHaveCount(2);
  for (const img of await imgs.all()) {
    expect((await img.getAttribute("alt"))?.length).toBeGreaterThan(1);
    expect(Number(await img.getAttribute("width"))).toBeGreaterThan(0);
    expect(Number(await img.getAttribute("height"))).toBeGreaterThan(0);
    await expect(img).toHaveAttribute("loading", "lazy");
  }
});
