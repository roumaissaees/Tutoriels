# Découpage du Sprint 5

## Mission globale

Créer une page PHP modulaire qui charge une liste d’articles stockée dans un tableau et l’affiche proprement dans la page d’accueil.

## Plan de travail découpé

| Étape | Action | Fichier cible | Condition de validation |
|:---:|---|---|---|
| 1 | Déclarer le tableau d’articles en PHP | `data/articles.php` | Le fichier contient un tableau `$articles` avec 3 entrées valides. |
| 2 | Écrire la fonction de formatage d’un article | `includes/functions.php` | La fonction prend un article en paramètre et renvoie du HTML propre. |
| 3 | Inclure les données et boucler dans la page | `index.php` | La boucle `foreach` parcourt le tableau sans erreur de syntaxe. |
| 4 | Recette visuelle et test dans le navigateur | Navigateur Web | Les 3 articles apparaissent à l’écran avec leur titre et résumé. |

## Vérification finale

La quatrième étape est obligatoirement consacrée à la recette visuelle et aux tests dans le navigateur.

Elle permet de vérifier que les trois articles s'affichent correctement avec leurs titres et leurs résumés, sans anomalie.