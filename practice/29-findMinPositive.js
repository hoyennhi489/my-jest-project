// Find the smallest positive number in the array

function findMinPositive(arr) {
  let minPos = Infinity; // Initialize with the largest possible value

  for (const num of arr) {
    if (num > 0 && num < minPos) {
      minPos = num;
    }
  }

  // If no positive number is found, return null (or undefined as you prefer)
  return minPos === Infinity ? null : minPos;
}
module.exports = findMinPositive;