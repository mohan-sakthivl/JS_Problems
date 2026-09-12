// 1. Highest number in an array

let numbers = [12, 5, 18, 3, 25, 9];
let highnum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highnum) {
        highnum = numbers[i];
    }
}

console.log(`Highest number: ${highnum}`);
