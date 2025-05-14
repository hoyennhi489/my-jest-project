/*
Check if the sum of the digits is divisible by 10
Write a function isDivisibleBy10(n) to check whether n (0 < n < 1,000,000) has a digit sum divisible by 10.
Example:
isDivisibleBy10(10) --> false
isDivisibleBy10(1234) --> true because 1 + 2 + 3 + 4 = 10, which is divisible by 10
isDivisibleBy10(123455) --> true because 1 + 2 + 3 + 4 + 5 + 5 = 20, which is divisible by 10
*/

function isDivisibleBy10(n) {
    if (n <= 0 || n >= 1000000) return false;

    let sum = 0;
    const str = n.toString();
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum % 10 === 0;
}

module.exports = isDivisibleBy10;