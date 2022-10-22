// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
// -- Declare --

const input = require('sync-input');

const alphabet = String.fromCharCode(...Array(123).keys()).slice(97);

const words = Array.of("python", "java", "swift", "javascript");

// -- Start --

console.log("H A N G M A N");

// -- Menu --

let choice = "play";
let count = 0;
let wins = 0;
while (choice !== "exit") {
    choice = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ');
    if (choice === "play") {
        wins += play();
        count++;
    } else if (choice === "results") {
        console.log(`You won: ${wins} times.`);
        console.log(`You lost: ${count - wins} times.`)
    }
}

// -- Game --

function play() {

    // -- Declare --

    let attempts = 8;

    const correct = words[Math.floor(Math.random() * words.length)];

    const clue = new Array(correct.length).fill('-');

    const alreadyGuessedLetters = [];

    // -- Loop --

    while (attempts > 0) {
        console.log();
        console.log(clue.join(""));
        const letter = input("Input a letter: ");

        // -- TODO ö, ü, ä, ß should not fail this test

        if (letter.length !== 1) {
            console.log("Please, input a single letter.");
            continue;
        }
        if (!alphabet.includes(letter)) {
            console.log("Please, enter a lowercase letter from the English alphabet.")
            continue;
        }
        if (alreadyGuessedLetters.includes(letter)) {
            console.log("You've already guessed this letter.");
            continue;
        }

        alreadyGuessedLetters.push(letter);
        if (correct.includes(letter)) {
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

    // -- Result --

    console.log();
    if (attempts > 0) {
        console.log(correct);
        console.log(`You guessed the word ${correct}!`);
        console.log("You survived!");
        return 1;
    } else {
        console.log("You lost!");
        return 0;
    }

}
