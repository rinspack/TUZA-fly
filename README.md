# TUZA fly — V1 (interface de départ)

Cette archive contient une première interface responsive de TUZA fly, réalisée avec Next.js, React et TypeScript.

## Ce qui fonctionne dans cette maquette
- Interface d'accueil responsive (ordinateur et mobile)
- Navigation visuelle
- Champ de création de publication (ajout local dans la page)
- Bouton J'aime (état local)
- Boutons Suivre (état local)
- Suggestions, tendances et fil d'actualité de démonstration

## Ce qui n'est pas encore connecté
Cette V1 est une **base d'interface**, pas encore un réseau social prêt à accueillir de vrais membres. Les comptes, mots de passe, publications persistantes, images téléversées, abonnements réels, messages, lives, boutique, paiements, portefeuille et IA nécessitent le backend et des services dédiés.

## Installation
Prérequis : Node.js 20 ou supérieur.

```bash
npm install
npm run dev
```

Ouvrir ensuite http://localhost:3000.

## Étape suivante
Créer un projet Supabase, renseigner les variables de `.env.example` dans un fichier `.env.local`, puis connecter l'authentification, les profils et les publications. Ne jamais placer de clé secrète dans le code côté navigateur.

## Personnalisation
- Interface : `app/page.tsx`
- Couleurs, mise en page et responsive : `app/globals.css`
- Titre et métadonnées : `app/layout.tsx`

Les textes, couleurs, exemples de profils et contenus de démonstration sont modifiables.
