//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.Esegui questo programma in due versioni, con il for e con il while.
let array = [];
let i = 0;
let somma = 0;

for (i = 0; i < 5; i++) {
    let numero = parseInt(prompt("inserisci un numero"));
    array.push(numero);
}
for (i = 0; i < array.length; i++) {
    somma += array[i];
}

console.log("la somma è:", somma);