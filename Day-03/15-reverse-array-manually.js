// 15. Reverse an array manually

let numbers = [10, 20, 30, 40, 50];

// Approach 1: Top to bottom (vertical)
console.log("Top to bottom (vertical):");
for (let i = numbers.length - 1; i >= 0; i--) {
    let rev = numbers[i];
    console.log(rev);
}

// Approach 2: Single line (horizontal)
console.log("\nSingle line (horizontal):");
let rev = "";
for (let i = numbers.length - 1; i >= 0; i--) {
    rev += numbers[i] + " ";
}
console.log(rev.trim());
