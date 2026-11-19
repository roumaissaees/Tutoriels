// ==============================================================
// Livrable : Utiliser les paramètres et le retour
// Emplacement : algo/fonctions/utiliser-parametres-retour/fonctions.js
// ==============================================================

// Déclaration de la fonction avec paramètres et retour
function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}

// Appel avec arguments et récupération de la valeur retournée
let total = calculerTotal(25, 4);

console.log("Total calculé : " + total + " DH");

// --- Bilan personnel ---
// console.log() affiche une information dans le terminal mais ne renvoie rien.
// return renvoie une valeur que le programme peut stocker dans une variable et réutiliser.