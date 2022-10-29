// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages

String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) return this.valueOf();
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

const input = require('sync-input')
const worlds = ["python", "java", "swift", "javascript"]


let attempts = 8;
let letter = '';
let letterInputAll = '';
const re = new RegExp('[a-z]');

let lostGame = 0;
let wonGame = 0;

console.log(`H A N G M A N`)  // ${attempts} attempts
init();

function init() {
    let exit = true;
    while (exit) {
        let inputAction = input('Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit: ');
        switch (inputAction) {
            case "play":
                game(attempts);
                break;
            case "results":
                console.log(`You won: ${wonGame} times.\nYou lost: ${lostGame} times.`)
                break;
            case "exit":
            case "e":
                console.log('Goodbye!');
                exit = false;
                break;
            default:
                console.log('Please, choose one of the possible actions');
                break;
        }
    }
}


function game(attempts) {
    let worldRND = getRndEl(worlds);
    let mask = '-'.repeat(worldRND.length);
    letterInputAll = '';
    // lostGame = 0;
    // wonGame = 0;
    while (attempts--) {
        letter = input(`\n${mask}\nInput a letter: `);

        if (!validateLetter(letter)) {
            attempts++;
            continue;
        }

        if (worldRND.includes(letter)) {
            for (let ind = worldRND.indexOf(letter); ind < worldRND.length; ind++) {
                if (worldRND[ind] === letter) mask = mask.replaceAt(ind, letter);
            }
            attempts++;
        } else {
            console.log(`That letter doesn't appear in the word.  // ${attempts} attempts`)
        }

        if (!attempts) {
            console.log("You lost!");
            lostGame += 1;
        }
        if (worldRND === mask) {
            console.log(`You guessed the word ${worldRND}!\nYou survived!`);
            wonGame += 1;
            break;
        }
        letterInputAll += letter;
    }
}

function validateLetter(letter) {
    if (!letter || letter.length > 1) {
        console.log("Please, input a single letter.");
        return false;
    }

    if (!re.test(letter)) {
        console.log("Please, enter a lowercase letter from the English alphabet.");
        return false;
    }

    if (letterInputAll.includes(letter)) {
        console.log("You've already guessed this letter.");
        if (!attempts) console.log("You lost!");
        return false;
    }

    return true;
}

function getRndEl(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}