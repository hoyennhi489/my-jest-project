// Count how many numbers are in array a but not in array b

function countNumbersInANotInB(a, b) {
  const setB = new Set(b);
  const uniqueInA = new Set(a.filter(num => !setB.has(num)));
  return uniqueInA.size;
}

module.exports = countNumbersInANotInB;