// Tells IndexNow-enabled search engines (Bing and others) that the site's
// pages changed. Run after a production deploy: node build/indexnow.mjs
import { INDEXNOW_KEY, LOCALE_META, SITE_URL } from "./seo.config.mjs";

const host = new URL(SITE_URL).host;
const keyLocation = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const urlList = Object.values(LOCALE_META).map((m) => SITE_URL + m.path);

// The key file must be live before submitting; Pages can take a moment to serve a new deploy.
async function waitForKey(attempts = 10) {
  for (let i = 0; i < attempts; i++) {
    const res = await fetch(`${keyLocation}?t=${Date.now()}`).catch(() => null);
    if (res?.ok && (await res.text()).trim() === INDEXNOW_KEY) return;
    await new Promise((r) => setTimeout(r, 6000));
  }
  throw new Error(`IndexNow key file not served at ${keyLocation}`);
}

await waitForKey();
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation, urlList }),
});
// 200 = accepted, 202 = accepted and key validation pending.
if (res.status !== 200 && res.status !== 202) {
  throw new Error(`IndexNow submission failed: HTTP ${res.status} ${await res.text()}`);
}
console.log(`IndexNow: submitted ${urlList.length} URLs (HTTP ${res.status})`);
