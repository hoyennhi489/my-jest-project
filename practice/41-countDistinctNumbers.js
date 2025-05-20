// Count the number of distinct (different) numbers in the array

function countDistinctNumbers(arr) {
  const unique = new Set(arr);
  return unique.size;
}

module.exports = countDistinctNumbers;