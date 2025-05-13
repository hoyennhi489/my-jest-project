/*
Check for Increasing Number with a Given Distance
Write a function isIncreasingNumberByDistance(n, x) to check if n is an increasing number with the distance
between two digits being x.
0 < n < 1000000, 0 < x < 5
An increasing number must have at least 2 digits.
Each digit on the right must be greater than the digit on the left.
The distance between two adjacent digits must be x.
Return true if it is an increasing number with distance x, otherwise return false.
Example:
isIncreasingNumberByDistance(11, 1) --> false
isIncreasingNumberByDistance(123, 1) --> true
isIncreasingNumberByDistance(135, 2) --> true
isIncreasingNumberByDistance(135, 1) --> false
*/

function isIncreasingNumberByDistance(n, x) {
    if (n <= 9 || n >= 1000000 && x <= 0 || x >= 5) return false;

    const  str = n.toString();

    for (let i = 0; i < str.length -1; i++) {
        const current = Number(str[i]);
        const next = Number(str[i + 1]);

        if (next - current !== x) {
            return false;
        }
    }
    return true;
}

module.exports = isIncreasingNumberByDistance;