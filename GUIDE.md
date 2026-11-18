# 📐 Portfolio Architecture - Guide Complet

Bienvenue dans votre nouveau portfolio d'architecture professionnel ! Ce site a été créé avec Next.js, React et Tailwind CSS pour offrir une expérience moderne et dynamique.

## 🚀 Démarrage Rapide

### Installation

```bash
cd portfolio-architecture
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le portfolio.

## 📁 Structure du Projet

```
portfolio-architecture/
├── app/
│   ├── layout.tsx          # Mise en page globale
│   ├── page.tsx            # Page d'accueil (Hero + preview)
│   ├── projects/
│   │   └── page.tsx        # Galerie des projets avec filtres
│   ├── about/
│   │   └── page.tsx        # À propos et compétences
│   ├── contact/
│   │   └── page.tsx        # Formulaire de contact
│   └── globals.css         # Styles globaux
├── components/
│   ├── Header.tsx          # Navigation
│   ├── Footer.tsx          # Pied de page
│   └── ProjectCard.tsx     # Composant projet
├── public/
│   └── images/             # Vos images de projets
└── package.json
```