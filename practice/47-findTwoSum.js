// Find two numbers whose sum equals a given target number

function findTwoSum(arr, target) {
  const seen = new Set();
  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }
  return null; 
}

module.exports = findTwoSum;