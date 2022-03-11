let arrayFirst = [1, 2, 3, 4, 5, 6, 7, 8, 8];
let arraySecond = [1, 2, 3, 4, 5];
let i = 0;
let j = 0;
let numeroCasuale = 0;
for (i = 0; i < arrayFirst.length; i++) {
    if (arraySecond.length !== arrayFirst.length) {
        arraySecond.push(Math.floor(Math.random() * 10));
    }
}
console.log(arraySecond.length);