// 12. Count numbers smaller than the average

let numbers = [5, 15, 25, 35, 45];
let sum = 0;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let avg = sum / numbers.length;
console.log(`Average: ${avg}`);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < avg) {
        console.log(`Number smaller than avg (${avg}): ${numbers[i]}`);
        count++;
    }
}

console.log(`Total count smaller than average: ${count}`);
