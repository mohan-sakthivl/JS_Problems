// 11. Count numbers greater than the average

let numbers = [10, 20, 30, 40, 50];
let sum = 0;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let avg = sum / numbers.length;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > avg) {
        console.log(`Number greater than avg (${avg}): ${numbers[i]}`);
        count++;
    }
}

console.log(`Sum: ${sum}`);
console.log(`Average: ${avg}`);
console.log(`Total count greater than average: ${count}`);
