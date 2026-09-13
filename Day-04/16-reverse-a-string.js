// 16. Reverse a string

let word = "javascript";
let rev = "";

for (let i = word.length - 1; i >= 0; i--) {
    rev += word[i];
}

console.log(`Original word: ${word}`);
console.log(`Reversed word: ${rev}`);
