// Find the longest word in the array with length less than 5

function findLongestWordUnder5(arr) {
  let longestWord = '';

  for (const word of arr) {
    if (word.length < 5 && word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord || null; 
}
module.exports = findLongestWordUnder5;