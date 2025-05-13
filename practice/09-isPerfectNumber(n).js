/*
Check for Perfect Number
Write a function isPerfectNumber(n) to check if n is a perfect number.
n must satisfy the condition 1 < n < 1000
A perfect number is a number whose sum of all its divisors (excluding itself, i.e. from 1 to n - 1) equals the number itself.
Return true if it is a perfect number, otherwise return false.
Example: 6 = 1 + 2 + 3 (so 6 is a perfect number)
Hint: you don’t necessarily need to iterate up to (n - 1) to find all of n’s divisors.
*/

function isPerfectNumber(n) {
    if (n <= 1) return false;
    let sum = 0;
    for (let i = 1; i < n; i ++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}

module.exports = isPerfectNumber;