// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let attempts = 8;

const words = Array.of("python", "java", "swift", "javascript");

const correct = words[Math.floor(Math.random() * words.length)];

let clue = new Array(correct.length).fill('-');

let correctlyGuessedLetters = [];

console.log("H A N G M A N");

while (attempts > 0) {
    console.log();
    console.log(clue.join(""));
    const letter = input("Input a letter: ");
    if (correctlyGuessedLetters.includes(letter)) {
        console.log("No improvements.");
        attempts--;
    } else if (correct.includes(letter)) {
        correctlyGuessedLetters.push(letter);
        for (let j = 0; j < correct.length; j++) {
            if (correct.charAt(j) === letter) {
                clue[j] = correct[j];
            }
        }
        if (!clue.includes('-')) {
            break;
        }
    } else {
        console.log("That letter doesn't appear in the word.");
        attempts--;
    }
}

console.log();
if (attempts > 0) {
    console.log(correct);
    console.log("You guessed the word!");
    console.log("You survived!");
} else {
    console.log("You lost!");
}