/* 
Check for Perfect Square
Write a function isPerfectSquare(n) to check if n is a perfect square.
0 < n < 100000
A perfect square is a number whose square root is a natural number.
Return true if it is a perfect square, otherwise return false.
Example: 4, 9, 25, 36 are perfect squares.
*/

function isPerfectSquare(n) {
    if (n <= 0 || n >= 100000) return false;

    let sqrt = Math.sqrt(n); 
    return sqrt === Math.floor(sqrt); // Kiểm tra nếu căn bậc 2 là một số nguyên
}

module.exports = isPerfectSquare;