const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);

let guesses = 0;


while (true) {
guesses++;

const guess = Number(prompt("Guess the number (0-100): " ));

if (guess > target) {
    console.log("your guess is soo high");
    continue
} else if ( guess < target) {
    console.log("your guess is soo low");
    continue
}
    console.log("your guess is correct!...");
    break
}  

console.log("your guesses the number is", guesses, "tries!")