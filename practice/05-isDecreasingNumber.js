/*  
Check for Decreasing Number
Write a function isDecreasingNumber(n) to check if n is a decreasing number.
0 < n < 1000000
A decreasing number must have at least 2 digits.
Each digit on the right must be smaller than the digit on the left.
Return true if it is a decreasing number, otherwise return false.
Example:
isDecreasingNumber(11) --> false
isDecreasingNumber(321) --> true
isDecreasingNumber(12321) --> false
*/

function isDecreasingNumber(n) {
  if (n <= 9 || n >= 1000000) return false;

  const str = n.toString();

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] <= str[i + 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isDecreasingNumber;