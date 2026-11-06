/* ==========================================================================
   ARNAUD.BRETON — TECH PORTFOLIO SYSTEM
   Vanilla JS: project data, boot sequence, rendering, interactions.
   Edit the data blocks below to update the site content — no build step.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. PROJECT DATA — edit these arrays to add/remove/update projects.
   -------------------------------------------------------------------------- */

// Main, highlighted projects. Optional: liveUrl (the card and its title open
// it, and the domain becomes the title), highlight (a standout tag).
// status: "ACTIVE" | "EXPERIMENTAL" | "ARCHIVED"
// Each project pairs a business-value sentence (why it matters) with a
// technical sentence (how it's built). Source: https://github.com/arnoweb
const priorityProjects = [
  {
    id: "001",
    name: "LIKYLY",
    category: "SaaS Recommendation System",
    value: "Help your users discover what they'll love next.",
    description: "Multi-tenant recommendation API (content-based, collaborative ALS and hybrid). An agentic install wizard sets it up, then your AI coding assistant wires it into your code through an MCP server.",
    status: "ACTIVE",
    highlight: "Agentic Install Wizard",
    stack: ["Embeddings", "Machine Learning (ALS)", "PostgreSQL + pgvector", "MCP", "FastAPI"],
    github: "https://github.com/Likyly/likyly-recsys",
    liveUrl: "https://likyly.com",
    video: "assets/videos/likyly-demo.mp4",
    docsUrl: "likyly-recsys/portfolio-business-value.html",
    architectureUrl: "likyly-recsys/portfolio-architecture.html"
  },
  {
    id: "002",
    name: "SKILLZFOREST",
    category: "AI Skills Marketplace & Desktop Manager",
    value: "Find trusted AI skills, install them in one click in Claude, Codex or Cursor, and keep them up to date.",
    description: "Decoupled platform (FastAPI API behind APISIX, Next.js site, Tauri/Rust desktop app). Every skill goes through an n8n-driven review: scanners, five LLM auditors, a sandboxed Claude Code run and a judge — traced in Langfuse. MCP gateway in design.",
    status: "PRE-LAUNCH",
    stack: ["Multi-agent LLM review", "n8n", "Langfuse", "FastAPI + APISIX", "Tauri / Rust", "MCP"],
    github: "https://github.com/skillzforest/skillzforest-skills",
    liveUrl: "https://skillzforest.com",
    docsUrl: "skillzforest/portfolio-business-value.html",
    architectureUrl: "skillzforest/portfolio-architecture.html"
  },
  {
    id: "003",
    name: "DATA TO FORM",
    category: "SaaS Form Automation",
    value: "Turn your unstructured data into ready-to-submit web forms — no manual re-typing.",
    description: "A 4-level matching cascade (synonyms, learned memory, local semantic model, then LLM fallback) maps spreadsheet columns to form fields. The server-side browser is streamed live into the user's tab, who can watch and take over at any time.",
    status: "ACTIVE",
    highlight: "Live Browser Streaming (CDP Screencast)",
    stack: ["Node.js", "Playwright", "WebSocket", "Local Encoder (ONNX)", "LLM (fallback)", "SQLite"],
    // TODO: github.com/arnoweb/data-to-form currently 404s — confirm the real repo URL
    github: "https://github.com/arnoweb",
    liveUrl: "https://datatoform.com",
    docsUrl: "data-to-form/portfolio-business-value.html",
    architectureUrl: "data-to-form/portfolio-architecture.html"
  }
];

// Secondary projects, shown in "THE LAB" section, in two groups.
const labGroups = [
  {
    title: "GAMING & SIMULATION",
    sub: "AI assistants, MCP and real-time control for games and flight simulation",
    projects: [
      {
        id: "AI-031",
        name: "ROMKADE",
        description: "Turns a retro handheld (Anbernic, Miyoo…) into a console run from the computer over Wi-Fi. Duke, the AI assistant, knows every game on the card and drives the console. An MCP server lets ChatGPT, Claude or Google Home launch a game, and a typo-tolerant search finds any title.",
        status: "ACTIVE",
        stack: ["AI Assistant", "MCP Server", "Typesense Search", "Local LLM (Ollama)", "FastAPI + React"],
        liveUrl: "https://romkade.com",
        github: "https://github.com/RomKade/romkade-manager"
      },
      {
        id: "SIM-027",
        name: "XP-FlightDeck",
        description: "Gamification of the X-Plane 12 flight simulator. A web deck on a tablet flies the plane and runs scored missions: race gates and pylons, balloons to pop, ribbons to cut, a landing on a moving truck. A Node.js relay talks to X-Plane over WebSocket, and a native C++ plugin draws the mission objects in the sim.",
        status: "ACTIVE",
        stack: ["Gamification", "WebSocket", "C++ Plugin (X-Plane SDK)", "Node.js Relay"],
        liveUrl: "https://www.xp-flightdeck.com"
      }
    ]
  },
  {
    title: "ML & LLM EXPERIMENTS",
    sub: "Machine learning, LLM fine-tuning and edge AI",
    projects: [
      {
        id: "LLM-004",
        name: "Gen AI FAQ",
        description: "LLM fine-tuning experiment: fine-tuned Hugging Face language models power a retrieval-driven FAQ assistant that answers customers' questions.",
        status: "ARCHIVED",
        stack: ["LLM Fine-tuning", "Hugging Face", "RAG"],
        github: "https://github.com/arnoweb/gen-ai-faq",
        docsUrl: "gen-ai-faq/portfolio-business-value.html",
        architectureUrl: "gen-ai-faq/portfolio-architecture.html"
      },
      {
        id: "ML-014",
        name: "Golf & Performance",
        description: "Pure machine learning: predicts the carry distance of a 3-wood from launch-monitor data. Univariate and multivariate KNN regression and linear regression, compared with K-fold cross-validation, hyperparameter tuning and RMSE.",
        status: "OPEN SOURCE",
        stack: ["Machine Learning", "Linear Regression", "KNN Regression", "K-Fold CV", "scikit-learn"],
        github: "https://github.com/arnoweb/machine-learning-linearreg-kneighbours-kfold/blob/master/ML-4-case-golf.ipynb",
        architectureUrl: "golf-performance/portfolio-architecture.html"
      },
      {
        id: "EDGE-021",
        name: "Google Coral Edge AI",
        description: "Edge AI inference scripts for the Google Coral Dev Board.",
        status: "OPEN SOURCE",
        github: "https://github.com/arnoweb/googlecoral",
        video: "assets/videos/coral-vid-test.mp4"
      }
    ]
  },
  {
    title: "PLATFORMS",
    sub: "Client platforms delivered at Mazarine over the last 10 years, as technical project manager then technical project director",
    projects: [
      {
        id: "MZ-LOUVRE",
        name: "Musée du Louvre",
        description: "Technical direction of louvre.fr, the museum's website: quarterly releases with a team of 6.",
        status: "DELIVERED · MAZARINE",
        stack: ["Technical direction", "Cultural institution", "Quarterly releases"]
      },
      {
        id: "MZ-OPERA",
        name: "Opéra national de Paris",
        description: "Technical direction of the Opéra's digital platform: quarterly releases with a team of 6, integrated with the ticketing and the client's information system.",
        status: "DELIVERED · MAZARINE",
        stack: ["Technical direction", "Ticketing APIs", "Cloud architecture"]
      },
      {
        id: "MZ-OTB",
        name: "OTB Group",
        description: "Luxury brand website for Maison Margiela.",
        status: "DELIVERED · MAZARINE",
        stack: ["Luxury e-commerce", "Technical project management"]
      },
      {
        id: "MZ-KERING",
        name: "Kering Group",
        description: "Luxury brand website for Bottega Veneta.",
        status: "DELIVERED · MAZARINE",
        stack: ["Luxury e-commerce", "Technical project management"]
      },
      {
        id: "MZ-ACCOR",
        name: "Accor Group",
        description: "Digital platforms for Thalassa and for the Accor and LVMH partnership, connected to hospitality, booking and payment APIs.",
        status: "DELIVERED · MAZARINE",
        stack: ["Hospitality APIs", "Payments (Stripe)", "Technical direction"]
      }
    ]
  }
];

// Tech stack, grouped by category — shown as a terminal-style inventory.
// Source: https://github.com/arnoweb (profile README)
const techStack = {
  "AI / ML": ["Python", "PyTorch", "Scikit-learn", "FastAPI", "LangChain / Langfuse", "Hugging Face", "Vector DB", "n8n", "MCP"],
  "BACKEND / WEB": ["PHP", "Laravel", "WordPress", "React", "Node.js", "API Design"],
  "DEVOPS / CLOUD": ["Docker", "Apache APISIX", "AWS", "Linux", "Git", "CI/CD"],
  "PROJECT MGMT": ["Agile", "Scrum", "Jira", "Confluence"]
};


// Ongoing training / skill upgrade — shown in "CURRENTLY TRAINING".
const currentTraining = {
  course: "Generative AI Track",
  provider: "Blent.ai",
  logo: "assets/images/blent-logo.png",
  description: "Deepening hands-on expertise in generative AI, LLM engineering and applied machine learning.",
  status: "IN PROGRESS",
  url: "https://blent.ai/thematique/ia-generative",
  // The track's modules. Optional: pdf (my presentation for that module), github (its code).
  modules: [
    {
      name: "Python",
      description: "Python fundamentals, applied to DigiMarket: an e-commerce REST API with Flask, JWT auth, SQLAlchemy and pytest.",
      pdf: "assets/pdf/DigiMarket_API_Python_Module_Blent.pdf",
      github: "https://github.com/arnoweb/formation-blentai-module-python"
    },
    {
      name: "LLM Engineer",
      description: "Building applications on top of large language models."
    },
    {
      name: "Agentic AI",
      description: "Designing AI agents that plan, use tools and act."
    }
  ]
};

/* --------------------------------------------------------------------------
   2. RENDERING
   -------------------------------------------------------------------------- */

function statusClass(status) {
  const s = status.toLowerCase();
  if (s === "active") return "active";
  if (s === "archived") return "archived";
  return "experimental";
}

// Small line icons for the card links (stroke = currentColor, so they follow
// the link colour and its hover state).
const linkIcons = {
  site: '<circle cx="8" cy="8" r="6.5"/><path d="M1.5 8h13M8 1.5c2 2 2.8 4.2 2.8 6.5S10 12.5 8 14.5M8 1.5C6 3.5 5.2 5.7 5.2 8S6 12.5 8 14.5"/>',
  demo: '<rect x="1.5" y="3" width="13" height="10" rx="1"/><path d="M6.5 5.8v4.4L10.3 8z" fill="currentColor"/>',
  github: '<path d="M6 13.5c-3 .9-3-1.5-4.2-1.8M10 15.5v-2.4c0-.7.1-1.2-.4-1.6 2-.2 4-1 4-4.4a3.4 3.4 0 0 0-.9-2.4 3.2 3.2 0 0 0-.1-2.4s-.7-.2-2.4.9a8 8 0 0 0-4.2 0C4.3 2.1 3.6 2.3 3.6 2.3a3.2 3.2 0 0 0-.1 2.4 3.4 3.4 0 0 0-.9 2.4c0 3.4 2 4.2 4 4.4-.5.4-.5.9-.4 1.6v2.4"/>',
  value: '<path d="M1.5 12.5l4-4 3 3 6-6.5M10.5 5h4v4"/>',
  architecture: '<rect x="1.5" y="1.5" width="5" height="4" rx=".5"/><rect x="9.5" y="1.5" width="5" height="4" rx=".5"/><rect x="5.5" y="10.5" width="5" height="4" rx=".5"/><path d="M4 5.5v2.5h8V5.5M8 8v2.5"/>'
};

function cardLink(icon, label, title, attrs) {
  return `<a ${attrs} title="${title}"><svg class="link-icon" viewBox="0 0 16 16" aria-hidden="true">${linkIcons[icon]}</svg>${label}</a>`;
}

function renderPriorityProjects() {
  const grid = document.getElementById("priority-projects-grid");
  if (!grid) return;
  grid.innerHTML = priorityProjects.map((p) => {
    const target = p.liveUrl || p.github;
    const title = p.liveUrl ? new URL(p.liveUrl).hostname.replace(/^www\./, "") : p.name;
    const ext = 'target="_blank" rel="noopener"';
    return `
    <article class="project-card reveal" data-href="${target}" tabindex="0" role="link" aria-label="Open ${title}">
      <div class="card-top">
        <span>PROJECT ID: ${p.id}</span>
        <span class="status-badge ${statusClass(p.status)}">${p.status}</span>
      </div>
      <div class="project-category">${p.category}</div>
      <h3 class="project-name"><a href="${target}" ${ext}>${title}</a></h3>
      <p class="project-value">${p.value}</p>
      <p class="project-desc">${p.description}</p>
      <div class="tech-tags">
        ${p.highlight ? `<span class="tech-tag tech-tag--highlight">${p.highlight}</span>` : ""}
        ${p.stack.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
      <div class="card-links card-links--icons">
        ${p.liveUrl ? cardLink("site", "SITE", "Live site", `href="${p.liveUrl}" ${ext}`) : ""}
        ${p.video ? cardLink("demo", "DEMO", "Watch the demo", `href="#" data-video="${p.video}" data-video-title="${p.name}"`) : ""}
        ${cardLink("github", "GITHUB", "Source code on GitHub", `href="${p.github}" ${ext}`)}
        ${cardLink("value", "VALUE", "Business value", `href="${p.docsUrl}" ${ext}`)}
        ${cardLink("architecture", "ARCHITECTURE", "Technical architecture", `href="${p.architectureUrl}" ${ext}`)}
      </div>
    </article>
  `;
  }).join("");
}

// Priority cards are clickable (open the live site, or the GitHub repo) without hijacking
// clicks on the links inside them.
function setupClickableCards() {
  const grid = document.getElementById("priority-projects-grid");
  if (!grid) return;
  grid.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const card = e.target.closest("[data-href]");
    if (card) window.open(card.dataset.href, "_blank", "noopener");
  });
  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest("[data-href]");
    if (!card) return;
    e.preventDefault();
    window.open(card.dataset.href, "_blank", "noopener");
  });
}

function renderLabProjects() {
  const grid = document.getElementById("lab-projects-grid");
  if (!grid) return;
  const ext = 'target="_blank" rel="noopener"';
  const card = (p) => `
    <article class="lab-card reveal">
      <div class="lab-id">[ ${p.id} ]</div>
      <h4 class="lab-name">${p.name}</h4>
      <p class="lab-desc">${p.description}</p>
      ${p.stack ? `<div class="tech-tags lab-tags">${p.stack.map((t) => `<span class="tech-tag">${t}</span>`).join("")}</div>` : ""}
      <div class="lab-status">STATUS: ${p.status}</div>
      <div class="card-links card-links--icons" style="border-top: none; padding-top: 8px; margin-top: 8px;">
        ${p.liveUrl ? cardLink("site", "SITE", "Live site", `href="${p.liveUrl}" ${ext}`) : ""}
        ${p.github ? cardLink("github", "GITHUB", "Source code on GitHub", `href="${p.github}" ${ext}`) : ""}
        ${p.video ? cardLink("demo", "DEMO", "Watch the demo", `href="#" data-video="${p.video}" data-video-title="${p.name}"`) : ""}
        ${p.docsUrl ? cardLink("value", "VALUE", "Business value", `href="${p.docsUrl}" ${ext}`) : ""}
        ${p.architectureUrl ? cardLink("architecture", "ARCHITECTURE", "Technical architecture", `href="${p.architectureUrl}" ${ext}`) : ""}
      </div>
    </article>
  `;
  grid.innerHTML = labGroups.map((g) => `
    <div class="lab-group">
      <h3 class="lab-group-title">${g.title}</h3>
      <p class="lab-group-sub">// ${g.sub}</p>
      <div class="lab-grid">${g.projects.map(card).join("")}</div>
    </div>
  `).join("");
}

// Video demos open in a lightbox instead of navigating away.
function setupVideoModal() {
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("video-modal-player");
  const titleEl = document.getElementById("video-modal-title");
  const closeBtn = document.getElementById("video-modal-close");
  if (!modal || !player) return;

  const openModal = (src, title) => {
    player.src = src;
    if (titleEl) titleEl.textContent = title || "";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    player.play().catch(() => {});
  };
  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
    player.pause();
    player.currentTime = 0;
    player.src = "";
  };

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-video]");
    if (trigger) {
      e.preventDefault();
      openModal(trigger.dataset.video, trigger.dataset.videoTitle);
    }
  });
  closeBtn && closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
}

// Calendly booking opens in a popup (iframe) instead of leaving the page.
function setupCalendlyModal() {
  const modal = document.getElementById("calendly-modal");
  const frame = document.getElementById("calendly-modal-frame");
  const closeBtn = document.getElementById("calendly-modal-close");
  if (!modal || !frame) return;

  const openModal = (url) => {
    const u = new URL(url);
    u.searchParams.set("embed_domain", location.hostname || "localhost");
    u.searchParams.set("embed_type", "PopupText");
    u.searchParams.set("hide_gdpr_banner", "1");
    frame.src = u.toString();
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
    frame.src = "about:blank";
  };

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-calendly]");
    if (trigger) {
      e.preventDefault();
      openModal(trigger.href);
    }
  });
  closeBtn && closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
}

function renderTechStack() {
  const body = document.getElementById("tech-stack-body");
  if (!body) return;
  body.innerHTML = Object.entries(techStack).map(([group, items]) => `
    <div class="stack-group">
      <div class="stack-group-title">${group}</div>
      ${items.map((item) => `<div class="stack-item">${item}</div>`).join("")}
    </div>
  `).join("");
}

function renderTraining() {
  const el = document.getElementById("training-panel");
  if (!el) return;
  const t = currentTraining;
  el.innerHTML = `
    <img src="${t.logo}" alt="${t.provider}" class="training-logo">
    <div>
      <div class="training-course">
        ${t.course} — ${t.provider}
        <span class="status-badge active">${t.status}</span>
      </div>
      <p class="training-desc">${t.description}</p>
      <a href="${t.url}" target="_blank" rel="noopener" class="btn btn-secondary">[ VIEW PROGRAM ]</a>
    </div>
    ${t.modules && t.modules.length ? `
    <ol class="training-modules">
      ${t.modules.map((m, i) => `
        <li class="training-module">
          <span class="training-module-num">MODULE ${String(i + 1).padStart(2, "0")}</span>
          <span class="training-module-name">${m.name}</span>
          <span class="training-module-desc">${m.description}</span>
          ${m.pdf ? `<a href="${m.pdf}" target="_blank" rel="noopener" class="training-module-link">&gt; VIEW MY PRESENTATION (PDF)</a>` : ""}
          ${m.github ? `<a href="${m.github}" target="_blank" rel="noopener" class="training-module-link">&gt; VIEW THE CODE ON GITHUB</a>` : ""}
        </li>`).join("")}
    </ol>` : ""}
  `;
}

/* --------------------------------------------------------------------------
   3. BOOT SEQUENCE
   -------------------------------------------------------------------------- */

function runBootSequence() {
  const bootScreen = document.getElementById("boot-screen");
  const linesEl = document.getElementById("boot-lines");
  const barFill = document.getElementById("boot-bar-fill");
  if (!bootScreen || !linesEl || !barFill) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const finishBoot = () => {
    bootScreen.setAttribute("hidden", "");
    document.body.style.overflow = "";
  };

  if (prefersReducedMotion) {
    finishBoot();
    return;
  }

  document.body.style.overflow = "hidden";

  const lines = [
    "BOOTING PORTFOLIO SYSTEM...",
    "LOADING PROJECT DATABASE"
  ];

  lines.forEach((text, i) => {
    const el = document.createElement("div");
    el.className = "boot-line";
    el.style.animationDelay = `${i * 120}ms`;
    el.textContent = text;
    linesEl.appendChild(el);
  });

  let pct = 0;
  const progressTimer = setInterval(() => {
    pct = Math.min(100, pct + 20);
    barFill.style.width = `${pct}%`;
    if (pct >= 100) clearInterval(progressTimer);
  }, 150);

  const onlineLine = document.createElement("div");
  onlineLine.className = "boot-line mono";
  onlineLine.style.animationDelay = "700ms";
  onlineLine.style.marginTop = "8px";
  onlineLine.textContent = "SYSTEM ONLINE";
  linesEl.appendChild(onlineLine);

  const autoSkip = setTimeout(finishBoot, 1800);

  // Allow the user to skip immediately on click/keypress.
  const skipNow = () => {
    clearTimeout(autoSkip);
    clearInterval(progressTimer);
    finishBoot();
    window.removeEventListener("keydown", skipNow);
    bootScreen.removeEventListener("click", skipNow);
  };
  window.addEventListener("keydown", skipNow, { once: true });
  bootScreen.addEventListener("click", skipNow, { once: true });
}

/* --------------------------------------------------------------------------
   4. INTERACTIONS — nav toggle, scroll reveal
   -------------------------------------------------------------------------- */

function setupNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });
}

function setupScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   5. INIT
   -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderPriorityProjects();
  renderLabProjects();
  renderTechStack();
  renderTraining();
  setupNavToggle();
  setupClickableCards();
  setupVideoModal();
  setupCalendlyModal();
  setupScrollReveal(); // cards are injected above, so reveal runs after render
  runBootSequence();

  document.getElementById("current-year") &&
    (document.getElementById("current-year").textContent = new Date().getFullYear());
});
