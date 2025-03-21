# Club français des cryptomonnaies (CFC)

Site web du Club français des cryptomonnaies, la principale communauté crypto française.

## Technologies utilisées

- [Next.js 15](https://nextjs.org/) - Framework React moderne avec server-side rendering et optimisations de performance
- [React 19](https://reactjs.org/) - Bibliothèque JavaScript pour construire des interfaces utilisateur
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript typé
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first 
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI réutilisables basés sur Radix UI
- [Resend](https://resend.com/) - API d'e-mail pour le formulaire de contact
- [Bun](https://bun.sh/) - Runtime JavaScript et gestionnaire de paquets

## Fonctionnalités

- Design responsive mobile-first
- Navigation avec menu hamburger sur mobile
- Sections de présentation:
  - Hero section avec appel à l'action
  - Section Statistiques (membres, événements, partenariats)
  - Section Témoignages avec carousel
  - Section À propos
  - Section Équipe
  - Formulaire de contact avec intégration Resend
  - Pied de page avec liens et médias sociaux

## Développement

```bash
# Installer les dépendances
bun install

# Lancer le serveur de développement
bun run dev

# Construire pour la production
bun run build

# Démarrer le serveur de production
bun run start
```

## Configuration de l'API d'e-mail

Pour que le formulaire de contact envoie des e-mails, suivez ces étapes:

1. Créez un compte sur [Resend](https://resend.com)
2. Générez une clé API depuis le tableau de bord
3. Créez un fichier `.env.local` à la racine du projet avec:
   ```
   RESEND_API_KEY=re_votreCléAPI
   ```
4. Redémarrez le serveur de développement

Par défaut, les e-mails sont envoyés à `cfc.servicecom@gmail.com`. Vous pouvez modifier cette adresse dans le fichier `app/api/send/route.ts`.

## Structure du projet

- `/app` - Composants de page et layout principal
  - `/components` - Composants réutilisables du site
  - `/api` - Routes API pour les fonctionnalités back-end
- `/components` - Composants d'UI réutilisables (shadcn/ui)
- `/public` - Fichiers statiques (images, etc.)

## Déploiement

Ce site peut être facilement déployé sur des plateformes comme Vercel, Netlify ou tout autre service supportant Next.js.

## License

[MIT](LICENSE)

---

© Club français des cryptomonnaies
