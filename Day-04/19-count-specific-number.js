// 19. Count occurrences of a specific number (5)

let numbers = [2, 5, 2, 8, 5, 2, 9, 5];
let count = 0;
let target = 5;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        count++;
    }
}

console.log(`Target: ${target}`);
console.log(`Occurrences of ${target}: ${count}`);
