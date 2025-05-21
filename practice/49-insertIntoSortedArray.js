// Given a sorted (ascending) array, insert a number while keeping the array sorted.

function insertIntoSortedArray(arr, number) {
  const result = [...arr];
  let inserted = false;

  for (let i = 0; i < result.length; i++) {
    if (number < result[i]) {
      result.splice(i, 0, number);
      inserted = true;
      break; break;
    }
  }

  if (!inserted) {
    result.push(number); // If greater than all, add to the end
  }

  return result;
}

module.exports = insertIntoSortedArray;