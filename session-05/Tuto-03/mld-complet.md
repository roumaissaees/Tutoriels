# Modèle Logique de Données (MLD) complet — Blog

## Table : VILLE
- id_ville (PK)
- nom_ville

## Table : AUTEUR
- id_auteur (PK)
- nom_auteur
- prenom_auteur
- email_auteur
- id_ville (FK)

## Table : CATEGORIE
- id_categorie (PK)
- nom_categorie

## Table : TAG
- id_tag (PK)
- nom_tag

## Table : ARTICLE
- id_article (PK)
- titre_article
- contenu_article
- date_publication
- statut_article
- image_article
- id_auteur (FK)
- id_categorie (FK)

## Table : ARTICLE_TAG
- id_article (PK, FK)
- id_tag (PK, FK)