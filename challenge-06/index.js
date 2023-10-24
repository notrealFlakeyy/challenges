const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a string: ', (input) => {
    let letters = 0;
    let numbers = 0;
    for (let i = 0; i < input.length; i++) {
        if (/[a-zA-Z]/.test(input[i])) {
            letters++;
        } else if (/[0-9]/.test(input[i])) {
            numbers++;
        }
    }

    console.log(`The string contains ${letters} letters and ${numbers} numbers.`);
    readline.close();
});