// Count the number of words with length greater than 5 in the array

function countLongWords(arr) {
  return arr.filter(word => typeof word === 'string' && word.length > 5).length;
}

module.exports = countLongWords;