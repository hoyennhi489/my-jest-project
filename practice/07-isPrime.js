/*
Check for Prime Number
Write a function isPrime(n) to check if n is a prime number.
A prime number is a number that is divisible only by 1 and itself.
0 < n < 100000
Return true if it is a prime number, otherwise return false.
Example:
isPrime(3) --> true
isPrime(4) --> false
isPrime(11) --> true
*/

function isPrime(n) {
    if (n <= 1 || n >= 100000) return false

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
module.exports = isPrime;