/* 
Check for Symmetric Number
Write a function isSymmetricNumber(n) to check if n is a symmetric number.
n must satisfy the condition 1 < n < 1000000
A symmetric number is a number that reads the same from left to right as it does from right to left.
Return true if it is a symmetric number, otherwise return false.
Example:
isSymmetricNumber(10) --> false
isSymmetricNumber(11) --> true
isSymmetricNumber(12321) --> true
*/

function isSymetricNumber(n) {
  if (n <= 1 || n >= 1000000) return false;

  const str = n.toString();
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

module.exports = isSymetricNumber;