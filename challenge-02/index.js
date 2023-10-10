const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a positive integer: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number) || number < 0) {
        console.log('Error! Please enter a valid positive integer.');
        rl.close();
    } else if (number === 0) {
        console.log(`The factorial of ${number} is 1.`);
        rl.close();
    } else {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${number} is ${fact}.`);
        rl.close();
    }
});
