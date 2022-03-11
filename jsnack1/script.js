//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.
const numeri = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let somma = 0;
for (let index = 0; index < numeri.length; index++) {
    if (index % 2 !== 0) {
        somma += numeri[index];
    }
}
console.log("la somma è:" + somma);