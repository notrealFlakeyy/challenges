const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numbers = [2, 7, 3, 4, 8];

function displayArray() {
    console.log('Current Array:', numbers.join(', '));
}

function swapElements(index1, index2) {
    const temp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temp;
}

function promptForSwap() {
    displayArray();
    rl.question('Enter two indexes to swap (e.g., "0 3"): ', (input) => {
        const [index1, index2] = input.split(' ').map(Number);

        if (
            !Number.isInteger(index1) ||
            !Number.isInteger(index2) ||
            index1 < 0 ||
            index2 < 0 ||
            index1 >= numbers.length ||
            index2 >= numbers.length
        ) {
            console.log('Invalid input. Please enter valid indexes.');
        } else {
            swapElements(index1, index2);
            displayArray();
        }

        promptForSwap();
    });
}

promptForSwap();
