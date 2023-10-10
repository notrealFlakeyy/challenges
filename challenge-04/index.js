const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let sum = 0;

function getNumber() {
    rl.question(`Enter number ${count + 1}: `, (input) => {
        const number = parseFloat(input);

        if (!isNaN(number)) {
            count++;
            sum += number;

            if (count < 5) {
                getNumber();
            } else {
                const average = sum / 5;
                console.log(`Average: ${average}`);
                rl.close();
            }
        } else {
            console.log('Invalid input. Please enter a valid number.');
            getNumber();
        }
    });
}

getNumber();
