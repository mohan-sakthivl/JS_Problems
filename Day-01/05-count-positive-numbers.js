// 5. Count positive numbers

let numbers = [-3, 5, -1, 8, 0, 4, -7, 2];
let positive = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positive++;
    }
}

console.log(`Positive numbers count: ${positive}`);
