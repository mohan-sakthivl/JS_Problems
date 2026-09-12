// 4. Count how many even numbers are in the array

let numbers = [4, 7, 2, 9, 6, 3, 8, 5];
let evennum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evennum += 1;
    }
}

console.log(`The Total even numbers are in the array is ${evennum}`);
