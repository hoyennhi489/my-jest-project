/*
Count the frequency of words in a sentence
Write a function statisticsWords(str) to count the frequency of each word in str.
Return an object where:
- the key is a word that appears in str
- the value is the number of times the key appears
Example:
statisticsWords('easy frontend easy')
// should return an object like this:
// { easy: 2, frontend: 1 }
*/

function statisticsWords(str) {
  const result = {};
  const words = str.trim().split(/\s+/);

  for (const word of words) {
    if (word) {
      result[word] = (result[word] || 0) + 1;
    }
  }

  return result;
}
module.exports = statisticsWords;