let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let somme = 0;
let max = ventes[0];
let min = ventes[0];
let compteur = 0;
let sommeExceptionnelles = 0;

for ( let i=0 ; i<ventes.length; i++){
      let vente = ventes[i];

      somme = somme + vente;
      
      if (max <  vente){
        max = vente;
      }
        if (min > vente){
            min = vente;
        }
        if (vente >= 130) {
             compteur++;
             sommeExceptionnelles = sommeExceptionnelles + vente;
             } 

}

console.log("Nombre de ventes :", ventes.length);
console.log("Chiffre d'affaires total :", somme); 
console.log("Maximum :", max); 
console.log("Minimum :", min);
console.log("Nombre de ventes exceptionnelles :", compteur);
console.log("Chiffre d'affaires exceptionnel :", sommeExceptionnelles);