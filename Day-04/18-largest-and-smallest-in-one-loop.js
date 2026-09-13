// 18. Find largest and smallest in one loop

let numbers = [23, 7, 45, 12, 89, 3, 56];

let large = numbers[0];
let small = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > large) {
        large = numbers[i];
    }
    if (numbers[i] < small) {
        small = numbers[i];
    }
}

console.log(`Largest: ${large}`);
console.log(`Smallest: ${small}`);
