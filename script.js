const prompt = require("prompt-sync")();

console.log("welcome to quiz!");

let correctAnswer = 0;
const totalQuestion = 3;
const answer1 = prompt("What is the brain in the computer?");
const correctAnswer1 = "CPU";

if (answer1.toUpperCase() === correctAnswer1) {
    console.log("nice your answer is correct!");
    correctAnswer++;
} else {
    console.log("something wrong!...");
    
}

const answer2 = prompt("What type of memory is volatile?");
const correctAnswer2 = "RAM";

if (answer2.toUpperCase() === correctAnswer2) {
    console.log("nice your answer is correct!");
    correctAnswer++;
} else {
    console.log("something wrong!...");
}

const answer3 = prompt("What is recommended amount of RAM for gamming in 2025?");
const correctAnswer3 = "32gb";

if (answer3.toLowerCase() === correctAnswer3) {
    console.log("nice your answer is correct!");
    correctAnswer++;
} else {
    console.log("something wrong!...");
}

const percent = Math.round((correctAnswer / totalQuestion) * 100);

console.log("you got", correctAnswer, "point for correct")
console.log("you got", percent.toString() + "%", "for answer correct!")
