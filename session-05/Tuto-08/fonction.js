
// Transformation de l'algorithme de moyenne en fonction
function calculerMoyenne(notes) {
    let somme = 0;

    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }

    return somme / notes.length;
}

// Réutilisation sur deux séries de données distinctes
let groupeA = [12, 14, 16];
let groupeB = [10, 18, 11, 13];

console.log("Moyenne Groupe A : " + calculerMoyenne(groupeA));
console.log("Moyenne Groupe B : " + calculerMoyenne(groupeB));
