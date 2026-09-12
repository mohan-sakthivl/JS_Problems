// 2. Smallest number in an array

let numbers = [12, 5, 18, 3, 25, 9];
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (smallest > numbers[i]) {
        smallest = numbers[i];
    }
}

console.log(`Smallest number: ${smallest}`);
