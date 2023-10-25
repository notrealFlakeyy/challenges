const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a string: ', (inputString) => {
    const result = countConsonantsAndVowels(inputString);
    console.log(`The string "${inputString}" has ${result.consonants} consonants and ${result.vowels} vowels.`);
    readline.close();
});

function countConsonantsAndVowels(string) {
    let consonants = 0;
    let vowels = 0;

    for (let i = 0; i < string.length; i++) {
        if (/[bcdfghjklmnpqrstvwxyz]/.test(string[i])) {
            consonants++;
        } else if (/[aeiou]/.test(string[i])) {
            vowels++;
        }
    }

    return { consonants, vowels };
}