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

## 🎨 Pages Principales

### 🏠 Accueil (`/`)
- Hero section dynamique avec gradient animé
- Aperçu de vos 4 derniers projets
- Call-to-action pour découvrir plus

### 📂 Projets (`/projects`)
- Galerie complète de 5 projets
- **Filtres par catégorie:** Commercial, Résidentiel, Administratif, Culturel, Éducation
- Cartes interactives avec hover effects

### 👤 À Propos (`/about`)
- Présentation personnelle
- **Timeline** de votre parcours (2021-2024)
- **4 catégories de compétences:**
  - Conception (AutoCAD, Revit, SketchUp, BIM)
  - Visualisation (V-Ray, Lumion, Adobe)
  - Domaines (Architecture, Design durable, Urbanisme)
  - Compétences (Gestion, 3D, Réglementation)
- Boutons email, LinkedIn et CV

### 📧 Contact (`/contact`)
- Informations de contact (Email, Téléphone, Localisation)
- **Formulaire fonctionnel** avec validation
- Liens vers réseaux sociaux

## 🛠️ Personnalisation

### Mettre à jour vos informations
Éditer `components/Footer.tsx` et `app/contact/page.tsx`:
```tsx
// Remplacez :
votre.email@example.com
+33 (0)1 23 45 67 89
// Par vos vraies coordonnées
```

### Ajouter vos projets
Éditer `app/projects/page.tsx` et modifiez l'array `projects[]`

### Ajouter des images
1. Créez `public/images/`
2. Mettez-y vos images
3. Importez-les dans `ProjectCard.tsx`

**Plus de détails:** Consultez [INSTALLATION.md](./INSTALLATION.md)

## 🌐 Déploiement

### Vercel (Recommandé - 2 minutes)
```bash
# 1. Pousser sur GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Aller sur vercel.com
# 3. Importer le repository
# 4. Cliquer "Deploy" ✨
```

### Netlify
1. Pousser sur GitHub
2. Connecter à [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish: `.next`

**Plus d'options:** Voir [INSTALLATION.md](./INSTALLATION.md)

## 📦 Technologies

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utility-first
- **Lucide Icons** - Icônes SVG

## 📝 Commandes

```bash
# Développement
npm run dev          # Lancer le serveur local

# Production
npm run build        # Build pour production
npm start            # Lancer la version production
npm run lint         # Vérifier les erreurs

# Nettoyage
rm -rf node_modules .next
npm install          # Réinstaller les dépendances
```

## 📱 Responsive

Testé et optimisé pour:
- 📱 Mobiles (iPhone, Android)
- 🖥️ Tablettes (iPad)
- 🖥️ Desktops (1080p, 1440p, 4K)

## 🎯 Checklist Avant Publication

- [ ] Vos vraies infos de contact
- [ ] 5 vos vrais projets
- [ ] Images des projets ajoutées
- [ ] Titre et description SEO
- [ ] Email et LinkedIn à jour
- [ ] Testé sur mobile
- [ ] Pas d'erreurs (`npm run build`)
- [ ] Déployé sur Vercel/Netlify

## 📚 Documentation

- **[INSTALLATION.md](./INSTALLATION.md)** - Guide complet d'installation et déploiement
- **[GUIDE.md](./GUIDE.md)** - Guide technique détaillé
- **[Next.js Docs](https://nextjs.org/docs)** - Documentation officielle

## 🆘 Problèmes Courants

**Le site ne démarre pas:**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Images ne s'affichent pas:**
- Chemin doit commencer par `/images/`
- Fichiers dans `public/images/`

**Erreurs de build:**
```bash
npm run lint  # Voir les erreurs ESLint
npm run build # Vérifier la build
```

## 💡 Prochaines Étapes

1. ✅ Personnaliser avec vos infos
2. ✅ Ajouter vos images
3. ✅ Mettre à jour vos projets
4. ✅ Déployer sur Vercel
5. 🔄 Ajouter un blog (optionnel)
6. 🌙 Ajouter le mode sombre (optionnel)

## 📞 Support

- Consultez [INSTALLATION.md](./INSTALLATION.md)
- Lisez la [documentation Next.js](https://nextjs.org/docs)
- Vérifiez les issues [GitHub](https://github.com/vercel/next.js)

## 📄 Licence

Libre d'utilisation pour votre usage personnel.

---

**Prêt à montrer vos projets au monde?** 🌍  
Lancez, personnalisez et déployez en minutes!

Bonne chance avec votre carrière en architecture! 🏗️✨
