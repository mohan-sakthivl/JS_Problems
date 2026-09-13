// 20. Sum numbers greater than 10

let numbers = [5, 15, 8, 20, 3, 25, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        sum += numbers[i];
    }
}

console.log(`Sum of numbers greater than 10: ${sum}`);
