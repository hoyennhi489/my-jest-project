// Check if the array is symmetric (palindromic)

function isSymmetric(arr) {
  const len = arr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (arr[i] !== arr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
module.exports = isSymmetric;