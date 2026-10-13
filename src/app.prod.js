/* GS Genesis — application source.
   This file is the source of truth (the original JSX sources are gone).
   build/build.mjs minifies it to dist/app.js; edit here directly. */

/* ===== i18n.jsx ===== */
(function () {
const I18N = {
  zh: {
    locale: "zh",
    nav: {
      about: "關於我們",
      services: "業務範圍",
      philosophy: "投資哲學",
      team: "經營團隊",
      space: "辦公環境",
      milestones: "發展藍圖",
      contact: "聯絡我們",
      menu: "選單",
      consult: "預約諮詢"
    },
    hero: {
      eyebrow: "GS Genesis · Est. 2025",
      title1: "穿越市場循環",
      title2: "創造世代資本",
      en: "Where Discipline Meets Conviction.",
      sub: "Genesis International Capital 是 2025 年成立於台中的金融科技新創，以 AI 驅動量化交易為核心。我們正在打造自主研發的交易系統，並堅持一個標準——所有策略，都必須以自有資金在實盤中證明自己。",
      cta1: "了解我們",
      cta2: "預約諮詢",
      ticker: ["AI 量化交易 · AI QUANT", "自營交易 · PROP TRADING", "AI 應用開發 · AI SOLUTIONS", "風險控制 · RISK MANAGEMENT"],
      scroll: "向下探索 SCROLL"
    },
    about: {
      num: "01 / ABOUT",
      title: "源於信念，",
      titleEm: "Genesis.",
      titleSub: "成於紀律。",
      lead: "「創世紀」之名，源於我們對於資本市場的初心——在波動與不確定之中，建立屬於下一個世代的財富根基。",
      body1: "GS 創世紀國際投資（Genesis International Capital）是 2025 年成立的金融科技新創，總部位於台中，以 AI 驅動量化交易為核心。我們正在打造自主研發的交易系統，並堅持以內部實盤驗證——真實績效，是技術實力的唯一標準。",
      body2: "從自營交易出發，我們正積極訓練 AI 量化模型實戰，並規劃兩大事業線：AI 整合解決方案與 AI 應用產品，持續推進 AI 技術在金融領域的商業落地。",
      stats: [{
        num: "2025",
        unit: "年",
        label: "成立於台中"
      }, {
        num: "2,000",
        unit: "萬",
        label: "實收資本額"
      }, {
        num: "11",
        unit: "+",
        label: "團隊持續擴編"
      }, {
        num: "24",
        unit: "/7",
        label: "全球市場監控"
      }]
    },
    services: {
      num: "02 / SERVICES",
      title: "業務範圍",
      titleEn: "What We Trade.",
      lead: "從股票、期貨與海外股票的自營交易，到 AI 應用軟體開發與顧問服務，GS 創世紀以 AI 為核心，覆蓋交易、軟體與顧問三大領域。",
      items: [{
        en: "Proprietary Trading",
        zh: "自營交易",
        desc: "以公司自有資金進行股票、期貨與海外股票自營交易，搭配嚴謹的風險控制，以內部實盤驗證為交易準則。"
      }, {
        en: "AI Quant Strategies",
        zh: "AI 量化策略",
        desc: "正在自主研發 AI 量化模型與輔助交易軟體，持續以實戰訓練模型——真實績效是技術實力的唯一標準。"
      }, {
        en: "AI Solutions & Applications",
        zh: "AI 整合解決方案",
        desc: "開發各類 AI 應用軟體、AI 程式撰寫與輔助程式工具，推進 AI 技術在金融領域的商業落地。"
      }, {
        en: "Financial Advisory",
        zh: "金融顧問",
        desc: "提供金融與企業管理顧問服務，協助客戶導入量化方法與 AI 工具，建立可驗證的決策流程。"
      }]
    },
    philosophy: {
      num: "03 / PHILOSOPHY",
      title: "投資哲學",
      titleEn: "How We Think.",
      quote1: "以 AI 驅動交易，",
      quote2: "以實盤驗證實力，",
      quote3: "以人才創造未來。",
      pillars: [{
        en: "AI-Native",
        zh: "AI 原生",
        desc: "程式由 AI Agent 撰寫；擴充、優化、Review 與成本控管，是新時代軟體工程的核心能力。"
      }, {
        en: "Proven Live",
        zh: "實盤驗證",
        desc: "所有策略與系統，都必須以自有資金通過實盤驗證——真實績效是技術實力的唯一標準。"
      }, {
        en: "People First",
        zh: "以人為本",
        desc: "公司人少、層級扁平，尊重成員的自我意志，提供最好的環境與最大的發揮空間。"
      }]
    },
    team: {
      num: "04 / TEAM",
      title: "經營團隊",
      titleEn: "The Architects.",
      lead: "我們是一支持續成長的新創團隊，層級扁平、以人為本，由 AI、交易與策略三個核心部門組成。我們正在尋找兼具技術深度與市場敏銳度的優秀人才——歡迎極客與黑客加入，共同打造下一代智慧金融基礎設施。",
      members: [{
        init: "A",
        name: "AI 部門",
        role: "AI Lab",
        bio: "AI Agent 驅動的軟體開發、模型訓練，與各類 AI 應用產品的打造。"
      }, {
        init: "T",
        name: "交易部門",
        role: "Trading Desk",
        bio: "股票、期貨與海外股票自營交易，於嚴謹風控下實盤執行。"
      }, {
        init: "S",
        name: "策略部門",
        role: "Strategy Research",
        bio: "量化策略研究與回測，為交易系統提供可驗證的決策邏輯。"
      }]
    },
    space: {
      num: "05 / SPACE",
      title: "辦公環境",
      titleEn: "Our Space.",
      lead: "位於台中的辦公室，是我們交易、研發與思考的所在。一面落地窗收進城市夜景，一張桌、兩個螢幕——策略，就在這裡誕生。",
      items: [{
        img: "/data/images/office_build",
        size: [1024, 956],
        label: "Future HQ · 示意圖",
        title: "未來總部規劃",
        desc: "規劃興建中的自有大樓——示意圖,非現址。"
      }, {
        img: "/data/images/workspace",
        size: [1024, 1024],
        label: "The Desk",
        title: "交易與研發桌",
        desc: "雙螢幕、實盤環境，AI 與人協作的第一線。"
      }]
    },
    milestones: {
      num: "06 / ROADMAP",
      title: "發展藍圖",
      titleEn: "The Road Ahead.",
      lead: "2025 年，我們從一張交易桌出發。這是我們正在走、以及接下來要走的路。",
      items: [{
        year: "2025",
        title: "公司成立",
        desc: "GS 創世紀國際投資於台中成立，以自營交易為核心業務啟動運營。"
      }, {
        year: "2025",
        title: "AI 原生開發",
        desc: "從第一天起，軟體即由 AI Agent 撰寫——擴充、優化與 Review 是工程核心。"
      }, {
        year: "2026",
        title: "模型實戰訓練",
        desc: "AI 量化模型持續以實盤訓練，以自有資金累積經過驗證的真實績效。"
      }, {
        year: "2026",
        title: "交易系統自主化",
        desc: "完成自主研發交易系統建置，覆蓋股票、期貨與海外股票市場。"
      }, {
        year: "2027",
        title: "AI 整合解決方案",
        desc: "將內部驗證的 AI 能力產品化，推出企業級整合解決方案。"
      }, {
        year: "2027+",
        title: "AI 應用產品線",
        desc: "拓展各類 AI 應用產品，打造下一代智慧金融基礎設施。"
      }]
    },
    contact: {
      num: "07 / CONTACT",
      title: "預約",
      titleEm: "對話",
      titleEn: "Begin a Conversation.",
      lead: "若您是潛在合作夥伴或希望深入了解 GS 創世紀的策略框架，歡迎透過以下方式直接與我們聯繫。",
      info: [{
        label: "Address",
        val: "台中市北屯區后庄路 41 號 10 樓-41",
        href: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%8C%97%E5%B1%AF%E5%8D%80%E5%90%8E%E5%BA%84%E8%B7%AF41%E8%99%9F"
      }, {
        label: "Contact",
        val: "Joker游"
      }, {
        label: "Phone",
        val: "04-2299-1928",
        href: "tel:+886422991928"
      }, {
        label: "Email",
        val: "gsinvest@gsinvest.com.tw",
        href: "mailto:gsinvest@gsinvest.com.tw"
      }, {
        label: "Hours",
        val: "週一至週四  09:00 – 17:30 (GMT+8)"
      }]
    },
    footer: {
      copy: "© 2026 GS Genesis International Investment Co., Ltd. All rights reserved.",
      built: "台中 · 台灣"
    },
    disclaimer: "本網站所載內容僅供一般資訊用途，不構成任何投資建議、招攬或要約。投資涉及風險，過去績效不代表未來表現。做出任何投資決策前，請諮詢合格專業顧問。"
  },
  en: {
    locale: "en",
    nav: {
      about: "About",
      services: "Services",
      philosophy: "Philosophy",
      team: "Team",
      space: "Our Space",
      milestones: "Roadmap",
      contact: "Contact",
      menu: "Menu",
      consult: "Book a Call"
    },
    hero: {
      eyebrow: "GS Genesis · Est. 2025",
      title1: "Compounding Across",
      title2: "Market Cycles.",
      en: "Where Discipline Meets Conviction.",
      sub: "Genesis International Capital is a fintech startup founded in Taichung in 2025, built around AI-driven quantitative trading. We are building our own trading systems to one standard — every strategy must prove itself with our own capital in live markets.",
      cta1: "Discover Genesis",
      cta2: "Book a Call",
      ticker: ["AI QUANT TRADING", "PROPRIETARY TRADING", "AI SOLUTIONS", "RISK MANAGEMENT"],
      scroll: "SCROLL TO EXPLORE"
    },
    about: {
      num: "01 / ABOUT",
      title: "Built on conviction.",
      titleEm: "Genesis.",
      titleSub: "Run with discipline.",
      lead: "We named the firm Genesis because every disciplined return compounds from one principled decision — the origin of generational capital.",
      body1: "GS Genesis (Genesis International Capital) is a fintech startup founded in Taichung in 2025, built around AI-driven quantitative trading. We are building our trading systems in-house, to one standard: real performance, proven with our own capital in live markets.",
      body2: "Starting from a proprietary trading core, we are training our AI quant models in live markets and planning two business lines — AI integration solutions and AI application products — to bring AI to commercial reality in finance.",
      stats: [{
        num: "2025",
        unit: "",
        label: "Founded in Taichung"
      }, {
        num: "20",
        unit: "M",
        label: "Paid-in capital (TWD)"
      }, {
        num: "11",
        unit: "+",
        label: "Team — and growing"
      }, {
        num: "24",
        unit: "/7",
        label: "Global market coverage"
      }]
    },
    services: {
      num: "02 / SERVICES",
      title: "What we trade.",
      titleEn: "Services.",
      lead: "From proprietary trading in equities, futures and overseas stocks to AI software and advisory, Genesis builds everything around one core: AI.",
      items: [{
        en: "Proprietary Trading",
        zh: "Prop Desk",
        desc: "Trading the firm's own capital across equities, futures and overseas stocks — under strict risk control, with live validation as the standard for every strategy."
      }, {
        en: "AI Quant Strategies",
        zh: "AI Quant",
        desc: "Developing our own AI quant models and trading-assist software, trained in live markets — real performance is the only standard of technical strength."
      }, {
        en: "AI Solutions & Applications",
        zh: "AI Apps",
        desc: "AI application software, AI-assisted programming and developer tooling — bringing AI to commercial reality in finance."
      }, {
        en: "Financial Advisory",
        zh: "Advisory",
        desc: "Financial and management consulting that helps clients adopt quantitative methods and AI tools with auditable decision processes."
      }]
    },
    philosophy: {
      num: "03 / PHILOSOPHY",
      title: "How we think.",
      titleEn: "Philosophy.",
      quote1: "AI drives the trade.",
      quote2: "Live markets prove it.",
      quote3: "People build the future.",
      pillars: [{
        en: "AI-Native",
        zh: "AI",
        desc: "Code is written by AI agents; scaling, optimization, review and token economics are the new core of software engineering."
      }, {
        en: "Proven Live",
        zh: "Live",
        desc: "Every strategy and system must prove itself with our own capital in live markets — real performance is the only proof."
      }, {
        en: "People First",
        zh: "People",
        desc: "A small team with a flat hierarchy: we respect individual will and give you the best environment and the widest room to create."
      }]
    },
    team: {
      num: "04 / TEAM",
      title: "The architects.",
      titleEn: "Team.",
      lead: "We are a growing startup with a flat hierarchy, built around three core teams: AI, trading and strategy. We are looking for people with both technical depth and market instinct — geeks and hackers welcome — to build the next generation of intelligent financial infrastructure.",
      members: [{
        init: "A",
        name: "AI Lab",
        role: "Artificial Intelligence",
        bio: "AI-agent-driven development, model training and AI application products."
      }, {
        init: "T",
        name: "Trading Desk",
        role: "Proprietary Trading",
        bio: "Equities, futures and overseas stocks — live execution under strict risk control."
      }, {
        init: "S",
        name: "Strategy Research",
        role: "Quant Strategy",
        bio: "Quantitative research and backtesting that feed verifiable logic into the trading systems."
      }]
    },
    space: {
      num: "05 / SPACE",
      title: "Our space.",
      titleEn: "Our Space.",
      lead: "Our Taichung office is where we trade, build and think. A floor-to-ceiling window frames the city at night; one desk, two monitors — this is where strategy is born.",
      items: [{
        img: "/data/images/office_build",
        size: [1024, 956],
        label: "Future HQ · Concept",
        title: "Future Headquarters",
        desc: "A planned building, shown as a concept rendering — not our current address."
      }, {
        img: "/data/images/workspace",
        size: [1024, 1024],
        label: "The Desk",
        title: "Trading & Research",
        desc: "Dual monitors and a live-market setup — the front line of human-AI collaboration."
      }]
    },
    milestones: {
      num: "06 / ROADMAP",
      title: "The road ahead.",
      titleEn: "Roadmap.",
      lead: "Founded in 2025 — one trading desk, and a clear path forward.",
      items: [{
        year: "2025",
        title: "Firm founded",
        desc: "Genesis is established in Taichung with proprietary trading as the core business."
      }, {
        year: "2025",
        title: "AI-native from day one",
        desc: "Software is written by AI agents from the start — scaling, optimization and review are the engineering core."
      }, {
        year: "2026",
        title: "Models go live",
        desc: "AI quant models train in live markets, building a verified track record with our own capital."
      }, {
        year: "2026",
        title: "In-house systems",
        desc: "Self-developed trading systems cover equities, futures and overseas stock markets."
      }, {
        year: "2027",
        title: "AI solutions",
        desc: "Internally proven AI capabilities are productized into enterprise integration solutions."
      }, {
        year: "2027+",
        title: "AI product lines",
        desc: "AI application products expand — building the next generation of intelligent financial infrastructure."
      }]
    },
    contact: {
      num: "07 / CONTACT",
      title: "Begin a",
      titleEm: "conversation",
      titleEn: "Contact.",
      lead: "If you are a potential partner or would like to learn more about the Genesis framework, reach us directly through the channels below.",
      info: [{
        label: "Address",
        val: "10F.-41, No. 41, Houzhuang Rd.,\nBeitun Dist., Taichung, Taiwan",
        href: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%8C%97%E5%B1%AF%E5%8D%80%E5%90%8E%E5%BA%84%E8%B7%AF41%E8%99%9F"
      }, {
        label: "Contact",
        val: "Joker游"
      }, {
        label: "Phone",
        val: "+886 4 2299 1928",
        href: "tel:+886422991928"
      }, {
        label: "Email",
        val: "gsinvest@gsinvest.com.tw",
        href: "mailto:gsinvest@gsinvest.com.tw"
      }, {
        label: "Hours",
        val: "Mon – Thu  09:00 – 17:30 (GMT+8)"
      }]
    },
    footer: {
      copy: "© 2026 GS Genesis International Investment Co., Ltd. All rights reserved.",
      built: "Taichung · Taiwan"
    },
    disclaimer: "The contents of this website are for general information only and do not constitute investment advice, solicitation or offer of any kind. Investing involves risk; past performance is no guarantee of future results. Please consult a qualified professional before making any investment decision."
  }
};
window.I18N = I18N;
})();

/* ===== three-hero.jsx ===== */
(function () {
const {
  useEffect,
  useRef,
  useState
} = React;
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// Phones and tablets get a lighter scene: lower pixel ratio, fewer particles.
const COMPACT = window.matchMedia("(max-width: 1024px)").matches;
const MAX_PIXEL_RATIO = COMPACT ? 1.5 : 2;
const whenIdle = cb => window.requestIdleCallback ? window.requestIdleCallback(cb, {
  timeout: 1500
}) : setTimeout(cb, 200);

// Three.js is not referenced from the HTML: it is fetched once the page has
// loaded and the browser is idle, so it never competes with fonts or React.
let threePromise = null;
function loadThree() {
  if (!threePromise) {
    threePromise = new Promise((resolve, reject) => {
      if (typeof THREE !== "undefined") return resolve();
      const start = () => whenIdle(() => {
        const script = document.createElement("script");
        script.src = "/vendor/three.min.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
      if (document.readyState === "complete") start();else window.addEventListener("load", start, {
        once: true
      });
    });
  }
  return threePromise;
}

// True once THREE has loaded and the browser is idle again, so WebGL setup
// never competes with first paint. Stays false when reduced motion is requested.
function useThreeReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (REDUCED_MOTION) return;
    let cancelled = false;
    loadThree().then(() => whenIdle(() => {
      if (!cancelled) setReady(true);
    }), () => {});
    return () => {
      cancelled = true;
    };
  }, []);
  return ready;
}
function ThreeHero({
  goldColor = "#D4AF37",
  rotationSpeed = 1,
  particleDensity = 1,
  page = 0
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const pageRef = useRef(page);
  const speedRef = useRef(rotationSpeed);
  const threeReady = useThreeReady();
  useEffect(() => {
    pageRef.current = page;
  }, [page]);
  useEffect(() => {
    speedRef.current = rotationSpeed;
  }, [rotationSpeed]);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !threeReady) return;
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070707, 0.028);
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);
    const FIT_RADIUS = 6.4;
    const fitCamera = (w, h) => {
      const aspect = w / h;
      const vFov = camera.fov * Math.PI / 180;
      const distH = FIT_RADIUS / Math.tan(vFov / 2);
      const distW = FIT_RADIUS / (Math.tan(vFov / 2) * aspect);
      camera.position.z = Math.max(distH, distW, 11);
    };
    fitCamera(width, height);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);
    const ambient = new THREE.AmbientLight(0x1a1610, 0.3);
    scene.add(ambient);
    const hemi = new THREE.HemisphereLight(0xffd86b, 0x0a0a0a, 0.4);
    scene.add(hemi);
    const keyLight = new THREE.PointLight(0xffd86b, 3.5, 30);
    keyLight.position.set(6, 6, 8);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0xfff0c0, 1.4, 25);
    fillLight.position.set(-7, -2, 6);
    scene.add(fillLight);
    const rimLight = new THREE.PointLight(0xffb84a, 4, 20);
    rimLight.position.set(-3, 3, -8);
    scene.add(rimLight);
    const bottomLight = new THREE.PointLight(0xb8860b, 1.5, 20);
    bottomLight.position.set(2, -6, 4);
    scene.add(bottomLight);
    const goldHex = new THREE.Color(goldColor);
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: goldHex,
      metalness: 1.0,
      roughness: 0.18,
      emissive: new THREE.Color(0x2a1f08),
      emissiveIntensity: 0.3
    });
    const goldDarkMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x6b4f12),
      metalness: 1.0,
      roughness: 0.35
    });
    const group = new THREE.Group();
    scene.add(group);
    const coreGeom = new THREE.DodecahedronGeometry(1.8, 0);
    const core = new THREE.Mesh(coreGeom, goldMaterial);
    group.add(core);
    const edgesGeom = new THREE.EdgesGeometry(coreGeom);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xfff0a0,
      transparent: true,
      opacity: 0.4
    });
    const edges = new THREE.LineSegments(edgesGeom, edgesMat);
    core.add(edges);
    const orbiters = [];
    const orbiterGeom = new THREE.OctahedronGeometry(0.28, 0);
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(orbiterGeom, goldMaterial);
      const angle = i / 8 * Math.PI * 2;
      const radius = 3.2;
      m.position.set(Math.cos(angle) * radius, Math.sin(angle) * 0.5, Math.sin(angle) * radius);
      m.userData = {
        angle,
        radius,
        phase: i * 0.4
      };
      group.add(m);
      orbiters.push(m);
    }
    const ringGeom1 = new THREE.TorusGeometry(2.5, 0.025, 8, 128);
    const ring1 = new THREE.Mesh(ringGeom1, goldMaterial);
    ring1.rotation.x = Math.PI / 2.5;
    group.add(ring1);
    const ringGeom2 = new THREE.TorusGeometry(3.0, 0.02, 8, 128);
    const ring2 = new THREE.Mesh(ringGeom2, goldDarkMaterial);
    ring2.rotation.x = Math.PI / 3.5;
    ring2.rotation.z = Math.PI / 6;
    group.add(ring2);
    const ringGeom3 = new THREE.TorusGeometry(3.7, 0.012, 6, 128);
    const ring3 = new THREE.Mesh(ringGeom3, goldDarkMaterial);
    ring3.rotation.x = Math.PI / 2;
    ring3.rotation.y = Math.PI / 5;
    group.add(ring3);
    const particleCount = Math.floor((COMPACT ? 400 : 800) * particleDensity);
    const particlesGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const r = 4 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      scales[i] = Math.random();
    }
    particlesGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeom.setAttribute("scale", new THREE.BufferAttribute(scales, 1));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffd86b,
      size: 0.04,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const particles = new THREE.Points(particlesGeom, particleMaterial);
    scene.add(particles);
    const mouse = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0
    };
    const onMouseMove = e => {
      const rect = mount.getBoundingClientRect();
      mouse.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);
    let frameId = null;
    const clock = new THREE.Clock();
    const layoutFor = p => p === 0 ? {
      x: 2.6,
      y: 0.0,
      s: 1.0
    } : {
      x: 3.9,
      y: 0.7,
      s: 0.66
    };
    const initL = layoutFor(pageRef.current);
    const base = {
      x: initL.x,
      y: initL.y,
      s: initL.s
    };
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const speed = speedRef.current;
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      const target = layoutFor(pageRef.current);
      base.x += (target.x - base.x) * 0.045;
      base.y += (target.y - base.y) * 0.045;
      base.s += (target.s - base.s) * 0.045;
      group.rotation.y += 0.0024 * speed;
      group.rotation.x = mouse.y * 0.12;
      group.position.x = base.x + mouse.x * 0.15;
      group.position.y = base.y;
      group.scale.setScalar(base.s);
      core.rotation.x += 0.0035 * speed;
      core.rotation.y += 0.0025 * speed;
      orbiters.forEach((m, i) => {
        const ud = m.userData;
        const t = elapsed * 0.4 * speed + ud.phase;
        m.position.x = Math.cos(ud.angle + t * 0.3) * ud.radius;
        m.position.z = Math.sin(ud.angle + t * 0.3) * ud.radius;
        m.position.y = Math.sin(t + ud.phase) * 0.8;
        m.rotation.x += 0.01 * speed;
        m.rotation.y += 0.013 * speed;
      });
      ring1.rotation.z += 0.001 * speed;
      ring2.rotation.y += 0.0015 * speed;
      ring3.rotation.x += 0.0008 * speed;
      particles.rotation.y += 0.0004;
      const pPos = particles.geometry.attributes.position.array;
      for (let i = 1; i < pPos.length; i += 3) {
        pPos[i] += Math.sin(elapsed * 0.5 + i * 0.1) * 0.0008;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      fitCamera(w, h);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => onResize());
      ro.observe(mount);
    }
    const tA = setTimeout(onResize, 400);
    const tB = setTimeout(onResize, 1200);
    sceneRef.current = {
      scene,
      renderer,
      goldMaterial,
      edgesMat
    };
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (ro) ro.disconnect();
      clearTimeout(tA);
      clearTimeout(tB);
      renderer.dispose();
      coreGeom.dispose();
      edgesGeom.dispose();
      orbiterGeom.dispose();
      ringGeom1.dispose();
      ringGeom2.dispose();
      ringGeom3.dispose();
      particlesGeom.dispose();
      goldMaterial.dispose();
      goldDarkMaterial.dispose();
      particleMaterial.dispose();
      edgesMat.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [goldColor, particleDensity, threeReady]);
  return React.createElement("div", {
    ref: mountRef,
    id: "three-bg",
    className: threeReady ? "three-on" : ""
  });
}
function ThreePillar({
  shape = "octa",
  goldColor = "#D4AF37"
}) {
  const mountRef = useRef(null);
  const threeReady = useThreeReady();
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !threeReady) return;
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 5);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    const ambient = new THREE.AmbientLight(0x1a1610, 0.4);
    scene.add(ambient);
    const key = new THREE.PointLight(0xffd86b, 2.5, 15);
    key.position.set(3, 3, 4);
    scene.add(key);
    const fill = new THREE.PointLight(0xb8860b, 1.5, 15);
    fill.position.set(-3, -2, 3);
    scene.add(fill);
    const rim = new THREE.PointLight(0xffe680, 2, 12);
    rim.position.set(-1, 2, -3);
    scene.add(rim);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(goldColor),
      metalness: 1.0,
      roughness: 0.22
    });
    let geom;
    if (shape === "octa") geom = new THREE.OctahedronGeometry(1.1, 0);else if (shape === "icosa") geom = new THREE.IcosahedronGeometry(1.05, 0);else if (shape === "tetra") geom = new THREE.TetrahedronGeometry(1.25, 0);else geom = new THREE.DodecahedronGeometry(1, 0);
    const mesh = new THREE.Mesh(geom, material);
    scene.add(mesh);
    const edgesGeom = new THREE.EdgesGeometry(geom);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xfff0a0,
      transparent: true,
      opacity: 0.5
    });
    const edges = new THREE.LineSegments(edgesGeom, edgesMat);
    mesh.add(edges);
    let frameId;
    const animate = () => {
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.008;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      geom.dispose();
      edgesGeom.dispose();
      material.dispose();
      edgesMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [shape, goldColor, threeReady]);
  return React.createElement("div", {
    ref: mountRef,
    style: {
      width: "100%",
      height: "140px"
    }
  });
}
Object.assign(window, {
  ThreeHero,
  ThreePillar
});
})();

/* ===== sections.jsx ===== */
(function () {
const {
  useEffect,
  useRef,
  useState
} = React;
function Hero({
  t
}) {
  return React.createElement("section", {
    className: "hero",
    id: "top",
    "data-screen-label": "00 Hero"
  }, React.createElement("div", {
    className: "hero-bg-grid"
  }), React.createElement("div", {
    className: "container hero-inner"
  }, React.createElement("div", {
    className: "hero-meta page-in"
  }, React.createElement("span", {
    className: "eyebrow"
  }, t.hero.eyebrow), React.createElement("div", null, React.createElement("h1", {
    className: "hero-title"
  }, React.createElement("span", {
    className: "row"
  }, t.hero.title1), React.createElement("span", {
    className: "row gold"
  }, t.hero.title2)), React.createElement("div", {
    className: "hero-en"
  }, t.hero.en)), React.createElement("p", {
    className: "hero-sub"
  }, t.hero.sub), React.createElement("div", {
    className: "hero-cta"
  }, React.createElement("a", {
    href: "#about",
    className: "btn btn-solid"
  }, t.hero.cta1, " ", React.createElement("span", {
    className: "arrow"
  }, "\u2192")), React.createElement("a", {
    href: "#contact",
    className: "btn"
  }, t.hero.cta2, " ", React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), React.createElement("div", {
    className: "hero-3d-col",
    "aria-hidden": "true"
  })), React.createElement("div", {
    className: "scroll-cue"
  }, React.createElement("span", null, t.hero.scroll), React.createElement("span", {
    className: "line"
  })), React.createElement("div", {
    className: "hero-ticker"
  }, t.hero.ticker.map((tick, i) => React.createElement("div", {
    key: i,
    className: "hero-ticker-item"
  }, React.createElement("span", {
    className: "dot"
  }), React.createElement("span", null, tick)))));
}
function About({
  t
}) {
  return React.createElement("section", {
    className: "section",
    id: "about",
    "data-screen-label": "01 About"
  }, React.createElement("div", {
    className: "container page-in"
  }, React.createElement("div", {
    className: "section-num"
  }, t.about.num), React.createElement("div", {
    className: "section-head"
  }, React.createElement("h2", {
    className: "section-title"
  }, t.about.title, React.createElement("br", null), React.createElement("span", {
    className: "em"
  }, t.about.titleEm), React.createElement("br", null), t.about.titleSub), React.createElement("p", {
    className: "lead"
  }, t.about.lead)), React.createElement("div", {
    className: "about-grid"
  }, React.createElement("div", {
    className: "about-visual brand-plaque"
  }, React.createElement("div", {
    className: "bp-grid"
  }), React.createElement("div", {
    className: "bp-inner"
  }, React.createElement("div", {
    className: "bp-eyebrow"
  }, "Genesis International Capital"), React.createElement("div", {
    className: "bp-mark"
  }, "GS"), React.createElement("div", {
    className: "bp-line"
  }), React.createElement("div", {
    className: "bp-zh"
  }, t.locale === "zh" ? "創世紀國際投資" : "Genesis Capital"), React.createElement("div", {
    className: "bp-tags"
  }, "AI Quant \xB7 Est. 2025 \xB7 Taichung"))), React.createElement("div", null, React.createElement("p", {
    className: "lead",
    style: {
      marginBottom: 20
    }
  }, t.about.body1), React.createElement("p", {
    className: "lead"
  }, t.about.body2), React.createElement("div", {
    className: "about-stats"
  }, t.about.stats.map((s, i) => React.createElement("div", {
    key: i,
    className: "about-stat"
  }, React.createElement("div", {
    className: "num"
  }, s.num, React.createElement("span", {
    className: "unit"
  }, s.unit)), React.createElement("div", {
    className: "label"
  }, s.label))))))));
}
function Services({
  t
}) {
  return React.createElement("section", {
    className: "section",
    id: "services",
    "data-screen-label": "02 Services"
  }, React.createElement("div", {
    className: "container page-in"
  }, React.createElement("div", {
    className: "section-num"
  }, t.services.num), React.createElement("div", {
    className: "section-head"
  }, React.createElement("h2", {
    className: "section-title"
  }, t.services.title, React.createElement("br", null), React.createElement("span", {
    className: "em"
  }, t.services.titleEn)), React.createElement("p", {
    className: "lead"
  }, t.services.lead)), React.createElement("div", {
    className: "services-grid"
  }, t.services.items.map((item, i) => React.createElement("div", {
    key: i,
    className: "service-card"
  }, React.createElement("div", {
    className: "num"
  }, String(i + 1).padStart(2, "0"), " \u2014"), React.createElement("h3", null, item.en), React.createElement("div", {
    className: "en"
  }, item.zh), React.createElement("p", null, item.desc), React.createElement("div", {
    className: "arrow-bottom"
  }, "\u2192"))))));
}
function Philosophy({
  t,
  goldColor,
  active
}) {
  const shapes = ["dodeca", "icosa", "octa"];
  return React.createElement("section", {
    className: "section philosophy",
    id: "philosophy",
    "data-screen-label": "03 Philosophy"
  }, React.createElement("div", {
    className: "container page-in"
  }, React.createElement("div", {
    className: "section-num",
    style: {
      textAlign: "center"
    }
  }, t.philosophy.num), React.createElement("h2", {
    className: "philosophy-quote"
  }, t.philosophy.quote1, React.createElement("br", null), React.createElement("span", {
    className: "em"
  }, t.philosophy.quote2), React.createElement("br", null), t.philosophy.quote3), React.createElement("div", {
    className: "philosophy-pillars"
  }, t.philosophy.pillars.map((p, i) => React.createElement("div", {
    key: i,
    className: "pillar"
  }, React.createElement("div", {
    className: "pillar-3d",
    "aria-hidden": "true"
  }, active && React.createElement(ThreePillar, {
    shape: shapes[i],
    goldColor: goldColor
  })), React.createElement("h3", null, p.en), React.createElement("div", {
    className: "en"
  }, "\u2014 ", p.zh, " \u2014"), React.createElement("p", null, p.desc))))));
}
function Team({
  t
}) {
  return React.createElement("section", {
    className: "section",
    id: "team",
    "data-screen-label": "04 Team"
  }, React.createElement("div", {
    className: "container page-in"
  }, React.createElement("div", {
    className: "section-num"
  }, t.team.num), React.createElement("div", {
    className: "section-head"
  }, React.createElement("h2", {
    className: "section-title"
  }, t.team.title, React.createElement("br", null), React.createElement("span", {
    className: "em"
  }, t.team.titleEn)), React.createElement("p", {
    className: "lead"
  }, t.team.lead)), React.createElement("div", {
    className: "team-list"
  }, t.team.members.map((m, i) => React.createElement("div", {
    key: i,
    className: "team-row"
  }, React.createElement("div", {
    className: "idx"
  }, String(i + 1).padStart(2, "0")), React.createElement("div", {
    className: "dept"
  }, React.createElement("h3", null, m.name), React.createElement("div", {
    className: "role"
  }, m.role)), React.createElement("p", {
    className: "bio"
  }, m.bio))))));
}
// Must match IMAGE_WIDTHS in build/images.mjs.
const IMAGE_WIDTHS = [480, 800, 1024];
const srcset = (base, ext) => IMAGE_WIDTHS.map(w => `${base}-${w}.${ext} ${w}w`).join(", ");
function ResponsiveImage({
  base,
  size,
  alt,
  sizes,
  className
}) {
  return React.createElement("picture", null, React.createElement("source", {
    type: "image/avif",
    srcSet: srcset(base, "avif"),
    sizes: sizes
  }), React.createElement("source", {
    type: "image/webp",
    srcSet: srcset(base, "webp"),
    sizes: sizes
  }), React.createElement("img", {
    className: className,
    src: `${base}-${IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1]}.jpg`,
    alt: alt,
    width: size[0],
    height: size[1],
    loading: "lazy",
    decoding: "async"
  }));
}
function Space({
  t
}) {
  return React.createElement("section", {
    className: "section",
    id: "space",
    "data-screen-label": "05 Space"
  }, React.createElement("div", {
    className: "container page-in"
  }, React.createElement("div", {
    className: "section-num"
  }, t.space.num), React.createElement("div", {
    className: "section-head"
  }, React.createElement("h2", {
    className: "section-title"
  }, t.space.title, React.createElement("br", null), React.createElement("span", {
    className: "em"
  }, t.space.titleEn)), React.createElement("p", {
    className: "lead"
  }, t.space.lead)), React.createElement("div", {
    className: "space-grid"
  }, t.space.items.map((it, i) => React.createElement("figure", {
    key: i,
    className: "space-fig"
  }, React.createElement(ResponsiveImage, {
    base: it.img,
    size: it.size,
    alt: `${it.title} — ${it.desc}`,
    sizes: i === 0 ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 100vw, 58vw",
    className: "space-img"
  }), React.createElement("figcaption", {
    className: "space-cap"
  }, React.createElement("span", {
    className: "lbl"
  }, it.label), React.createElement("span", {
    className: "ttl"
  }, it.title), React.createElement("span", {
    className: "dsc"
  }, it.desc)))))));
}
function Milestones({
  t
}) {
  return React.createElement("section", {
    className: "section milestones",
    id: "milestones",
    "data-screen-label": "05 Milestones"
  }, React.createElement("div", {
    className: "container page-in"
  }, React.createElement("div", {
    className: "section-num"
  }, t.milestones.num), React.createElement("div", {
    className: "section-head"
  }, React.createElement("h2", {
    className: "section-title"
  }, t.milestones.title, React.createElement("br", null), React.createElement("span", {
    className: "em"
  }, t.milestones.titleEn)), React.createElement("p", {
    className: "lead"
  }, t.milestones.lead)), React.createElement("div", {
    className: "timeline-h"
  }, t.milestones.items.map((item, i) => React.createElement("div", {
    key: i,
    className: "ms-h"
  }, React.createElement("div", {
    className: "yr"
  }, item.year), React.createElement("div", {
    className: "ms-dot"
  }), React.createElement("div", {
    className: "ms-body"
  }, React.createElement("h3", null, item.title), React.createElement("p", null, item.desc)))))));
}
function Contact({
  t
}) {
  return React.createElement("section", {
    className: "section contact",
    id: "contact",
    "data-screen-label": "06 Contact"
  }, React.createElement("div", {
    className: "container page-in"
  }, React.createElement("div", {
    className: "section-num"
  }, t.contact.num), React.createElement("div", {
    className: "section-head"
  }, React.createElement("h2", {
    className: "section-title"
  }, t.contact.title, React.createElement("br", null), React.createElement("span", {
    className: "em"
  }, t.contact.titleEm, ".")), React.createElement("p", {
    className: "lead"
  }, t.contact.lead)), React.createElement("div", {
    className: "contact-grid contact-grid-solo"
  }, React.createElement("div", {
    className: "contact-info-block"
  }, t.contact.info.map((row, i) => React.createElement("div", {
    key: i,
    className: "row"
  }, React.createElement("div", {
    className: "label"
  }, row.label), React.createElement("div", {
    className: "val",
    style: {
      whiteSpace: "pre-line"
    }
  }, row.href ? React.createElement("a", {
    href: row.href,
    ...(row.href.startsWith("http") ? {
      target: "_blank",
      rel: "noopener"
    } : {})
  }, row.val) : row.val))))), React.createElement("footer", {
    className: "contact-footer"
  }, React.createElement("p", {
    className: "disclaimer"
  }, t.disclaimer), React.createElement("div", null, t.footer.copy), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: "var(--gold)",
      borderRadius: "50%"
    }
  }), t.footer.built))));
}
Object.assign(window, {
  Hero,
  About,
  Services,
  Philosophy,
  Team,
  Space,
  Milestones,
  Contact
});
})();

/* ===== app.jsx ===== */
(function () {
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
const VISUAL = {
  goldColor: "#D4AF37",
  rotationSpeed: 1,
  particleDensity: 1
};
// Locale is encoded in the URL: "/" is Traditional Chinese, "/en/" is English.
const localeFromPath = () => location.pathname.startsWith("/en") ? "en" : "zh";
const pathForLocale = locale => locale === "en" ? "/en/" : "/";
const PAGES = [{
  id: "top",
  labelKey: "home",
  num: "01"
}, {
  id: "about",
  labelKey: "about",
  num: "02"
}, {
  id: "services",
  labelKey: "services",
  num: "03"
}, {
  id: "philosophy",
  labelKey: "philosophy",
  num: "04"
}, {
  id: "team",
  labelKey: "team",
  num: "05"
}, {
  id: "space",
  labelKey: "space",
  num: "06"
}, {
  id: "milestones",
  labelKey: "milestones",
  num: "07"
}, {
  id: "contact",
  labelKey: "contact",
  num: "08"
}];
function Nav({
  t,
  locale,
  setLocale,
  currentPage,
  goTo
}) {
  const links = [{
    id: 1,
    label: t.nav.about
  }, {
    id: 2,
    label: t.nav.services
  }, {
    id: 3,
    label: t.nav.philosophy
  }, {
    id: 4,
    label: t.nav.team
  }, {
    id: 5,
    label: t.nav.space
  }, {
    id: 6,
    label: t.nav.milestones
  }, {
    id: 7,
    label: t.nav.contact
  }];
  const otherLocale = locale === "zh" ? "en" : "zh";
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = e => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);
  const menuNavigate = id => e => {
    e.preventDefault();
    setMenuOpen(false);
    // Wait for the scroll lock to be released before scrolling.
    requestAnimationFrame(() => goTo(id));
  };
  return React.createElement(React.Fragment, null, React.createElement("nav", {
    className: "nav scrolled"
  }, React.createElement("a", {
    href: "#top",
    className: "nav-logo",
    onClick: e => {
      e.preventDefault();
      goTo(0);
    }
  }, React.createElement("div", {
    className: "nav-logo-mark"
  }, "GS"), React.createElement("div", {
    className: "nav-logo-text"
  }, React.createElement("span", {
    className: "zh"
  }, React.createElement("span", {
    className: "full"
  }, locale === "zh" ? "創世紀國際投資" : "Genesis Capital"), React.createElement("span", {
    className: "short"
  }, locale === "zh" ? "創世紀" : "Genesis")), React.createElement("span", {
    className: "en"
  }, "GS \xB7 EST. 2025"))), React.createElement("div", {
    className: "nav-links"
  }, links.map(l => React.createElement("a", {
    key: l.id,
    href: `#${PAGES[l.id].id}`,
    className: `nav-link ${currentPage === l.id ? "active" : ""}`,
    onClick: e => {
      e.preventDefault();
      goTo(l.id);
    }
  }, l.label)), React.createElement("div", {
    className: "lang-toggle lang-keep"
  }, React.createElement("button", {
    className: `lang-btn ${locale === "zh" ? "active" : ""}`,
    "data-lang-switch": locale === "zh" ? undefined : "zh",
    onClick: () => setLocale("zh")
  }, "\u7E41\u4E2D"), React.createElement("button", {
    className: `lang-btn ${locale === "en" ? "active" : ""}`,
    "data-lang-switch": locale === "en" ? undefined : "en",
    onClick: () => setLocale("en")
  }, "EN")), React.createElement("button", {
    className: "lang-compact",
    "data-lang-switch": otherLocale,
    lang: otherLocale === "zh" ? "zh-Hant" : "en",
    title: otherLocale === "zh" ? "切換為繁體中文" : "Switch to English",
    onClick: () => setLocale(otherLocale)
  }, otherLocale === "zh" ? "中" : "EN"), React.createElement("button", {
    className: "nav-burger",
    "aria-label": t.nav.menu,
    "aria-expanded": menuOpen,
    "aria-controls": "mobile-menu",
    onClick: () => setMenuOpen(o => !o)
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)))), React.createElement("div", {
    id: "mobile-menu",
    className: "mobile-menu",
    hidden: !menuOpen
  }, [{
    id: 0,
    label: locale === "zh" ? "首頁" : "Home"
  }, ...links].map(l => React.createElement("a", {
    key: l.id,
    href: `#${PAGES[l.id].id}`,
    className: currentPage === l.id ? "active" : "",
    onClick: menuNavigate(l.id)
  }, React.createElement("span", null, l.label), React.createElement("span", {
    className: "num",
    "aria-hidden": "true"
  }, PAGES[l.id].num)))));
}
function Pager({
  t,
  currentPage,
  goTo,
  locale
}) {
  const labels = locale === "zh" ? ["首頁", t.nav.about, t.nav.services, t.nav.philosophy, t.nav.team, t.nav.space, t.nav.milestones, t.nav.contact] : ["Home", "About", "Services", "Philosophy", "Team", "Our Space", "Roadmap", "Contact"];
  return React.createElement("div", {
    className: "pager",
    role: "navigation"
  }, PAGES.map((p, i) => React.createElement("button", {
    key: p.id,
    className: `pager-btn ${i === currentPage ? "active" : ""}`,
    onClick: () => goTo(i),
    "aria-label": labels[i]
  }, React.createElement("span", {
    className: "pager-num"
  }, p.num), React.createElement("span", {
    className: "pager-label"
  }, labels[i]))));
}
function PageCounter({
  currentPage,
  total
}) {
  return React.createElement("div", {
    className: "page-counter"
  }, React.createElement("span", {
    className: "cur"
  }, String(currentPage + 1).padStart(2, "0")), React.createElement("span", {
    className: "slash"
  }, "/"), React.createElement("span", {
    className: "tot"
  }, String(total).padStart(2, "0")));
}
// Full-screen paging on desktop only; smaller screens scroll through the
// sections. Keep in sync with the paged-mode media query in src/index.html.
const PAGED_QUERY = "(min-width: 1025px)";
function usePaged() {
  // Starts true to match the prerendered (desktop) markup during hydration,
  // then follows the real viewport.
  const [paged, setPaged] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia(PAGED_QUERY);
    const sync = () => setPaged(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return paged;
}
function App() {
  const [locale, setLocaleState] = useState(localeFromPath);
  const [currentPage, setCurrentPage] = useState(0);
  const paged = usePaged();
  const pagedRef = useRef(paged);
  pagedRef.current = paged;
  const lockRef = useRef(false);
  const wheelAccum = useRef(0);
  useEffect(() => {
    // Signals build/prerender.mjs that the first render has committed.
    window.__appReady = true;
    // The staggered reveal only exists in desktop paged mode; toggling a body
    // class restyles the whole page, so skip it elsewhere.
    if (!window.matchMedia(PAGED_QUERY).matches) return;
    document.body.classList.add("first-load");
    const tClear = setTimeout(() => document.body.classList.remove("first-load"), 1600);
    return () => {
      clearTimeout(tClear);
    };
  }, []);
  const setLocale = useCallback(next => {
    if (next === localeFromPath()) return;
    history.pushState(null, "", pathForLocale(next) + location.hash);
    setLocaleState(next);
  }, []);
  useEffect(() => {
    const onPop = () => setLocaleState(localeFromPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const t = I18N[locale] || I18N.zh;
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-Hant" : "en";
  }, [locale]);
  const goTo = useCallback((target, {
    instant = false
  } = {}) => {
    if (target < 0 || target >= PAGES.length) return;
    if (!pagedRef.current) {
      // Scroll mode: the IntersectionObserver below updates currentPage.
      const el = document.getElementById(PAGES[target].id);
      if (el) el.scrollIntoView(instant ? {
        behavior: "instant",
        block: "start"
      } : undefined);
      return;
    }
    if (lockRef.current) return;
    setCurrentPage(prev => {
      if (prev === target) return prev;
      lockRef.current = true;
      setTimeout(() => {
        lockRef.current = false;
      }, 350);
      return target;
    });
  }, []);
  useEffect(() => {
    if (!paged) return;
    let cooldown = false;
    let touchStartY = null;
    const tryNavWheel = deltaY => {
      if (cooldown || lockRef.current) return;
      const activeEl = document.querySelector(".page.active");
      if (activeEl) {
        const canScrollDown = activeEl.scrollHeight - activeEl.clientHeight - activeEl.scrollTop > 4;
        const canScrollUp = activeEl.scrollTop > 4;
        if (deltaY > 0 && canScrollDown) return;
        if (deltaY < 0 && canScrollUp) return;
      }
      wheelAccum.current += deltaY;
      if (Math.abs(wheelAccum.current) < 40) return;
      cooldown = true;
      setTimeout(() => {
        cooldown = false;
        wheelAccum.current = 0;
      }, 400);
      if (wheelAccum.current > 0) goTo(currentPage + 1);else goTo(currentPage - 1);
      wheelAccum.current = 0;
    };
    const onWheel = e => {
      tryNavWheel(e.deltaY);
    };
    const onKey = e => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        goTo(currentPage + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goTo(currentPage - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(PAGES.length - 1);
      }
    };
    const onTouchStart = e => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchEnd = e => {
      if (touchStartY == null) return;
      const dy = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(dy) < 50) return;
      tryNavWheel(dy);
      touchStartY = null;
    };
    window.addEventListener("wheel", onWheel, {
      passive: true
    });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, {
      passive: true
    });
    window.addEventListener("touchend", onTouchEnd, {
      passive: true
    });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [paged, currentPage, goTo]);
  useEffect(() => {
    if (paged) return;
    // The section crossing the middle of the viewport counts as current.
    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const idx = PAGES.findIndex(p => p.id === entry.target.id);
        if (idx >= 0) setCurrentPage(idx);
      }
    }, {
      rootMargin: "-45% 0px -54% 0px"
    });
    PAGES.forEach(p => {
      const el = document.getElementById(p.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [paged]);
  const hashSynced = useRef(false);
  useEffect(() => {
    // Mirror the current page in the URL so links can be shared; the first
    // run is skipped so an incoming hash is read before it can be replaced.
    if (!hashSynced.current) {
      hashSynced.current = true;
      return;
    }
    const hash = currentPage === 0 ? "" : `#${PAGES[currentPage].id}`;
    if (hash !== location.hash) history.replaceState(null, "", location.pathname + hash);
  }, [currentPage]);
  useEffect(() => {
    const idxFromHash = () => PAGES.findIndex(p => p.id === location.hash.slice(1));
    const fromHash = () => {
      const idx = idxFromHash();
      if (idx >= 0) goTo(idx);
    };
    // The incoming hash is applied without animation. In scroll mode it is
    // applied again once web fonts have settled the layout, because the
    // browser's own jump to the fragment happens before they load.
    const align = () => {
      const idx = idxFromHash();
      if (idx >= 0) goTo(idx, {
        instant: true
      });
    };
    align();
    let cancelled = false;
    if (!paged && document.fonts) document.fonts.ready.then(() => {
      if (!cancelled) align();
    });
    window.addEventListener("hashchange", fromHash);
    return () => {
      cancelled = true;
      window.removeEventListener("hashchange", fromHash);
    };
  }, [goTo, paged]);
  const renderPage = i => {
    const active = i === currentPage;
    switch (i) {
      case 0:
        return React.createElement(Hero, {
          t: t
        });
      case 1:
        return React.createElement(About, {
          t: t
        });
      case 2:
        return React.createElement(Services, {
          t: t
        });
      case 3:
        return React.createElement(Philosophy, {
          t: t,
          goldColor: VISUAL.goldColor,
          active: active
        });
      case 4:
        return React.createElement(Team, {
          t: t
        });
      case 5:
        return React.createElement(Space, {
          t: t
        });
      case 6:
        return React.createElement(Milestones, {
          t: t
        });
      case 7:
        return React.createElement(Contact, {
          t: t
        });
      default:
        return null;
    }
  };
  const pageClass = i => i === currentPage ? "page active" : "page";
  useEffect(() => {
    document.body.setAttribute("data-page", currentPage === 0 ? "hero" : "content");
  }, [currentPage]);
  return React.createElement(React.Fragment, null, React.createElement(ThreeHero, {
    goldColor: VISUAL.goldColor,
    rotationSpeed: VISUAL.rotationSpeed,
    particleDensity: VISUAL.particleDensity,
    page: currentPage
  }), React.createElement("div", {
    id: "bg-scrim"
  }), React.createElement(Nav, {
    t: t,
    locale: locale,
    setLocale: setLocale,
    currentPage: currentPage,
    goTo: goTo
  }), React.createElement("div", {
    className: "page-shell"
  }, PAGES.map((p, i) => React.createElement("div", {
    key: i,
    className: pageClass(i),
    "aria-hidden": paged && i !== currentPage
  }, renderPage(i)))), React.createElement(Pager, {
    t: t,
    currentPage: currentPage,
    goTo: goTo,
    locale: locale
  }), React.createElement(PageCounter, {
    currentPage: currentPage,
    total: PAGES.length
  }));
}
// Exposed for build/prerender.mjs, which server-renders it in a browser.
window.__GSApp = App;

// Prerendered pages are hydrated in place so the server markup is kept (no
// repaint, no LCP reset); a plain shell falls back to a client render.
const container = document.getElementById("root");
if (container.hasAttribute("data-prerendered")) {
  ReactDOM.hydrateRoot(container, React.createElement(App, null));
} else {
  ReactDOM.createRoot(container).render(React.createElement(App, null));
}
})();
