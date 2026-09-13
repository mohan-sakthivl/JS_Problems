// 17. Count vowels in a string

let word = "javascript";
let count = 0;

for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {
        count++;
    }
}

console.log(`Word: ${word}`);
console.log(`Total vowels count: ${count}`);
