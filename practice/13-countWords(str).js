/*
Count the number of words in a sentence
Write a function countWords(str) to count the number of words in str.
Example: countWords('easy frontend') --> 2
*/

function countWords(str) {
  // Split the string by whitespace and filter out empty words
  const words = str.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length;
}
module.exports = countWords;