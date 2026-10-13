// Build pipeline: src/ -> dist/
//   1. copy static assets and vendor libraries
//   2. minify the application bundle
//   3. write the HTML shell for each locale
//   4. prerender each locale into its shell
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";
import { prerender } from "./prerender.mjs";

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
  await cp(path.join(SRC, "data"), path.join(DIST, "data"), { recursive: true });
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

async function writeShells() {
  const html = await readFile(path.join(SRC, "index.html"), "utf8");
  await writeFile(path.join(DIST, "index.html"), html);
  await mkdir(path.join(DIST, "en"), { recursive: true });
  await writeFile(path.join(DIST, "en", "index.html"), html);
}

export async function build() {
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });
  await copyAssets();
  await bundleApp();
  await writeShells();
  await prerender(DIST);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const t0 = Date.now();
  await build();
  console.log(`Built dist/ in ${Date.now() - t0} ms`);
}
