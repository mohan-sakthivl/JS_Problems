// 10. Find the second largest number

let numbers = [10, 5, 8, 10, 3, 10, 7];
let flarg = -Infinity;
let slarg = -Infinity;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > flarg) {
        slarg = flarg;
        flarg = numbers[i];
    } else if (numbers[i] > slarg && numbers[i] < flarg) {
        slarg = numbers[i];
    }
}

console.log(`First largest: ${flarg}`);
console.log(`Second largest: ${slarg}`);
