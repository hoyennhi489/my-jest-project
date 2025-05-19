// Find the first positive even number in the array

function findFirstPositiveEven(arr) {
  for (let num of arr) {
    if (num > 0 && num % 2 === 0) {
      return num;
    }
  }
  return null;
}
module.exports = findFirstPositiveEven;