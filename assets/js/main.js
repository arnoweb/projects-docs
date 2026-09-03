/* ==========================================================================
   ARNAUD.BRETON — TECH PORTFOLIO SYSTEM
   Vanilla JS: project data, boot sequence, rendering, interactions.
   Edit the data blocks below to update the site content — no build step.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. PROJECT DATA — edit these arrays to add/remove/update projects.
   -------------------------------------------------------------------------- */

// Main, highlighted projects. status: "ACTIVE" | "EXPERIMENTAL" | "ARCHIVED"
// Each project pairs a business-value sentence (why it matters) with a
// technical sentence (how it's built). Source: https://github.com/arnoweb
const priorityProjects = [
  {
    id: "001",
    name: "LIKYLY",
    category: "SaaS Recommendation System",
    value: "Help your users discover what they'll love next.",
    description: "AI-powered recommendation engine combining content-based, collaborative and hybrid filtering.",
    status: "ACTIVE",
    stack: ["Python", "Recommendation Systems", "API"],
    github: "https://github.com/arnoweb/likyly-recsys",
    docsUrl: "https://arnoweb.github.io/projects-docs/likyly-recsys/",
    architectureUrl: "https://arnoweb.github.io/projects-docs/likyly-recsys/architecture.html"
  },
  {
    id: "002",
    name: "DATA TO FORM",
    category: "SaaS Form Automation",
    value: "Turn your unstructured data into ready-to-submit web forms — no manual re-typing.",
    description: "A 4-level matching cascade (synonyms, learned memory, local semantic model, then LLM fallback) maps spreadsheet columns to form fields with confidence scoring.",
    status: "ACTIVE",
    stack: ["Node.js", "Playwright", "LLM", "ONNX"],
    github: "https://github.com/arnoweb/data-to-form",
    docsUrl: "https://arnoweb.github.io/projects-docs/data-to-form/",
    architectureUrl: "https://arnoweb.github.io/projects-docs/data-to-form/architecture.html"
  },
  {
    id: "003",
    name: "GEN AI FAQ",
    category: "Generative AI Knowledge Assistant",
    value: "Give your customers instant, accurate answers around the clock.",
    description: "Fine-tuned Hugging Face language models power a retrieval-driven FAQ interface.",
    status: "ACTIVE",
    stack: ["Python", "Hugging Face", "Generative AI"],
    github: "https://github.com/arnoweb/gen-ai-faq",
    docsUrl: "https://arnoweb.github.io/projects-docs/gen-ai-faq/",
    architectureUrl: "https://arnoweb.github.io/projects-docs/gen-ai-faq/architecture.html"
  }
];

// Secondary / experimental projects, shown in "THE LAB" section.
// Source: https://github.com/arnoweb (pinned repositories)
const labProjects = [
  {
    id: "SSR-041",
    name: "Kitstarter",
    description: "Universal web app combining Laravel, React and SSR without a REST API.",
    status: "OPEN SOURCE",
    github: "https://github.com/arnoweb/kitstarter-laravel-ssr-noapi"
  },
  {
    id: "ML-014",
    name: "Linear Reg / k-NN / k-Fold",
    description: "Machine learning implementation with k-Nearest Neighbours on the Airbnb dataset.",
    status: "OPEN SOURCE",
    github: "https://github.com/arnoweb/machine-learning-linearreg-kneighbours-kfold"
  },
  {
    id: "EDGE-021",
    name: "Google Coral Edge AI",
    description: "Edge AI inference scripts for the Google Coral Dev Board.",
    status: "OPEN SOURCE",
    github: "https://github.com/arnoweb/googlecoral"
  },
  {
    id: "AUTOML-032",
    name: "AutoKeras Sandbox",
    description: "AutoML experimentation environment.",
    status: "OPEN SOURCE",
    github: "https://github.com/arnoweb/autokeras-sandbox"
  }
];

// Tech stack, grouped by category — shown as a terminal-style inventory.
// Source: https://github.com/arnoweb (profile README)
const techStack = {
  "AI / ML": ["Python", "PyTorch", "Scikit-learn", "FastAPI", "LangChain", "Hugging Face", "Vector DB", "n8n", "MCP"],
  "BACKEND / WEB": ["PHP", "Laravel", "WordPress", "React", "Node.js", "API Design"],
  "DEVOPS / CLOUD": ["Docker", "AWS", "Linux", "Git", "CI/CD"],
  "PROJECT MGMT": ["Agile", "Scrum", "Jira", "Confluence"]
};

// Current mission — edit freely, progress is 0-100.
const currentMission = {
  text: "Deploying agentic AI systems on-site — forward-deployed engineering from architecture to production for GenAI and LLM-driven workflows.",
  status: "IN PROGRESS",
  progress: 70
};

// Ongoing training / skill upgrade — shown in "CURRENTLY TRAINING".
const currentTraining = {
  course: "Generative AI Track",
  provider: "Blent.ai",
  logo: "assets/images/blent-logo.png",
  description: "Deepening hands-on expertise in generative AI, LLM engineering and applied machine learning.",
  status: "IN PROGRESS",
  url: "https://blent.ai/thematique/ia-generative"
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

function renderPriorityProjects() {
  const grid = document.getElementById("priority-projects-grid");
  if (!grid) return;
  grid.innerHTML = priorityProjects.map((p) => `
    <article class="project-card reveal">
      <div class="card-top">
        <span>PROJECT ID: ${p.id}</span>
        <span class="status-badge ${statusClass(p.status)}">${p.status}</span>
      </div>
      <div class="project-category">${p.category}</div>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-value">${p.value}</p>
      <p class="project-desc">${p.description}</p>
      <div class="tech-tags">
        ${p.stack.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
      <div class="card-links">
        <a href="${p.github}" target="_blank" rel="noopener">[ GITHUB ]</a>
        <a href="${p.docsUrl}" target="_blank" rel="noopener">[ BUSINESS VALUE ]</a>
        <a href="${p.architectureUrl}" target="_blank" rel="noopener">[ ARCHITECTURE ]</a>
      </div>
    </article>
  `).join("");
}

function renderLabProjects() {
  const grid = document.getElementById("lab-projects-grid");
  if (!grid) return;
  grid.innerHTML = labProjects.map((p) => `
    <article class="lab-card reveal">
      <div class="lab-id">[ ${p.id} ]</div>
      <h4 class="lab-name">${p.name}</h4>
      <p class="lab-desc">${p.description}</p>
      <div class="lab-status">STATUS: ${p.status}</div>
      <div class="card-links" style="border-top: none; padding-top: 8px; margin-top: 8px;">
        <a href="${p.github}" target="_blank" rel="noopener">[ GITHUB ]</a>
      </div>
    </article>
  `).join("");
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
  `;
}

function renderMission() {
  const desc = document.getElementById("mission-desc");
  const status = document.getElementById("mission-status");
  const fill = document.getElementById("mission-progress-fill");
  const label = document.getElementById("mission-progress-label");
  if (!desc || !status || !fill || !label) return;
  desc.textContent = currentMission.text;
  status.textContent = `STATUS: ${currentMission.status}`;
  label.textContent = `PROGRESS: ${currentMission.progress}%`;
  // Width set on next frame so the CSS transition animates in.
  requestAnimationFrame(() => { fill.style.width = `${currentMission.progress}%`; });
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
  renderMission();
  renderTraining();
  setupNavToggle();
  setupScrollReveal(); // cards are injected above, so reveal runs after render
  runBootSequence();

  document.getElementById("current-year") &&
    (document.getElementById("current-year").textContent = new Date().getFullYear());
});
