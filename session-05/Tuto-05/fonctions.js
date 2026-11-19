// ==============================================================
// Livrable : Créer et appeler des fonctions
// Emplacement : algo/fonctions/creer-appeler-fonction/fonctions.js
// ==============================================================

// Déclaration des fonctions en camelCase
function afficherFin() {
    console.log("=== Session terminée ===");
}

function afficherDemarrage() {
    console.log("=== Démarrage du système ===");
    console.log("Statut : Opérationnel");
}

// Les appels pilotent l'ordre réel d'exécution
afficherDemarrage();
afficherFin();

// --- Bilan personnel ---
// L'ordre d'écriture dans le fichier ne change rien :
// c'est uniquement l'ordre des appels qui dicte l'ordre d'exécution du programme.