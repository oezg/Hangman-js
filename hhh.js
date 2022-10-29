const input = require('sync-input')

const words = ["python", "java", "swift", "javascript"]

function game() {
    const word = words[Math.floor(Math.random() * words.length)]
    let guessed = "", missed = ""
    const mask = (w) => [...w].reduce((acc, ch) => acc + (guessed.includes(ch) ? ch : '-'), "");

    let nAttempts = 8
    while (nAttempts) {
        const ch = input(`\n${mask(word)}\nInput a letter: `)
        if (ch.length != 1) {
            console.log("Please, input a single letter.")
        } else if (!/[a-z]/.test(ch)) {
            console.log("Please, enter a lowercase letter from the English alphabet.")
        } else if (guessed.includes(ch) || missed.includes(ch)) {
            console.log("You've already guessed this letter.")
        } else if (word.includes(ch)) {
            guessed += ch
            if (!mask(word).includes('-')) break;
        } else {
            missed += ch
            console.log("That letter doesn't appear in the word.")
            nAttempts--
        }
    }
    console.log(nAttempts ? `You guessed the word ${word}!\nYou survived!` : "You lost!")
    return nAttempts > 0
}

console.log("H A N G M A N")
let won = 0, lost = 0;
while (true) {
    switch (input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ')) {
        case "play":
            game() ? won++ : lost++; break;
        case "results":
            console.log(`You won: ${won} times.\nYou lost: ${lost} times.`); break;
        case "exit":
            return
    }
}