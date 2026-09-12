// 14. Count how many numbers are divisible by both 3 and 5

let numbers = [10, 15, 20, 30, 45, 50, 60, 72];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        console.log(`Divisible by 3 and 5: ${numbers[i]}`);
        count++;
    }
}

console.log(`Total count: ${count}`);
