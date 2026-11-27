<?php
require_once 'fonctions.php';

$articles = get_derniers_articles(); // un appel à une fonction
$categories = get_categories();

require_once  'index-template.php';
