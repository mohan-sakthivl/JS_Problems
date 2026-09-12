// 3. Count how many times 2 appears in the array

let numbers = [7, 2, 9, 2, 5, 2];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 2) {
        count += 1;
    }
}

console.log(`The number of times the 2 appears is ${count}`);
