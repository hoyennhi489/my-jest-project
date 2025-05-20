// Sum of even numbers that are greater than the number before them

function sumEvenGreaterThanPrevious(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > arr[i - 1]) {
      sum += arr[i];
    }
  }
  return sum;
}

module.exports = sumEvenGreaterThanPrevious;