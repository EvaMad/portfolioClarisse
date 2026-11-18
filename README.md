# 🏗️ Portfolio Architecture Professionnel

Un site vitrine moderne et élégant pour valoriser votre formation en architecture. Réalisé avec **Next.js 15**, **React 19**, **TypeScript** et **Tailwind CSS**.

## ✨ Caractéristiques

- 🎨 **Design moderne et dynamique** - Gradients, animations subtiles, section hero inspirante
- 📱 **100% Responsive** - Fonctionne parfaitement sur tous les appareils
- ⚡ **Ultra rapide** - Optimisé avec Next.js et Vercel
- 🎯 **SEO Ready** - Métadonnées optimisées pour Google
- 🎪 **4 pages complètes** - Accueil, Projets, À propos, Contact
- 🏷️ **Galerie avec filtres** - Organisez vos projets par catégorie
- 📧 **Formulaire de contact** - Avec validation et message de succès
- 🎓 **Timeline du parcours** - Visualisez votre évolution (5 ans d'études)
- 💼 **Section compétences** - Mettez en avant vos skills

## 🚀 Démarrage Rapide

```bash
# 1. Accéder au dossier
cd portfolio-architecture

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir http://localhost:3000
```

## 📁 Structure du Projet

```
portfolio-architecture/
├── app/
│   ├── layout.tsx              # Mise en page globale
│   ├── page.tsx                # Accueil (Hero + Projects)
│   ├── projects/
│   │   └── page.tsx            # Galerie avec filtres
│   ├── about/
│   │   └── page.tsx            # À propos + Timeline
│   ├── contact/
│   │   └── page.tsx            # Contact + Formulaire
│   └── globals.css             # Styles globaux
├── components/
│   ├── Header.tsx              # Navigation responsive
│   ├── Footer.tsx              # Pied de page
│   └── ProjectCard.tsx         # Composant projet
├── public/
│   └── images/                 # Vos images de projets
├── GUIDE.md                    # Guide détaillé
├── INSTALLATION.md             # Guide d'installation & déploiement
└── package.json
```
