//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.Esegui questo programma in due versioni, con il for e con il while.
let array = [];
let i = 0;
let somma = 0;
/* soluzione con il for */
for (i = 0; i < 5; i++) {
    let numero = parseInt(prompt("inserisci un numero"));
    somma += numero;
}
/* soluzione con il while
while (i !== 5) {
    let numero = parseInt(prompt("inserisci un numero"));
    somma += numero;
    i++;
}
*/
console.log(somma);

