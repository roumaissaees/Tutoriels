<?php
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Articles</title>
</head>

<body>

    <main>
        <h1>Nos articles</h1>

        <div class="grille-articles">

            <?php foreach ($articles as $article): ?>

                <article class="carte-article">

                    <div class="carte-contenu">

                        <?php if ($article['id'] == 1): ?>
                            <small class="badge-special">⭐ À la une</small>
                        <?php endif; ?>

                        <h3>
                            <a href="article.php?id=<?= $article['id'] ?>">
                                <?= htmlspecialchars($article['titre']) ?>
                            </a>
                        </h3>

                        <p>
                            <?= htmlspecialchars(mb_substr($article['contenu'], 0, 100)) ?>...
                        </p>

                        <span class="etiquette-categorie <?php if ($article['categorie_couleur'] == 'bleu'): ?>bleu<?php else: ?>rose<?php endif; ?>">
                            <?= htmlspecialchars($article['categorie_libelle']) ?>
                        </span>

                        <div class="carte-meta">
                            <span>
                                <?= date('d M Y', strtotime($article['date_creation'])) ?>
                            </span>
                            <span>5 min</span>
                        </div>

                    </div>

                </article>

            <?php endforeach; ?>

        </div>
    </main>

</body>
</html>