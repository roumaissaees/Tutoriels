
// 1. Fonction de base : calcul de la somme
function calculerSomme(tableau) {
    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    return somme;
}

// 2. Composition : calculerMoyenne réutilise calculerSomme
function calculerMoyenne(tableau) {
    let somme = calculerSomme(tableau);

    return somme / tableau.length;
}

// 3. Fonction de sélection : recherche du maximum
function trouverMaximum(tableau) {
    let max = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }

    return max;
}

// 4. Orchestration du programme principal
let notes = [15, 12, 18, 11];

let moyenne = calculerMoyenne(notes);
let noteMax = trouverMaximum(notes);

console.log("=== BILAN DE CLASSE ===");
console.log("Moyenne : " + moyenne + " / 20");
console.log("Meilleure note : " + noteMax + " / 20");

