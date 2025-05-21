// Find the smallest positive number in an array.

function findMinPositive(numberList) {
  const positives = numberList.filter(num => num > 0);
  if (positives.length === 0) return undefined;

  return Math.min(...positives);
}

module.exports = findMinPositive;