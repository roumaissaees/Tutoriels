javascript
// ==============================================================
// Livrable : Exercices sur les fonctions
// Emplacement : algo/fonctions/exercices-fonctions/fonctions.js
// ==============================================================

// 1. Fonction de calcul
function calculerSurface(longueur, largeur) {
    return longueur * largeur;
}

// 2. Fonction de décision
function estGrand(surface) {
    return surface >= 100;
}

// 3. Exécution et exploitation des résultats
let surfacePiece = calculerSurface(12, 10);
let grandePiece = estGrand(surfacePiece);

console.log("Surface calculée : " + surfacePiece + " m²");
console.log("Grande pièce : " + grandePiece);

// --- Bilan personnel ---
// Une fonction de calcul renvoie une valeur numérique transformée.
// Une fonction de décision teste une règle et renvoie true ou false.
