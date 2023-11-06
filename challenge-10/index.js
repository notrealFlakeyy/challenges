const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log('Invalid input. Please enter a valid number.');
    } else {
        console.log(`Factors of ${number}:`);
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                console.log(i);
            }
        }
    }

    rl.close();
});
