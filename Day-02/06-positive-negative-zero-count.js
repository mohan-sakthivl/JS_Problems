// 6. Find three things in ONE loop: positive, negative, and zero counts

let numbers = [-3, 5, -1, 8, 0, 4, -7, 2];

let positive = 0;
let negative = 0;
let zero = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positive++;
    } else if (numbers[i] < 0) {
        negative++;
    } else {
        zero++;
    }
}

console.log(`Positive count: ${positive}`);
console.log(`Negative count: ${negative}`);
console.log(`Zero count: ${zero}`);
