// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const words = Array.of("python", "java", "swift", "javascript");

const correct = words[Math.floor(Math.random() * words.length)]

console.log("H A N G M A N");

const answer = input("Guess the word: ");

if (answer == correct) {
    console.log("You survived!");
} else {
    console.log("You lost!")
}