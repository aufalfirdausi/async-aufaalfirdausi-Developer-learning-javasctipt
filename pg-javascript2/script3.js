const prompt = require("prompt-sync")();

let wins = 0
let losses = 0
let ties = 0

while (true) {
const playerchoice = prompt("enter rock, paper, or scissior!. (or q for quit): ");
if (playerchoice.toLowerCase() === "q") {
    break;
}
if (
    playerchoice !== "rock" && 
    playerchoice !== "paper" && 
    playerchoice !== "scissors"
) {
    console.log("please enter a valid playerchoice!");
    continue;
}

const choices = ["rock", "paper", "scissors"]
const randomIndex = Math.round(Math.random() * 2)
const computerChoice = choices[randomIndex];
console.log("The computer chose:", computerChoice);

if (computerChoice === playerchoice) {
    console.log("Draw!")
    ties++;
} else if (
        (playerchoice === "paper" && computerChoice === "rock") || 
        (playerchoice === "rock" && computerChoice === "scissors") ||
        (playerchoice === "scissors" && computerChoice === "paper")
) {
    console.log("Won!")
    wins++
} else {
    console.log("Lose!")
    losses++;
}
}

console.log("Wins:", wins, "Losses:", losses, "Ties:", ties)