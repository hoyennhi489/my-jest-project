// Check if the array is in descending order

function isDecreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) return false;
  }
  return true;
}
module.exports = isDecreasing;