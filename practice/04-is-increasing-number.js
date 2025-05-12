/*
Check for Increasing Number
Write a function isIncreasingNumber(n) to check whether n is an increasing number.
0 < n < 1000000
An increasing number must have at least 2 digits.
Each digit on the right must be greater than the digit on the left.
Return true if it is an increasing number, otherwise return false.
Examples:
isIncreasingNumber(11) --> false
isIncreasingNumber(123) --> true
isIncreasingNumber(12321) --> false
*/

function isIncreasingNumber(n) {
    if (n < 10) return false;

    const numberString = n.toString();
    for (let i = 1; i < numberString.length; i++) {
        if (numberString[i] <= numberString[i - 1]) return false;
    }
    return true;
}

module.exports = isIncreasingNumber;