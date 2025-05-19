// Find the second largest number in the array

function findSecondLargest(arr) {
  const unique = [...new Set(arr)];
  if (unique.length < 2) return null;

  unique.sort((a, b) => b - a);
  return unique[1];
}

module.exports = findSecondLargest;