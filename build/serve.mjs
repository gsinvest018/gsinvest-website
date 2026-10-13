// Minimal static file server for dist/ — shared by prerender, tests and Lighthouse.
// Usage: node build/serve.mjs <dir> <port>
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

async function resolveFile(root, urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  let file = path.join(root, clean);
  if (!file.startsWith(root)) return null;
  try {
    const s = await stat(file);
    if (s.isDirectory()) file = path.join(file, "index.html");
    await stat(file);
    return file;
  } catch {
    return null;
  }
}

export function startServer(dir, port = 0) {
  const root = path.resolve(dir);
  const server = http.createServer(async (req, res) => {
    const file = await resolveFile(root, req.url);
    if (!file) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("Not found");
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, {
      "content-type": TYPES[path.extname(file)] || "application/octet-stream",
      "cache-control": "no-cache",
    });
    res.end(body);
  });
  return new Promise((resolve) => {
    server.listen(port, "127.0.0.1", () => {
      const { port: actual } = server.address();
      resolve({ server, url: `http://127.0.0.1:${actual}` });
    });
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [dir = "dist", port = "4173"] = process.argv.slice(2);
  const { url } = await startServer(dir, Number(port));
  console.log(`Serving ${dir} at ${url}`);
}
