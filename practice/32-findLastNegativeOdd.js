// Find the last negative odd number in the array

function findLastNegativeOdd(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0 && arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
  return null;
}

module.exports = findLastNegativeOdd;