const primo = [2, 3, 53, 12, 6, 2, 123, 3, 12, 6, 2, 123, 3, 12, 6, 2, 123, 3, 12, 6, 2, 123];
const secondo = [3, 12, 6, 2, 123, 3, 12, 6, 2, 123];
let min;
let max;
if (primo.length < secondo.length) {
    min = primo;
    max = secondo;
} else {
    min = secondo;
    max = primo;
}
while (min.length < max.length) {
    min.push(Math.floor(Math.random() * 5) + 1);
}
console.log('minore', min.length);
console.log('maggiore', max.length);


