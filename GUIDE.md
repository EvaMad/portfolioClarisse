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

## 🎨 Pages Principales

### 1. **Accueil** (`/`)
- Hero section avec présentation
- Aperçu de vos projets récents
- Section CTA pour encourager le contact

### 2. **Projets** (`/projects`)
- Galerie complète de 5 projets
- Système de filtrage par catégorie
- Cartes de projets interactives

### 3. **À Propos** (`/about`)
- Présentation personnelle
- Timeline de votre parcours (5 ans d'études)
- Section compétences organisée
- Liens de contact (email, LinkedIn, CV)

### 4. **Contact** (`/contact`)
- Formulaire de contact fonctionnel
- Informations de contact (email, téléphone, localisation)
- Liens vers les réseaux sociaux

## 🔧 Personnalisation

### Mettre à jour les informations personnelles

**Dans `components/Footer.tsx` et `app/contact/page.tsx`:**
```tsx
// Remplacez :
votre.email@example.com
+33 (0)1 23 45 67 89
// Par vos vraies informations
```

### Modifier les projets

**Dans `app/projects/page.tsx`, mettez à jour l'array `projects`:**
```tsx
const projects: Project[] = [
  {
    id: 1,
    title: "Votre Projet",
    description: "Description du projet",
    category: "Commercial",
    year: 2024,
  },
  // ...
];
```

### Ajouter des images

1. Placez vos images dans `public/images/`
2. Dans `components/ProjectCard.tsx`, remplacez le placeholder par une vraie image:
```tsx
// À la place de :
<div className="relative h-72 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">

// Utilisez :
<Image
  src="/images/votre-projet.jpg"
  alt="Titre du projet"
  fill
  className="object-cover"
/>
```

### Personnaliser les couleurs

**Dans le fichier `tailwind.config.ts`:**
```js
theme: {
  extend: {
    colors: {
      primary: '#votre-couleur',
      secondary: '#votre-couleur',
    },
  },
},
```

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte à tous les appareils :
- 📱 Mobile (< 640px)
- 🖥️ Tablette (640px - 1024px)
- 🖥️ Desktop (> 1024px)

## ⚙️ Configuration

### Métadonnées SEO

**Dans `app/layout.tsx`:**
```tsx
export const metadata: Metadata = {
  title: "Votre Nom - Portfolio Architecture",
  description: "Votre description",
  keywords: "architecture, bâtiment, design",
};
```

## 🚀 Déploiement

### Sur Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Importez votre repository
4. Cliquez sur "Deploy"

### Commandes utiles

```bash
# Build pour production
npm run build

# Lancer la version production locale
npm start

# Vérifier les erreurs ESLint
npm run lint
```

## 🎯 Fonctionnalités Incluses

✅ Design moderne et professionnel  
✅ Navigation fluide et responsive  
✅ Galerie de projets avec filtres  
✅ Formulaire de contact fonctionnel  
✅ Timeline du parcours  
✅ Section compétences organisée  
✅ Liens vers réseaux sociaux  
✅ Optimisé pour SEO  
✅ Animations subtiles  
✅ Mode sombre prêt (à implémenter)  

## 📚 Technologies Utilisées

- **Next.js 15+** - Framework React
- **React 19+** - Librairie UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icônes SVG

## 🤔 Besoin d'aide ?

### Ajouter une nouvelle page

1. Créez un dossier dans `app/`
2. Créez `page.tsx` dedans
3. Importez les composants nécessaires

### Modifier la palette de couleurs

Les principales couleurs utilisées :
- Bleu primaire: `#2563eb`
- Gradient: `from-blue-600 to-purple-600`
- Texte sombre: `#111827`
- Fond clair: `#f3f4f6`

### Questions ?

N'hésitez pas à consulter la [documentation Next.js](https://nextjs.org/docs) ou [Tailwind CSS](https://tailwindcss.com/docs).

---

**Bon développement ! 🎨**
