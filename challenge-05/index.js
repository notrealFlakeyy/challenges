let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

console.log('Welcome to the Number Guessing Game!');
console.log('I have chosen a number between 1 and 100.');
console.log('You have unlimited attempts to guess the number. Good luck!');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleGuess(userGuess) {
    attempts++;

    if (userGuess < randomNumber) {
        console.log('Too low! Try again.');
        rl.prompt();
    } else if (userGuess > randomNumber) {
        console.log('Too high! Try again.');
        rl.prompt();
    } else {
        console.log(`Congratulations! You guessed the correct number: ${randomNumber}! It took you ${attempts} attempts.`);
        rl.close();
    }
}

rl.on('line', (input) => {
    handleGuess(parseInt(input));
});