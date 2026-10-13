# gsinvest.com.tw UI 優化與 SEO/GEO 設計

- 日期：2026-10-13
- Repo：`gsinvest018/gsinvest-website`（本機 `D:\Deploy\GS_Official\site-deploy`）
- 分支：`feat/ui-seo`
- 狀態：設計已確認，待撰寫實作計畫

## 0. 背景與目標

網站是單頁、8 個整頁切換區塊的 React 應用（React 18 UMD + Three.js r128），由 GitHub Pages 從 `main` 根目錄直接部署。原始 `.jsx` 與 `build/build.js` 已遺失，**以現有 `app.prod.js` 作為唯一原始碼直接修改**。

目前問題：

- HTML 只有空的 `#root`，不執行 JS 的爬蟲（Bing、社群預覽、多數 AI 爬蟲）看到空白頁；無 description、OG、結構化資料、`robots.txt`、`sitemap.xml`。
- 整頁切換使整份文件固定為一個視窗高，非首屏內容難以被理解。
- 兩張 PNG（2.4 MB + 640 KB）在進站時即下載，但只用於第 6 頁。
- 手機版 header 擠壓、頁碼與指示器壓到內容、聯絡頁橫向溢出、巢狀捲動誤觸換頁。

目標：讓兩種語言的完整內容在 HTML 中直接可見並可被搜尋與 AI 引用，同時達到第 3 節的效能指標，並修正手機版排版。

非目標：

- 不改品牌配色、字體風格、文案語意、桌機整體版型。
- 不新增聯絡表單（現有表單文案保留不渲染）。
- 不同步 `D:\Deploy\GS_Official` 的 Docker 版本；若其對外另有網域，日後另行處理 canonical。

## 1. 架構與建置流程

### 1.1 目錄結構

```
src/
  index.html          模板（現行 index.html，#root 為空）
  app.prod.js         直接修改的應用程式碼
  favicon.svg
  data/images/        原始圖片
  static/             原樣複製的檔案（CNAME、.nojekyll、og-image 等）
build/
  images.mjs          圖片轉檔
  prerender.mjs       預先渲染並產生 SEO 檔案
  seo.config.mjs      各語言 head 內容、JSON-LD 與 llms.txt 來源資料
tests/                Playwright 測試
package.json          devDependencies：playwright、sharp、esbuild、@lhci/cli
.github/workflows/pages.yml
dist/                 建置產出（gitignore）
```

### 1.2 建置步驟

push 到 `main` 時，`pages.yml` 依序執行：

1. `npm ci`
2. `node build/images.mjs`：產生響應式圖片至 `dist/data/images/`。
3. 以 esbuild 壓縮 `src/app.prod.js` 至 `dist/app.js`；從 `node_modules` 複製 React、ReactDOM、Three.js 至 `dist/vendor/`。
4. `node build/prerender.mjs`：
   - 以本機靜態伺服器提供 `dist/`，用 Playwright Chromium 分別載入 `/` 與 `/en/`。
   - 等待應用發出 ready 訊號（`window.__appReady = true`）後擷取 `#root` 的 `innerHTML`。
   - 依語言寫入 `<head>`（見第 2 節），輸出 `dist/index.html` 與 `dist/en/index.html`。
   - 產生 `dist/robots.txt`、`dist/sitemap.xml`、`dist/llms.txt`。
5. 以 `actions/upload-pages-artifact` 與 `actions/deploy-pages` 部署 `dist/`。

PR 上執行步驟 1–4 與第 5 節的檢查，但不部署。

### 1.3 執行期行為

- HTML 已含完整內容，移除 boot splash。
- React 以 `createRoot` 取代預渲染內容（不用 hydrate，避免不一致警告）；兩者畫面相同。
- 語言由網址決定：`/` 為繁中、`/en/` 為英文。切換時更新畫面並以 `history.pushState` 改網址。
- 擷取前移除 Three.js 的 `<canvas>`，HTML 中不含任何 WebGL 狀態。

### 1.4 需使用者確認的設定變更

將 repo 的 Pages 來源從「Deploy from a branch」改為「GitHub Actions」。於合併時執行，執行前再次確認。

## 2. SEO 與 GEO

### 2.1 各語言 `<head>`

| 項目 | 繁中 `/` | 英文 `/en/` |
|---|---|---|
| `title` | GS 創世紀國際投資｜台中 AI 量化交易金融科技公司 | Genesis International Capital — AI Quant Trading, Taichung |
| `meta description` | 由現有 hero 與 about 文案濃縮，約 120 字 | 對應英文 |
| `canonical` | `https://gsinvest.com.tw/` | `https://gsinvest.com.tw/en/` |
| `hreflang` | `zh-Hant`、`en`、`x-default`（指向 `/`） | 同左 |
| Open Graph / Twitter Card | 1200×630 `og-image.png`（黑金 GS 標誌） | 同一張 |
| `html lang` | `zh-Hant` | `en` |

### 2.2 結構化資料（JSON-LD）

- `FinancialService`（`Organization` 子類型）：
  - `name`：創世紀國際投資股份有限公司；`alternateName`：GS Genesis、Genesis International Capital
  - `url`、`logo`
  - `address`：台中市北屯區后庄路 41 號 10 樓-41
  - `telephone`：+886-4-2299-1928；`email`：gsinvest@gsinvest.com.tw
  - `openingHoursSpecification`：週一至週四 09:00–17:30
  - `foundingDate`：2025
- `WebSite`：`name`、`url`、`inLanguage`。

資料集中於 `build/seo.config.mjs`，與 `app.prod.js` 的聯絡資訊比對一致（第 5 節檢查）。

### 2.3 語意化結構（修改 `app.prod.js`）

- 每個語言版本只有一個 `<h1>`（hero 主標語）。
- 8 個區塊各為 `<section id>` 並以 `<h2>` 開頭；導覽為 `<nav>`、頁尾為 `<footer>`。
- 導覽項目改為真正的錨點連結（`<a href="#about">`），點擊仍執行換頁。
- 所有圖片提供有意義的 `alt`。

### 2.4 GEO

- `llms.txt`：純文字條列公司身分、業務、地點、聯絡方式，中英各一段。
- 每個區塊開頭保留一句可獨立成立的事實陳述；僅微調現有文案，不改語意。
- `robots.txt`：允許所有爬蟲，明列允許 GPTBot、ClaudeBot、PerplexityBot、Google-Extended；附 sitemap 網址。

### 2.5 頁尾清理

- 移除無目標的連結：「條款與條件」「隱私權政策」「Cookie 設定」「風險揭露」。
- 改在頁尾直接顯示現有 `disclaimer` 風險揭露文字。

## 3. 效能

| 項目 | 做法 |
|---|---|
| 圖片 | `sharp` 轉 AVIF、WebP，寬度 640/1024/1600；`<picture>` + `srcset` + `sizes`，標明 `width`/`height`，一律 `loading="lazy"`。桌機整頁模式以 CSS 將非當前頁的 `<picture>` 設為 `display:none`，因此預渲染 HTML 與 React 接手後都只在切到該頁時才下載；手機連續捲動則由原生 lazy loading 處理。`src` 保留在 HTML 中供爬蟲讀取。 |
| JS | React、ReactDOM、Three.js 改為同網域 `dist/vendor/`；`app.js` 經 esbuild 壓縮。 |
| Three.js | 首屏內容繪製後於 `requestIdleCallback` 初始化；手機 `devicePixelRatio` 上限 1.5、粒子數減半；非當前頁的場景暫停 render loop；`prefers-reduced-motion` 時不初始化，改顯示靜態圖。 |
| 字型 | 只保留實際使用的字重（預估 18 → 約 8）。 |
| 移除 | Tweaks 面板與 `useTweaks` 相關程式碼；Intro「LOADING」開場動畫（改為內容淡入）；boot splash。 |

目標（Lighthouse 手機模式）：

- Performance ≥ 90、SEO = 100、Accessibility ≥ 95
- LCP < 2.5 s、CLS < 0.1
- 首次載入總傳輸量 < 600 KB（含字型）

## 4. 手機版排版與視覺

| 範圍 | 做法 |
|---|---|
| 換頁模式 | 寬度 ≥ 1024px 保留整頁切換；以下改為連續捲動，隱藏頁碼與直條指示器，由 header 選單跳至各區塊。 |
| 網址 | 換頁或捲動時以 `history.replaceState` 更新 hash（如 `#services`）；以 hash 進站時直接顯示該區塊。 |
| Header | 手機只顯示 GS 標誌與「創世紀」；語言切換改為單一「EN / 中」按鈕。 |
| 版面 | 修正聯絡頁橫向溢出；發展藍圖時間軸在手機改為單欄；Three.js 物件在手機縮小、降低透明度、上移，不與文字重疊。 |
| 聯絡資訊 | 電話 `tel:`、Email `mailto:`、地址連到 Google 地圖。 |
| 對比 | `--ink-mute` 提亮至與 `--bg` 對比 ≥ 4.5:1。 |
| 觸控 | 可點擊元素至少 44×44px。 |
| 減少動態 | `prefers-reduced-motion` 時關閉換頁轉場與 3D 動畫。 |

## 5. 驗證、上線與回復

### 5.1 開發方式

在 `feat/ui-seo` 開發，一個 PR 合入 `main`，commit 分四組：

1. 目錄重整與建置流程
2. SEO 與 GEO
3. 效能
4. 手機版與視覺

### 5.2 自動檢查（PR 必過）

| 檢查 | 內容 |
|---|---|
| 預渲染結果 | 兩份 HTML 各有 1 個 `<h1>`、title、description、canonical、hreflang；JSON-LD 可解析且聯絡資訊與 `app.prod.js` 一致；8 個區塊 id 齊全；無 Intro/boot splash 殘留 |
| 連結 | 無 `href="#"` 或空連結；站內錨點皆存在 |
| Playwright | 桌機：鍵盤、滾輪換頁與 hash 更新。手機 375px：連續捲動、`scrollWidth ≤ innerWidth`。語言切換後網址正確。console 無錯誤 |
| Lighthouse CI | 第 3 節目標值；每個網址跑 3 次取中位數，降低 CI 機器波動影響 |

### 5.3 人工檢查

PR 附改版前後截圖：桌機與手機各 8 個區塊。

### 5.4 上線步驟

1. 使用者確認 PR 後合併。
2. 經使用者確認後，將 Pages 來源改為 GitHub Actions。
3. 上線驗證：Google 複合式搜尋結果測試（JSON-LD）、LINE 與 Facebook 分享預覽（OG）、正式站 Lighthouse。
4. 使用者自行操作：Google Search Console 驗證網域並提交 sitemap；視需要於 Bing Webmaster Tools 進行相同操作。

### 5.5 回復

revert 合併 commit，並將 Pages 來源改回「Deploy from a branch」。
