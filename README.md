# Site EBAS – Bureau d'études structure

Site vitrine statique (HTML / CSS / JavaScript, sans dépendance ni étape de compilation).

## Structure

```
index.html            Page d'accueil (accueil, à propos, services, contact)
mentions-legales.html Mentions légales (à compléter)
css/style.css         Styles (couleurs dans les variables :root)
js/main.js            Menu mobile, lien actif, envoi du formulaire
assets/logo-ebas.jpg  Logo
```

## Aperçu local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```
python3 -m http.server 8000
```

puis aller sur http://localhost:8000.

## Formulaire de contact

Le formulaire envoie les messages vers [Formspree](https://formspree.io) (gratuit pour un faible volume) :

1. Créer un formulaire sur formspree.io et récupérer son identifiant (`https://formspree.io/f/xxxxxxx`).
2. Remplacer `VOTRE_ID` dans l'attribut `action` du formulaire dans `index.html`.

Tant que `VOTRE_ID` n'est pas remplacé, le site affiche un message invitant à écrire par email.

## Carte

La carte Google Maps pointe sur : 24 rue Voltaire, 78390 Bois-d'Arcy. Modifier l'adresse dans le `src` de l'iframe et dans le lien « Itinéraire » si elle change.

## Mise en ligne (GitHub Pages)

1. Pousser ce dépôt sur GitHub.
2. Dans le dépôt : Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Le site est alors disponible à l'adresse `https://<utilisateur>.github.io/<nom-du-depot>/`.

Pour un nom de domaine personnalisé (ex. ebas-structure.fr), ajouter un fichier `CNAME` à la racine et configurer le DNS chez le registrar.

## À compléter avant mise en ligne

- Mentions légales (SIREN/SIRET, forme juridique, responsable de publication, hébergeur).
- Identifiant Formspree.
- Numéro de téléphone et adresse email de contact (`index.html`, section Nous contacter : remplacer `[numéro à compléter]`, `[email à compléter]` et les valeurs `tel:` / `mailto:`).
- Vidéo de fond : ajouter `assets/hero.mp4` (sinon le dégradé s'affiche).
- Vérifier les textes de la section « Maîtrise d'œuvre » et les formulations de la section « À propos ».
- Remplacer le logo par une version haute résolution si disponible (le fichier actuel fait 500 × 500 px).
