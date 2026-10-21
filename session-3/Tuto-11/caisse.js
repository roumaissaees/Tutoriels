let panier = [15, 42, 5, 89, 12, 50, 8];
let sum = 0;
let counter =0;
let sumChers = 0;
for (let i=0 ; i < panier.length ;i++){
    sum = sum + panier[i];

    if (panier[i] >= 20) {
         counter++; 
         sumChers = sumChers + panier[i];
    }
}
console.log("Total du panier :", sum);
 console.log("Nombre d'articles chers :", counter);
  console.log("Montant des articles chers :", sumChers);
