// 13. Find the difference between largest and smallest

let numbers = [12, 5, 18, 3, 25, 9];
let largest = numbers[0];
let smallest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

let diff = largest - smallest;

console.log(`Largest: ${largest}`);
console.log(`Smallest: ${smallest}`);
console.log(`Difference: ${diff}`);
