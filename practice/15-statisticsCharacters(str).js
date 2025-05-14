/*
Count the characters in a sentence
Write a function statisticsCharacters(str) to count the number of occurrences of each character in the sentence.
Return an object where:
- the key is a character that appears in str. If the character is a space, use key = "space".
- the value is the number of times the key appears
Example:
statisticsCharacters('aa b cc ')
// should return an object like this:
// { a: 2, b: 1, c: 2, space: 3 }
*/

function statisticsCharacters(str) {
  const result = {};

  for (const char of str) {
    const key = char === ' ' ? 'space' : char; // If the character is a space, use "space" as the key; otherwise, use the character itself
    result[key] = (result[key] || 0) + 1;
  }

  return result;
}
module.exports = statisticsCharacters;