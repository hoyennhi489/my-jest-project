/*
Check if a number has two digits whose sum equals a given number
Write a function hasTwoDigitsWithSum(n, sum) to check whether n (9 < n < 1,000,000) contains any two digits whose sum equals the given sum (0 < sum < 19).
Example:
hasTwoDigitsWithSum(10, 1) --> true because 0 + 1 = 1
hasTwoDigitsWithSum(101, 3) --> false because there are no two digits that add up to 3
hasTwoDigitsWithSum(11, 2) --> true
*/

function hasTwoDigitsWithSum(n, sum) {
  if (n <= 9 || n >= 1000000 || sum <= 0 || sum >= 19) {
    return false;
  }

  const digits = n.toString().split('').map(Number);

  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      if (digits[i] + digits[j] === sum) {
        return true;
      }
    }
  }

  return false;
}

module.exports = hasTwoDigitsWithSum;