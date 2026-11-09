/* ==========================================================================
   ARNAUD.BRETON — TECH PORTFOLIO SYSTEM
   Vanilla JS: project data, boot sequence, rendering, interactions.
   Edit the data blocks below to update the site content — no build step.
   ========================================================================== */

/* --------------------------------------------------------------------------
   0. LANGUAGE — the site is bilingual (EN / FR).
   Any text field below can be a plain string (same in both languages) or an
   object { en: "...", fr: "..." }. tr() picks the current language.
   -------------------------------------------------------------------------- */

const LANGS = ["en", "fr"];

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(saved)) return saved;
  } catch (e) { /* storage unavailable */ }
  return (navigator.language || "").toLowerCase().startsWith("fr") ? "fr" : "en";
}

let LANG = detectLang();

function tr(v) {
  if (v && typeof v === "object" && !Array.isArray(v)) return v[LANG] ?? v.en;
  return v;
}

// Interface strings: static page text (data-i18n="key" in index.html) and labels
// used by the renderers.
const UI = {
  en: {
    pageTitle: "ARNAUD.BRETON · Agentic AI Solutions Architect & Engineer",
    metaDescription: "Arnaud Breton's tech portfolio: Agentic AI Solutions Architect & Engineer, specialised in agentic systems, generative AI, LLM and machine learning.",
    navAbout: "ABOUT ME",
    navAi: "AI PROJECTS",
    navPlatforms: "PLATFORM PROJECTS",
    navContact: "CONTACT",
    roleTag: "TECH PORTFOLIO",
    systemOnline: "SYSTEM ONLINE",
    heroKicker: "Available now",
    heroDesc: "I design and build AI-powered products and agentic solutions, combining product engineering, AI coding agents, LLM workflows and business process automation, from concept to production.",
    heroCv: "&gt; VIEW MY RESUME (PDF)",
    heroExplore: "[ EXPLORE PROJECTS ]",
    heroGithub: "[ GITHUB PROFILE ]",
    aboutTitle: 'ABOUT <span class="accent">ME</span>',
    aboutSub: "// 20 YEARS IN DIGITAL, STILL PASSIONATE",
    aboutP1: "I've spent the last twenty years in digital, and the passion is still intact. I started out as a developer, became a lead, then a technical project director. Along the way, digital culture became much more than a job: it's the way I look at the world.",
    aboutP2: "What drives me is bringing projects to life. Taking an idea, shaping it with the people around it, and seeing it through all the way to production: that's where I feel most at home.",
    aboutP3: "I've always had an appetite for learning. I keep a close eye on what's happening in tech, try out new tools and put them into practice on real projects. Today that means generative AI and agentic development, and tomorrow, whatever comes next.",
    trainingTitle: 'CURRENTLY <span class="accent">TRAINING</span>',
    trainingSub: "// SKILL TREE · ACTIVE UPGRADE IN PROGRESS",
    priorityTitle: 'AI <span class="accent">PROJECTS</span>',
    prioritySub: "// PERSONAL PROJECTS · CLICK A CARD TO INSPECT",
    labTitle: 'THE LAB <span class="accent">// SIDE QUESTS</span>',
    labSub: "// PROTOTYPES, EXPERIMENTS AND OPEN SOURCE",
    platformsTitle: 'PLATFORM <span class="accent">PROJECTS</span>',
    platformsSub: '// CLIENT PLATFORMS DELIVERED AT <a href="https://www.mazarine.com" target="_blank" rel="noopener" class="section-sub-link">MAZARINE DIGITAL</a> OVER THE LAST 10 YEARS',
    stackTitle: 'TECH <span class="accent">INVENTORY</span>',
    contactTitle: 'CONNECT <span class="accent">// LINKS</span>',
    contactHeadline: "Let's build solutions that create value, together",
    contactText: "Looking for a senior technical perspective, a partner to bring an idea to life, or a developer to build your next solution? Book a call or reach out on LinkedIn.",
    bookCall: "[ BOOK A CALL ]",
    calendlyTitle: "BOOK A CALL · CALENDLY",
    footerSystem: "ARNAUD.BRETON · TECH PORTFOLIO SYSTEM",
    footerStatus: "SYSTEM STATUS: ONLINE",
    projectId: "PROJECT ID",
    status: "STATUS",
    linkSite: "SITE", linkSiteTitle: "Live site",
    linkDemo: "DEMO", linkDemoTitle: "Watch the demo",
    linkGithubTitle: "Source code on GitHub",
    linkValue: "VALUE", linkValueTitle: "Business value",
    linkArchitecture: "ARCHITECTURE", linkArchitectureTitle: "Technical architecture",
    role: "ROLE",
    team: "TEAM",
    viewProgram: "[ VIEW PROGRAM ]",
    module: "MODULE",
    viewPresentation: "&gt; VIEW MY PRESENTATION (PDF)",
    viewCode: "&gt; VIEW THE CODE ON GITHUB",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme"
  },
  fr: {
    pageTitle: "ARNAUD.BRETON · Agentic AI Solutions Architect & Engineer",
    metaDescription: "Portfolio technologique d'Arnaud Breton : Agentic AI Solutions Architect & Engineer, spécialisé en systèmes agentiques, IA générative, LLM et machine learning.",
    navAbout: "À PROPOS",
    navAi: "PROJETS IA",
    navPlatforms: "PROJETS PLATEFORMES",
    navContact: "CONTACT",
    roleTag: "PORTFOLIO TECH",
    systemOnline: "SYSTÈME EN LIGNE",
    heroKicker: "Disponible",
    heroDesc: "Je conçois et je développe des produits et des solutions agentiques à base d'IA, en combinant ingénierie produit, agents de code IA, workflows LLM et automatisation des processus métier, de l'idée à la mise en production.",
    heroCv: "&gt; VOIR MON CV (PDF)",
    heroExplore: "[ VOIR LES PROJETS ]",
    heroGithub: "[ PROFIL GITHUB ]",
    aboutTitle: 'À <span class="accent">PROPOS</span>',
    aboutSub: "// 20 ANS DANS LE DIGITAL, TOUJOURS PASSIONNÉ",
    aboutP1: "Voilà vingt ans que je travaille dans le digital, et la passion est intacte. J'ai commencé comme développeur, je suis devenu lead, puis directeur de projet technique. En chemin, la culture digitale est devenue bien plus qu'un métier : c'est ma façon de regarder le monde.",
    aboutP2: "Ce qui me motive, c'est de donner vie aux projets. Partir d'une idée, la façonner avec les personnes qui l'entourent et l'accompagner jusqu'à la mise en production : c'est là que je me sens le plus à ma place.",
    aboutP3: "J'ai toujours eu l'envie d'apprendre. Je suis de près ce qui se passe dans la tech, je teste de nouveaux outils et je les mets en pratique sur de vrais projets. Aujourd'hui, c'est l'IA générative et le développement agentique ; demain, ce qui viendra ensuite.",
    trainingTitle: 'FORMATION <span class="accent">EN COURS</span>',
    trainingSub: "// ARBRE DE COMPÉTENCES · MISE À NIVEAU EN COURS",
    priorityTitle: 'PROJETS <span class="accent">IA</span>',
    prioritySub: "// PROJETS PERSONNELS · CLIQUEZ SUR UNE CARTE POUR L'OUVRIR",
    labTitle: 'LE LAB <span class="accent">// PROJETS EXPÉRIMENTAUX</span>',
    labSub: "// PROTOTYPES, EXPÉRIMENTATIONS ET OPEN SOURCE",
    platformsTitle: 'PROJETS <span class="accent">PLATEFORMES</span>',
    platformsSub: '// PLATEFORMES CLIENTS LIVRÉES CHEZ <a href="https://www.mazarine.com" target="_blank" rel="noopener" class="section-sub-link">MAZARINE DIGITAL</a> CES 10 DERNIÈRES ANNÉES',
    stackTitle: 'INVENTAIRE <span class="accent">TECH</span>',
    contactTitle: 'CONTACT <span class="accent">// LIENS</span>',
    contactHeadline: "Construisons ensemble des solutions qui créent de la valeur",
    contactText: "Vous cherchez un regard technique senior, un partenaire pour concrétiser une idée ou un développeur capable de construire votre prochaine solution ? Réservez un échange ou contactez-moi sur LinkedIn.",
    bookCall: "[ RÉSERVER UN ÉCHANGE ]",
    calendlyTitle: "RÉSERVER UN ÉCHANGE · CALENDLY",
    footerSystem: "ARNAUD.BRETON · PORTFOLIO TECH",
    footerStatus: "STATUT DU SYSTÈME : EN LIGNE",
    projectId: "PROJET",
    status: "STATUT",
    linkSite: "SITE", linkSiteTitle: "Site en ligne",
    linkDemo: "DÉMO", linkDemoTitle: "Voir la démo",
    linkGithubTitle: "Code source sur GitHub",
    linkValue: "VALEUR", linkValueTitle: "Valeur métier",
    linkArchitecture: "ARCHITECTURE", linkArchitectureTitle: "Architecture technique",
    role: "RÔLE",
    team: "ÉQUIPE",
    viewProgram: "[ VOIR LE PROGRAMME ]",
    module: "MODULE",
    viewPresentation: "&gt; VOIR MA PRÉSENTATION (PDF)",
    viewCode: "&gt; VOIR LE CODE SUR GITHUB",
    toLight: "Passer au thème clair",
    toDark: "Passer au thème sombre"
  }
};

function t(key) {
  return UI[LANG][key] ?? UI.en[key] ?? key;
}

// Status labels shown on the cards (the data keeps the English value).
const STATUS_FR = {
  "ACTIVE": "ACTIF",
  "ARCHIVED": "ARCHIVÉ",
  "EXPERIMENTAL": "EXPÉRIMENTAL",
  "PRE-LAUNCH": "PRÉ-LANCEMENT",
  "OPEN SOURCE": "OPEN SOURCE",
  "IN PROGRESS": "EN COURS"
};
function statusLabel(status) {
  return LANG === "fr" ? (STATUS_FR[status] || status) : status;
}

/* --------------------------------------------------------------------------
   1. PROJECT DATA — edit these arrays to add/remove/update projects.
   -------------------------------------------------------------------------- */

// Main, highlighted projects. Optional: liveUrl (the card and its title open
// it, and the domain becomes the title), highlight (a standout tag).
// status: "ACTIVE" | "EXPERIMENTAL" | "ARCHIVED" | "PRE-LAUNCH"
// Each project pairs a business-value sentence (why it matters) with a
// technical sentence (how it's built). Source: https://github.com/arnoweb
const priorityProjects = [
  {
    id: "001",
    name: "LIKYLY",
    category: { en: "SaaS Recommendation System", fr: "SaaS de recommandation" },
    value: {
      en: "Help your users discover what they'll love next.",
      fr: "Aidez vos utilisateurs à découvrir ce qu'ils vont aimer."
    },
    description: {
      en: "Multi-tenant recommendation API (content-based, collaborative ALS and hybrid). An agentic install wizard sets it up, then your AI coding assistant wires it into your code through an MCP server.",
      fr: "API de recommandation multi-tenant (par contenu, collaborative ALS et hybride). Un assistant d'installation agentique la configure, puis votre assistant de code IA l'intègre à votre code grâce à un serveur MCP."
    },
    status: "ACTIVE",
    highlight: { en: "Agentic Install Wizard", fr: "Assistant d'installation agentique" },
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
    category: { en: "AI Skills Marketplace & Desktop Manager", fr: "Marketplace de skills IA et gestionnaire desktop" },
    value: {
      en: "Find trusted AI skills, install them in one click in Claude, Codex or Cursor, and keep them up to date.",
      fr: "Trouvez des skills IA de confiance, installez-les en un clic dans Claude, Codex ou Cursor, et gardez-les à jour."
    },
    description: {
      en: "Decoupled platform (FastAPI API behind APISIX, Next.js site, Tauri/Rust desktop app). Every skill goes through an n8n-driven review: scanners, five LLM auditors, a sandboxed Claude Code run and a judge, all traced in Langfuse. MCP gateway in design.",
      fr: "Plateforme découplée (API FastAPI derrière APISIX, site Next.js, application desktop Tauri/Rust). Chaque skill passe une revue pilotée par n8n : scanners, cinq auditeurs LLM, une exécution Claude Code en bac à sable et un juge, le tout tracé dans Langfuse. Passerelle MCP en conception."
    },
    status: "PRE-LAUNCH",
    stack: [{ en: "Multi-agent LLM review", fr: "Revue LLM multi-agents" }, "n8n", "Langfuse", "FastAPI + APISIX", "Tauri / Rust", "MCP"],
    github: "https://github.com/skillzforest/skillzforest-skills",
    liveUrl: "https://skillzforest.com",
    docsUrl: "skillzforest/portfolio-business-value.html",
    architectureUrl: "skillzforest/portfolio-architecture.html"
  },
  {
    id: "003",
    name: "DATA TO FORM",
    category: { en: "SaaS Form Automation", fr: "SaaS d'automatisation de formulaires" },
    value: {
      en: "Turn your unstructured data into ready-to-submit web forms, with no manual re-typing.",
      fr: "Transformez vos données non structurées en formulaires web prêts à envoyer, sans ressaisie."
    },
    description: {
      en: "A 4-level matching cascade (synonyms, learned memory, local semantic model, then LLM fallback) maps spreadsheet columns to form fields. The server-side browser is streamed live into the user's tab, who can watch and take over at any time.",
      fr: "Une cascade de correspondance à 4 niveaux (synonymes, mémoire apprise, modèle sémantique local, puis LLM en dernier recours) associe les colonnes d'un tableur aux champs du formulaire. Le navigateur côté serveur est diffusé en direct dans l'onglet de l'utilisateur, qui peut suivre et reprendre la main à tout moment."
    },
    status: "ACTIVE",
    highlight: { en: "Live Browser Streaming (CDP Screencast)", fr: "Navigateur diffusé en direct (CDP Screencast)" },
    stack: ["Node.js", "Playwright", "WebSocket", { en: "Local Encoder (ONNX)", fr: "Encodeur local (ONNX)" }, { en: "LLM (fallback)", fr: "LLM (dernier recours)" }, "SQLite"],
    // TODO: github.com/arnoweb/data-to-form currently 404s, confirm the real repo URL
    github: "https://github.com/arnoweb",
    liveUrl: "https://datatoform.com",
    docsUrl: "data-to-form/portfolio-business-value.html",
    architectureUrl: "data-to-form/portfolio-architecture.html"
  }
];

// Secondary projects, shown in "THE LAB" section, in groups.
const labGroups = [
  {
    title: { en: "GAMING & SIMULATION", fr: "JEU VIDÉO ET SIMULATION" },
    sub: {
      en: "AI assistants, MCP and real-time control for games and flight simulation",
      fr: "Assistants IA, MCP et pilotage en temps réel pour le jeu vidéo et la simulation de vol"
    },
    projects: [
      {
        id: "AI-031",
        name: "ROMKADE",
        description: {
          en: "Turns a retro handheld (Anbernic, Miyoo…) into a console run from the computer over Wi-Fi. Duke, the AI assistant, knows every game on the card and drives the console. An MCP server lets ChatGPT, Claude or Google Home launch a game, and a typo-tolerant search finds any title.",
          fr: "Transforme une console rétro portable (Anbernic, Miyoo…) en console pilotée depuis l'ordinateur en Wi-Fi. Duke, l'assistant IA, connaît chaque jeu de la carte et pilote la console. Un serveur MCP permet à ChatGPT, Claude ou Google Home de lancer un jeu, et une recherche tolérante aux fautes retrouve n'importe quel titre."
        },
        status: "ACTIVE",
        stack: [{ en: "AI Assistant", fr: "Assistant IA" }, { en: "MCP Server", fr: "Serveur MCP" }, { en: "Typesense Search", fr: "Recherche Typesense" }, { en: "Local LLM (Ollama)", fr: "LLM local (Ollama)" }, "FastAPI + React"],
        liveUrl: "https://romkade.com",
        github: "https://github.com/RomKade/romkade-manager"
      },
      {
        id: "SIM-027",
        name: "XP-FlightDeck",
        description: {
          en: "Gamification of the X-Plane 12 flight simulator. A web deck on a tablet flies the plane and runs scored missions: race gates and pylons, balloons to pop, ribbons to cut, a landing on a moving truck. A Node.js relay talks to X-Plane over WebSocket, and a native C++ plugin draws the mission objects in the sim.",
          fr: "Gamification du simulateur de vol X-Plane 12. Un deck web sur tablette pilote l'avion et lance des missions notées : portes et pylônes de course, ballons à éclater, rubans à couper, atterrissage sur un camion en mouvement. Un relais Node.js dialogue avec X-Plane en WebSocket, et un plugin natif C++ dessine les objets des missions dans le simulateur."
        },
        status: "ACTIVE",
        stack: ["Gamification", "WebSocket", { en: "C++ Plugin (X-Plane SDK)", fr: "Plugin C++ (SDK X-Plane)" }, { en: "Node.js Relay", fr: "Relais Node.js" }],
        liveUrl: "https://www.xp-flightdeck.com"
      }
    ]
  },
  {
    title: { en: "ML & LLM EXPERIMENTS", fr: "EXPÉRIMENTATIONS ML ET LLM" },
    sub: {
      en: "Machine learning, LLM fine-tuning and edge AI",
      fr: "Machine learning, fine-tuning de LLM et IA embarquée"
    },
    projects: [
      {
        id: "LLM-004",
        name: "Gen AI FAQ",
        description: {
          en: "LLM fine-tuning experiment: fine-tuned Hugging Face language models power a retrieval-driven FAQ assistant that answers customers' questions.",
          fr: "Expérimentation de fine-tuning de LLM : des modèles de langage Hugging Face fine-tunés alimentent un assistant FAQ à base de recherche qui répond aux questions des clients."
        },
        status: "ARCHIVED",
        stack: ["LLM Fine-tuning", "Hugging Face", "RAG"],
        github: "https://github.com/arnoweb/gen-ai-faq",
        apps: [
          { label: "APP", title: { en: "Live FAQ assistant (Streamlit)", fr: "Assistant FAQ en ligne (Streamlit)" }, url: "https://arnoweb-rag-llm-faq-finetuned-huggingface.streamlit.app/" },
          { label: { en: "COMPARE", fr: "COMPARER" }, title: { en: "Base vs fine-tuned model comparison (Streamlit)", fr: "Comparaison modèle de base / modèle fine-tuné (Streamlit)" }, url: "https://arnoweb-rag-faq-compare-basevsfinetuned-huggingface.streamlit.app/" }
        ],
        docsUrl: "gen-ai-faq/portfolio-business-value.html",
        architectureUrl: "gen-ai-faq/portfolio-architecture.html"
      },
      {
        id: "ML-014",
        name: "Golf & Performance",
        description: {
          en: "Pure machine learning: predicts the carry distance of a 3-wood from launch-monitor data. Univariate and multivariate KNN regression and linear regression, compared with K-fold cross-validation, hyperparameter tuning and RMSE.",
          fr: "Du machine learning pur : prédire la distance de portée d'un bois 3 à partir des données d'un radar de golf. Régression KNN univariée et multivariée et régression linéaire, comparées par validation croisée K-fold, réglage des hyperparamètres et RMSE."
        },
        status: "OPEN SOURCE",
        stack: ["Machine Learning", { en: "Linear Regression", fr: "Régression linéaire" }, { en: "KNN Regression", fr: "Régression KNN" }, "K-Fold CV", "scikit-learn"],
        github: "https://github.com/arnoweb/machine-learning-linearreg-kneighbours-kfold/blob/master/ML-4-case-golf.ipynb",
        architectureUrl: "golf-performance/portfolio-architecture.html"
      },
      {
        id: "EDGE-021",
        name: "Google Coral Edge AI",
        description: {
          en: "Real-time object recognition from video on the Google Coral Dev Board: machine learning classification models run on the board's Edge TPU, frame by frame from the camera.",
          fr: "Reconnaissance d'objets en temps réel à partir de la vidéo, sur la carte Google Coral Dev Board : des modèles de classification en machine learning tournent sur l'Edge TPU de la carte, image par image depuis la caméra."
        },
        stack: ["Machine Learning", { en: "Image classification", fr: "Classification d'images" }, { en: "Object detection", fr: "Détection d'objets" }, "Edge TPU", "TensorFlow Lite"],
        status: "OPEN SOURCE",
        github: "https://github.com/arnoweb/googlecoral",
        video: "assets/videos/coral-vid-test.mp4"
      }
    ]
  }
];

// Client platforms, shown in the "PLATFORM PROJECTS" section, grouped by sector.
// Per project: role, team (optional), what I did (description) and the technologies (stack).
const TECH_DIRECTION = { en: "Technical direction", fr: "Direction technique" };
const platformGroups = [
  {
    title: { en: "CULTURAL INSTITUTIONS", fr: "INSTITUTIONS CULTURELLES" },
    projects: [
      {
        id: "MZ-LOUVRE",
        name: "Musée du Louvre",
        role: TECH_DIRECTION,
        team: { en: "6 people", fr: "6 personnes" },
        description: {
          en: "Technical direction of louvre.fr, a headless architecture: a Next.js and React front end on top of a Drupal back end, delivered in quarterly release cycles.",
          fr: "Direction technique de louvre.fr, en architecture headless : un front Next.js et React au-dessus d'un back-office Drupal, livré en cycles trimestriels."
        },
        stack: ["Headless", "Next.js", "React", "Drupal"]
      },
      {
        id: "MZ-OPERA",
        name: "Opéra national de Paris",
        role: TECH_DIRECTION,
        team: { en: "6 people", fr: "6 personnes" },
        description: {
          en: "Technical direction of the Opéra's digital platform, built on Laravel with a framework-free front end in native JavaScript and TypeScript, integrated with the ticketing and the Opéra's information system, delivered in quarterly releases.",
          fr: "Direction technique de la plateforme digitale de l'Opéra, construite sur Laravel avec un front sans framework en JavaScript natif et TypeScript, intégrée à la billetterie et au système d'information de l'Opéra, livrée en cycles trimestriels."
        },
        stack: ["Laravel", "PHP", { en: "Native JavaScript", fr: "JavaScript natif" }, "TypeScript", { en: "Ticketing APIs", fr: "API billetterie" }]
      }
    ]
  },
  {
    title: { en: "LUXURY BRANDS", fr: "MAISONS DE LUXE" },
    projects: [
      {
        id: "MZ-LVMH",
        name: "Silenseas · LVMH",
        role: TECH_DIRECTION,
        team: { en: "4 people, over one year", fr: "4 personnes, sur un an" },
        description: {
          en: "Technical direction of the Silenseas project for the LVMH group.",
          fr: "Direction technique du projet Silenseas pour le groupe LVMH."
        },
        stack: []
      },
      {
        id: "MZ-OTB",
        name: "Maison Margiela · OTB Group",
        role: TECH_DIRECTION,
        team: { en: "4 developers", fr: "4 développeurs" },
        description: {
          en: "Technical direction of the Maison Margiela website, built on Drupal and connected to an e-commerce API.",
          fr: "Direction technique du site Maison Margiela, construit sur Drupal et connecté à une API e-commerce."
        },
        stack: ["Drupal", { en: "E-commerce API", fr: "API e-commerce" }]
      },
      {
        id: "MZ-OTB-VR",
        name: "Viktor & Rolf · OTB Group",
        role: TECH_DIRECTION,
        description: {
          en: "Technical direction of a digital experience for Viktor & Rolf.",
          fr: "Direction technique d'une expérience digitale pour Viktor & Rolf."
        },
        stack: []
      },
      {
        id: "MZ-KERING",
        name: "Bottega Veneta · Kering Group",
        role: TECH_DIRECTION,
        team: { en: "4 developers", fr: "4 développeurs" },
        description: {
          en: "Technical direction of a digital lookbook for Bottega Veneta: a pure front-end experience in JavaScript and CSS.",
          fr: "Direction technique d'un lookbook digital pour Bottega Veneta : une expérience 100 % front en JavaScript et CSS."
        },
        stack: ["JavaScript", "CSS", { en: "Front-end experience", fr: "Expérience front" }]
      }
    ]
  },
  {
    title: { en: "HOSPITALITY GROUPS", fr: "GROUPES HÔTELIERS" },
    projects: [
      {
        id: "MZ-ACCOR",
        name: "Thalassa · Accor Group",
        role: TECH_DIRECTION,
        team: { en: "5 people, over one year", fr: "5 personnes, sur un an" },
        description: {
          en: "Technical direction of the Thalassa platform, which presents and sells the brand's sea and spa care programs, connected to hospitality and payment APIs.",
          fr: "Direction technique de la plateforme Thalassa, qui présente et vend les programmes de soins de la marque, connectée aux API hôtelières et de paiement."
        },
        stack: [{ en: "Hospitality APIs", fr: "API hôtelières" }, "Stripe"]
      }
    ]
  }
];

// Tech stack, grouped by category, shown as a terminal-style inventory.
// Source: https://github.com/arnoweb (profile README)
const techStack = {
  "AI / ML": ["Python", "PyTorch", "Scikit-learn", "FastAPI", "LangChain / Langfuse", "Hugging Face", "Vector DB", "n8n", "MCP"],
  "BACKEND / WEB": ["PHP", "Laravel", "WordPress", "React", "Node.js", "API Design"],
  "DEVOPS / CLOUD": ["Docker", "Apache APISIX", "AWS", "Linux", "Git", "CI/CD"],
  "PROJECT MGMT": ["Agile", "Scrum", "Jira", "Confluence"]
};


// Ongoing training / skill upgrade, shown in "CURRENTLY TRAINING".
const currentTraining = {
  course: { en: "Generative AI Track", fr: "Parcours IA générative" },
  provider: "Blent.ai",
  logo: "assets/images/blent-logo.png",
  description: {
    en: "Deepening hands-on expertise in generative AI, LLM engineering and applied machine learning.",
    fr: "Approfondir une expertise concrète en IA générative, en ingénierie des LLM et en machine learning appliqué."
  },
  status: "IN PROGRESS",
  url: "https://blent.ai/thematique/ia-generative",
  // The track's modules. Optional: pdf (my presentation for that module), github (its code).
  modules: [
    {
      name: "Python",
      description: {
        en: "Python fundamentals, applied to DigiMarket: an e-commerce REST API with Flask, JWT auth, SQLAlchemy and pytest.",
        fr: "Les fondamentaux de Python, appliqués à DigiMarket : une API REST e-commerce avec Flask, authentification JWT, SQLAlchemy et pytest."
      },
      pdf: "assets/pdf/DigiMarket_API_Python_Module_Blent.pdf",
      github: "https://github.com/arnoweb/formation-blentai-module-python"
    },
    {
      name: "LLM Engineer",
      description: {
        en: "Building applications on top of large language models.",
        fr: "Construire des applications à base de grands modèles de langage."
      }
    },
    {
      name: "Agentic AI",
      description: {
        en: "Designing AI agents that plan, use tools and act.",
        fr: "Concevoir des agents IA qui planifient, utilisent des outils et agissent."
      }
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

function tags(stack) {
  return (stack || []).map((x) => `<span class="tech-tag">${tr(x)}</span>`).join("");
}

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
    <article class="project-card reveal" data-href="${target}" tabindex="0" role="link" aria-label="${title}">
      <div class="card-top">
        <span>${t("projectId")}: ${p.id}</span>
        <span class="status-badge ${statusClass(p.status)}">${statusLabel(p.status)}</span>
      </div>
      <div class="project-category">${tr(p.category)}</div>
      <h3 class="project-name"><a href="${target}" ${ext}>${title}</a></h3>
      <p class="project-value">${tr(p.value)}</p>
      <p class="project-desc">${tr(p.description)}</p>
      <div class="tech-tags">
        ${p.highlight ? `<span class="tech-tag tech-tag--highlight">${tr(p.highlight)}</span>` : ""}
        ${tags(p.stack)}
      </div>
      <div class="card-links card-links--icons">
        ${p.liveUrl ? cardLink("site", t("linkSite"), t("linkSiteTitle"), `href="${p.liveUrl}" ${ext}`) : ""}
        ${p.video ? cardLink("demo", t("linkDemo"), t("linkDemoTitle"), `href="#" data-video="${p.video}" data-video-title="${p.name}"`) : ""}
        ${cardLink("github", "GITHUB", t("linkGithubTitle"), `href="${p.github}" ${ext}`)}
        ${cardLink("value", t("linkValue"), t("linkValueTitle"), `href="${p.docsUrl}" ${ext}`)}
        ${cardLink("architecture", t("linkArchitecture"), t("linkArchitectureTitle"), `href="${p.architectureUrl}" ${ext}`)}
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
      <p class="lab-desc">${tr(p.description)}</p>
      ${p.stack ? `<div class="tech-tags lab-tags">${tags(p.stack)}</div>` : ""}
      <div class="lab-status">${t("status")}: ${statusLabel(p.status)}</div>
      <div class="card-links card-links--icons" style="border-top: none; padding-top: 8px; margin-top: 8px;">
        ${p.liveUrl ? cardLink("site", t("linkSite"), t("linkSiteTitle"), `href="${p.liveUrl}" ${ext}`) : ""}
        ${(p.apps || []).map((a) => cardLink("site", tr(a.label), tr(a.title), `href="${a.url}" ${ext}`)).join("")}
        ${p.github ? cardLink("github", "GITHUB", t("linkGithubTitle"), `href="${p.github}" ${ext}`) : ""}
        ${p.video ? cardLink("demo", t("linkDemo"), t("linkDemoTitle"), `href="#" data-video="${p.video}" data-video-title="${p.name}"`) : ""}
        ${p.docsUrl ? cardLink("value", t("linkValue"), t("linkValueTitle"), `href="${p.docsUrl}" ${ext}`) : ""}
        ${p.architectureUrl ? cardLink("architecture", t("linkArchitecture"), t("linkArchitectureTitle"), `href="${p.architectureUrl}" ${ext}`) : ""}
      </div>
    </article>
  `;
  grid.innerHTML = labGroups.map((g) => `
    <div class="lab-group">
      <h3 class="lab-group-title">${tr(g.title)}</h3>
      <p class="lab-group-sub">// ${tr(g.sub)}</p>
      <div class="lab-grid">${g.projects.map(card).join("")}</div>
    </div>
  `).join("");
}

function renderPlatformProjects() {
  const grid = document.getElementById("platform-projects-grid");
  if (!grid) return;
  const card = (p) => `
    <article class="lab-card platform-card reveal">
      <div class="lab-id">[ ${p.id} ]</div>
      <h4 class="lab-name">${p.name}</h4>
      <dl class="platform-meta">
        <dt>${t("role")}</dt><dd>${tr(p.role)}</dd>
        ${p.team ? `<dt>${t("team")}</dt><dd>${tr(p.team)}</dd>` : ""}
      </dl>
      <p class="lab-desc">${tr(p.description)}</p>
      ${p.stack && p.stack.length ? `<div class="tech-tags lab-tags">${tags(p.stack)}</div>` : ""}
    </article>
  `;
  grid.innerHTML = platformGroups.map((g) => `
    <div class="lab-group">
      <h3 class="lab-group-title">${tr(g.title)}</h3>
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
  const c = currentTraining;
  el.innerHTML = `
    <img src="${c.logo}" alt="${c.provider}" class="training-logo">
    <div>
      <div class="training-course">
        ${tr(c.course)} · ${c.provider}
        <span class="status-badge active">${statusLabel(c.status)}</span>
      </div>
      <p class="training-desc">${tr(c.description)}</p>
      <a href="${c.url}" target="_blank" rel="noopener" class="btn btn-secondary">${t("viewProgram")}</a>
    </div>
    ${c.modules && c.modules.length ? `
    <ol class="training-modules">
      ${c.modules.map((m, i) => `
        <li class="training-module">
          <span class="training-module-num">${t("module")} ${String(i + 1).padStart(2, "0")}</span>
          <span class="training-module-name">${tr(m.name)}</span>
          <span class="training-module-desc">${tr(m.description)}</span>
          ${m.pdf ? `<a href="${m.pdf}" target="_blank" rel="noopener" class="training-module-link">${t("viewPresentation")}</a>` : ""}
          ${m.github ? `<a href="${m.github}" target="_blank" rel="noopener" class="training-module-link">${t("viewCode")}</a>` : ""}
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
   4b. LANGUAGE SWITCH — static text (data-i18n) + re-render of the sections
   -------------------------------------------------------------------------- */

function renderAll() {
  renderPriorityProjects();
  renderLabProjects();
  renderPlatformProjects();
  renderTechStack();
  renderTraining();
}

function applyStaticText() {
  document.documentElement.lang = LANG;
  document.title = t("pageTitle");
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("metaDescription"));
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const active = btn.dataset.lang === LANG;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

// Theme (dark / light). The initial value is set by an inline script in <head>.
function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function updateThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const label = currentTheme() === "light" ? t("toDark") : t("toLight");
  btn.setAttribute("aria-label", label);
  btn.setAttribute("title", label);
}

function setupThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const next = currentTheme() === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
    updateThemeToggle();
  });
  updateThemeToggle();
}

function setLang(lang) {
  if (!LANGS.includes(lang) || lang === LANG) return;
  LANG = lang;
  try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }
  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
  applyStaticText();
  renderAll();
  updateThemeToggle();
  // Re-rendered cards are already on screen: show them without waiting for the scroll reveal.
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}

function setupLangSwitch() {
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

/* --------------------------------------------------------------------------
   5. INIT
   -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  applyStaticText();
  renderAll();
  setupLangSwitch();
  setupThemeToggle();
  setupNavToggle();
  setupClickableCards();
  setupVideoModal();
  setupCalendlyModal();
  setupScrollReveal(); // cards are injected above, so reveal runs after render
  runBootSequence();

  document.getElementById("current-year") &&
    (document.getElementById("current-year").textContent = new Date().getFullYear());
});
