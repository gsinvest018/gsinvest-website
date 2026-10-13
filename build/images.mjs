// Responsive image variants: src/data/images/*.png -> dist/data/images/{name}-{w}.{avif,webp,jpg}
// Widths must match IMAGE_WIDTHS in src/app.prod.js. Encoded files are cached in
// node_modules/.cache/images and reused while the source file is unchanged.
import { createHash } from "node:crypto";
import { cp, mkdir, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export const IMAGE_WIDTHS = [480, 800, 1024];
const FORMATS = {
  avif: (img) => img.avif({ quality: 50, effort: 6 }),
  webp: (img) => img.webp({ quality: 72 }),
  jpg: (img) => img.jpeg({ quality: 78, mozjpeg: true, progressive: true }),
};

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

export async function buildImages(srcDir, outDir, cacheDir) {
  await mkdir(outDir, { recursive: true });
  const files = (await readdir(srcDir)).filter((f) => /\.(png|jpe?g)$/i.test(f));
  for (const file of files) {
    const input = await readFile(path.join(srcDir, file));
    const hash = createHash("sha1").update(input).digest("hex").slice(0, 12);
    const name = path.parse(file).name;
    const cache = path.join(cacheDir, `${name}-${hash}`);
    await mkdir(cache, { recursive: true });
    for (const width of IMAGE_WIDTHS) {
      for (const [ext, encode] of Object.entries(FORMATS)) {
        // JPEG is only the fallback for browsers without AVIF/WebP: one size is enough.
        if (ext === "jpg" && width !== IMAGE_WIDTHS.at(-1)) continue;
        const out = `${name}-${width}.${ext}`;
        if (!(await exists(path.join(cache, out)))) {
          await encode(sharp(input).resize({ width, withoutEnlargement: true })).toFile(path.join(cache, out));
        }
        await cp(path.join(cache, out), path.join(outDir, out));
      }
    }
  }
}
