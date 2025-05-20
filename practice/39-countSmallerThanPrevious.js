// Count how many numbers are smaller than the number right before them

function countSmallerThanPrevious(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      count++;
    }
  }
  return count;
}

module.exports = countSmallerThanPrevious;