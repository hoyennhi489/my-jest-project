// Count the number of positive even numbers in the array

function countPositiveEven(arr) {
  return arr.filter(num => num > 0 && num % 2 === 0).length;
}

module.exports = countPositiveEven;