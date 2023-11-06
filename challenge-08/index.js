const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a string: ', (inputString) => {
    const result = checkPalindrome(inputString);
    console.log(result);
    readline.close();
});

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function checkPalindrome(palindrome) {
    if (isPalindrome(palindrome)) {
        return `${palindrome} is a palindrome.`;
    } else {
        return `${palindrome} is not a palindrome.`;
    }
}
