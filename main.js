// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let attempts = 8;

const words = Array.of("python", "java", "swift", "javascript");

const correct = words[Math.floor(Math.random() * words.length)]

let clue = new Array(correct.length).fill('-');

console.log("H A N G M A N");

for (let i = 0; i < attempts; i++) {
    console.log();
    console.log(clue.join(""));
    const letter = input("Input a letter: ")
    if (correct.includes(letter)) {
        for (let j = 0; j < correct.length; j++) {
            if (correct.charAt(j) == letter) {
                clue[j] = correct[j];
            }
        }
    } else {
        console.log("That letter doesn't appear in the word.")
    }
}

console.log();
console.log(("Thanks for playing!"))