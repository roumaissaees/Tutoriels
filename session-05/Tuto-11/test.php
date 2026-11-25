<?php
require_once 'fonctions.php';

$articles = get_derniers_articles();
$categories = get_categories();

echo "Articles trouvés : " . count($articles) . "\n";
echo "Catégories trouvées : " . count($categories) . "\n";

