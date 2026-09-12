// 9. Find the largest even number

let numbers = [7, 12, 5, 18, 3, 20, 9, 14];
let largEven = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        if (numbers[i] > largEven) {
            largEven = numbers[i];
        }
    }
}

console.log(`Largest even number: ${largEven}`);
