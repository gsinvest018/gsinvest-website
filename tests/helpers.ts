import { readFileSync } from "node:fs";
import path from "node:path";
import type { Browser, Page } from "@playwright/test";

export const LOCALES = [
  { key: "zh", file: "dist/index.html", url: "/" },
  { key: "en", file: "dist/en/index.html", url: "/en/" },
] as const;

export const SECTION_IDS = ["top", "about", "services", "philosophy", "team", "space", "milestones", "contact"];

export const readDist = (file: string) => readFileSync(path.resolve(file), "utf8");

// Load a built HTML file with JavaScript disabled, i.e. what a non-rendering crawler sees.
export async function openStatic(browser: Browser, file: string): Promise<Page> {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.setContent(readDist(file), { waitUntil: "domcontentloaded" });
  return page;
}
