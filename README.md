# ARNAUD.BRETON — Tech Portfolio System

Portfolio personnel statique, présenté comme une interface rétro-futuriste
(inspiration DOS / Amiga / terminaux / HUD de jeux des années 90, exécution
moderne). Complémentaire au profil GitHub : https://github.com/arnoweb

Hébergé sur GitHub Pages, sans build process, sans framework.

## Structure

```text
/
├── index.html              Page unique du portfolio
├── assets/
│   ├── css/style.css        Design system (palette, typo, layout, animations)
│   ├── js/main.js           Données des projets + rendu + interactions
│   └── images/              Images éventuelles
└── README.md
```

## Modifier le contenu

Tout le contenu dynamique (projets, stack technique, mission en cours) se
modifie dans [assets/js/main.js](assets/js/main.js), en haut du fichier :

- `priorityProjects` — projets mis en avant (section "PRIORITY PROJECTS")
- `labProjects` — projets secondaires / expérimentaux (section "THE LAB")
- `techStack` — inventaire technique par catégorie
- `currentMission` — texte, statut et pourcentage de la mission en cours

Chaque projet placeholder est clairement identifiable (`PROJECT ALPHA`,
`PROJECT BETA`, `EXP-014`, etc.) — à remplacer par vos projets réels, avec
liens GitHub et démo.

Les textes fixes (nom, intro, liens du header/footer) se modifient
directement dans [index.html](index.html).

## Déploiement — GitHub Pages

1. Pousser ce dépôt sur GitHub (branche `main`).
2. Dans les paramètres du dépôt : **Settings → Pages → Source: Deploy from a
   branch**, choisir la branche `main` et le dossier `/ (root)`.
3. Le site est servi à l'URL fournie par GitHub Pages (ou un domaine
   personnalisé configuré via `CNAME`).

Aucune étape de build : `index.html` fonctionne aussi en l'ouvrant en local
dans un navigateur.

## Accessibilité & performance

- Respecte `prefers-reduced-motion` (désactive l'écran de boot et les
  animations pour les utilisateurs concernés).
- Pas de dépendance JS lourde : vanilla JS uniquement.
- Polices chargées via Google Fonts (`JetBrains Mono`, `Inter`).
