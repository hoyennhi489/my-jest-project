// Find the last perfect square number in the array

function isPerfectSquare(num) {
  if (num < 0) return false;
  const root = Math.sqrt(num);
  return root === Math.floor(root);
}

function findLastPerfectSquare(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (isPerfectSquare(arr[i])) {
      return arr[i];
    }
  }
  return null;
}

module.exports = findLastPerfectSquare;