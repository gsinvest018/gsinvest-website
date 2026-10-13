// Raster favicons rendered from src/favicon.svg, so every format stays identical
// to the SVG mark: PNGs for browsers and Google, a multi-size favicon.ico for
// crawlers that only try /favicon.ico, and a 512px logo for structured data.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PNGS = {
  "favicon-48.png": 48,
  "favicon-96.png": 96,
  "favicon-192.png": 192,
  "apple-touch-icon.png": 180,
  "logo-512.png": 512,
};
const ICO_SIZES = [16, 32, 48];

const render = (svg, size) => sharp(svg, { density: 72 * Math.ceil(size / 64) * 2 }).resize(size, size).png().toBuffer();

// ICO container holding PNG-encoded images (supported by all current browsers).
function encodeIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries = [];
  let offset = 6 + 16 * images.length;
  for (const { size, data } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4); // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    entries.push(e);
    offset += data.length;
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

export async function buildIcons(svgPath, outDir) {
  const svg = await readFile(svgPath);
  for (const [file, size] of Object.entries(PNGS)) {
    await writeFile(path.join(outDir, file), await render(svg, size));
  }
  const ico = await Promise.all(ICO_SIZES.map(async (size) => ({ size, data: await render(svg, size) })));
  await writeFile(path.join(outDir, "favicon.ico"), encodeIco(ico));
}
