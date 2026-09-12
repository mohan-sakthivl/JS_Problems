// 8. Find the sum of only the even numbers

let numbers = [5, 8, 2, 10, 3, 12];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sum += numbers[i];
    }
}

console.log(`Sum of even numbers: ${sum}`);
