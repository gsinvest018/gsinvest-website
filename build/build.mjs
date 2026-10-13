// Build pipeline: src/ -> dist/
//   1. copy static assets and vendor libraries, encode responsive images
//   2. minify the application bundle
//   3. write the HTML shell for each locale
//   4. prerender each locale into its shell and add SEO <head> tags
//   5. write robots.txt, sitemap.xml and llms.txt
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";
import { buildImages } from "./images.mjs";
import { prerender } from "./prerender.mjs";
import { llmsTxt, renderHead, robotsTxt, sitemapXml } from "./seo.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");

const VENDOR = {
  "react.production.min.js": "node_modules/react/umd/react.production.min.js",
  "react-dom.production.min.js": "node_modules/react-dom/umd/react-dom.production.min.js",
  "three.min.js": "node_modules/three/build/three.min.js",
};

async function copyAssets() {
  await cp(path.join(SRC, "static"), DIST, { recursive: true });
  await cp(path.join(SRC, "favicon.svg"), path.join(DIST, "favicon.svg"));
  await mkdir(path.join(DIST, "vendor"), { recursive: true });
  for (const [name, from] of Object.entries(VENDOR)) {
    await cp(path.join(ROOT, from), path.join(DIST, "vendor", name));
  }
}

async function bundleApp() {
  await esbuild.build({
    entryPoints: [path.join(SRC, "app.prod.js")],
    outfile: path.join(DIST, "app.js"),
    bundle: false,
    minify: true,
    target: "es2019",
    charset: "utf8",
    legalComments: "none",
  });
}

// Every character the site can display: printable ASCII plus all non-ASCII
// characters in the app source (which holds all copy for both locales).
async function siteCharacters() {
  const source = await readFile(path.join(SRC, "app.prod.js"), "utf8");
  const chars = new Set();
  for (let c = 0x20; c < 0x7f; c++) chars.add(String.fromCharCode(c));
  for (const ch of source) if (ch.codePointAt(0) > 0x7f) chars.add(ch);
  return [...chars].sort().join("");
}

async function writeShells() {
  const text = encodeURIComponent(await siteCharacters());
  const html = (await readFile(path.join(SRC, "index.html"), "utf8")).replace(
    /(<link href="[^"]*)("[^>]*data-subset-fonts)/g,
    `$1&amp;text=${text}$2`,
  );
  await writeFile(path.join(DIST, "index.html"), html);
  await mkdir(path.join(DIST, "en"), { recursive: true });
  await writeFile(path.join(DIST, "en", "index.html"), html);
}

export async function build() {
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });
  await copyAssets();
  await buildImages(
    path.join(SRC, "data/images"),
    path.join(DIST, "data/images"),
    path.join(ROOT, "node_modules/.cache/images"),
  );
  await bundleApp();
  await writeShells();
  await prerender(DIST, {
    transformHtml: (html, locale) => html.replace(/<title>[^<]*<\/title>/, renderHead(locale.key)),
  });
  await writeSeoFiles();
}

async function writeSeoFiles() {
  const today = new Date().toISOString().slice(0, 10);
  await writeFile(path.join(DIST, "robots.txt"), robotsTxt());
  await writeFile(path.join(DIST, "sitemap.xml"), sitemapXml(today));
  await writeFile(path.join(DIST, "llms.txt"), llmsTxt());
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const t0 = Date.now();
  await build();
  console.log(`Built dist/ in ${Date.now() - t0} ms`);
}
