# 🏗️ Portfolio Architecture - Guide d'Installation et de Déploiement

Votre portfolio d'architecture professionnel est prêt ! Ce guide vous aide à le personnaliser et le déployer.

## 📸 Aperçu du Portfolio

### Pages Incluses
✅ **Accueil** - Hero section inspirante avec aperçu des projets  
✅ **Projets** - Galerie complète avec filtres par catégorie  
✅ **À Propos** - Timeline du parcours + compétences  
✅ **Contact** - Formulaire + informations de contact  

## 🚀 Installation Locale

### Prérequis
- Node.js 18+ ([télécharger](https://nodejs.org))
- npm ou yarn

### Étapes

1. **Naviguer dans le dossier du projet**
   ```bash
   cd portfolio-architecture
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   - Allez à `http://localhost:3000`

## 🎨 Personnalisation

### 1️⃣ Mettre à Jour Vos Informations Personnelles

**Localisation:** `components/Footer.tsx` et `app/contact/page.tsx`

Remplacez:
```tsx
votre.email@example.com
+33 (0)1 23 45 67 89
Paris, France
```

Par vos vraies coordonnées.

### 2️⃣ Modifier Vos Projets

**Localisation:** `app/projects/page.tsx`

Mettez à jour l'array `projects`:
```tsx
const projects: Project[] = [
  {
    id: 1,
    title: "Votre Projet",
    description: "Description de votre projet",
    category: "Commercial", // Ou: Résidentiel, Administratif, Culturel, Éducation
    year: 2024,
  },
  // Ajoutez ou modifiez vos projets ici
];
```

### 3️⃣ Ajouter des Images

1. Créez un dossier `public/images/`
2. Mettez-y vos images de projets
3. Dans `components/ProjectCard.tsx`, remplacez le placeholder:

```tsx
// Avant (placeholder):
<div className="relative h-72 bg-gradient-to-br from-gray-300 to-gray-400">

// Après (avec image):
<Image
  src="/images/projet-1.jpg"
  alt="Titre du projet"
  fill
  className="object-cover"
/>
```

### 4️⃣ Personnaliser le Design

**Couleurs principales** dans les fichiers:
- Bleu primaire: `#2563eb` (blue-600)
- Gradient: `from-blue-600 to-purple-600`

Pour changer la palette:
1. Modifiez `tailwind.config.ts`
2. Remplacez les classes Tailwind (ex: `bg-blue-600` → `bg-indigo-600`)

### 5️⃣ Modifier le Titre du Site

**Localisation:** `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Votre Nom - Portfolio Architecture",
  description: "Architecte passionné par...",
};
```

## 📱 Responsive Design

Le site s'adapte automatiquement à:
- 📱 Mobiles (< 640px)
- 🖥️ Tablettes (640px - 1024px)
- 🖥️ Desktops (> 1024px)

## 🧪 Vérification Avant Déploiement

```bash
# Vérifier les erreurs ESLint
npm run lint

# Build de production
npm run build

# Lancer la version production locale
npm start
```

## 🌐 Déploiement

### Option 1: Sur Vercel (Recommandé - Gratuit)

**Le plus simple et le plus rapide!**

1. Poussez votre code sur [GitHub](https://github.com)
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. Allez sur [vercel.com](https://vercel.com)

3. Cliquez sur **"New Project"**

4. Sélectionnez votre repository

5. Vercel va auto-détecter Next.js

6. Cliquez **"Deploy"**

**Votre site sera live en 2 minutes!** 🎉

### Option 2: Sur Netlify

1. Poussez sur GitHub
2. Allez sur [netlify.com](https://netlify.com)
3. Cliquez **"Add new site"** → **"Import an existing project"**
4. Sélectionnez votre repository GitHub
5. Build command: `npm run build`
6. Publish directory: `.next`

### Option 3: Sur un Serveur Personnel

```bash
# Build
npm run build

# Déployer le dossier .next sur votre serveur
# Utilisez Node.js pour lancer: npm start
```

## 📧 Configuration du Formulaire de Contact

Le formulaire actuel affiche un message de succès local.

Pour recevoir les emails réellement, intégrez un service:
- **Formspree** (gratuit) - [formspree.io](https://formspree.io)
- **SendGrid**
- **EmailJS**

## 🔍 SEO - Optimiser pour Google

Modifiez `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Votre Nom - Architecte Portfolio",
  description: "Portfolio d'architecture avec 5 ans de formation. Projets innovants et durables.",
  keywords: "architecture, portfolio, bâtiment, design, construction",
};
```

## 🎯 Checklist Avant Publication

- [ ] Vos vraies informations de contact
- [ ] Vos vrais projets avec descriptions
- [ ] Images des projets ajoutées
- [ ] Titre et description SEO personnalisés
- [ ] Email et LinkedIn mis à jour
- [ ] Liens sociaux corrects
- [ ] Testé sur mobile
- [ ] Pas d'erreurs de build (`npm run build`)

## 📚 Références & Ressources

**Documentation officielle:**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

**Inspiration de portfolios:**
- [Awwwards](https://www.awwwards.com)
- [Dribbble](https://dribbble.com)
- [Behance](https://www.behance.net)

## 🆘 Troubleshooting

### Le site ne se lance pas
```bash
# Supprimer cache et réinstaller
rm -rf node_modules .next
npm install
npm run dev
```

### Images ne s'affichent pas
- Vérifiez que le chemin commence par `/images/`
- Les images doivent être dans `public/images/`

### Erreur de build
```bash
npm run lint  # Voir les erreurs
npm run build # Vérifier la build complète
```

## 💡 Prochaines Étapes Recommandées

1. **Ajouter un blog** - Créez `app/blog/` avec vos articles
2. **Mode sombre** - Utilisez `next-themes`
3. **Analytics** - Intégrez Google Analytics ou Plausible
4. **Certificats SSL** - Vercel et Netlify les incluent gratuitement
5. **Domaine personnalisé** - Configurez votre propre domaine

## 📞 Support

Si vous avez des questions:
1. Consultez le [GUIDE.md](./GUIDE.md)
2. Lisez la [documentation Next.js](https://nextjs.org/docs)
3. Vérifiez les [Issues GitHub](https://github.com/vercel/next.js/issues)

---

**Prêt à montrer votre travail au monde?** 🌍  
Lancez votre portfolio et partagez le lien!

Bonne chance avec votre carrière en architecture! 🏗️✨
