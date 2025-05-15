/*
Count the number of emails in a sentence
Write a function countEmails(str) to count the number of emails in str.
An email is a string containing the '@' character in the middle and not at the end of the word.
Emails can have some domains such as: .com, .vn, .com.vn. The domain appears at the end of the word.
The email format is X@Y, where X has at least 3 characters, Y has at least 3 characters (excluding the above domains).
Return the total number of valid emails found in the input string.
Note: do not use regular expressions.
Example:
countEmails('my email should be abc@super.com') --> 1
countEmails('my email should be a@a.com') --> 0
countEmails('my email should be @ bla .com') --> 0
countEmails('my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn') --> 3
*/

function countEmails(str) {
  // List of valid domains
  const domains = ['.com', '.vn', '.com.vn'];
  let count = 0;

  // Split the sentence into words by space
  const words = str.split(' ');

  for (const word of words) {
    // Find the position of '@' in the word
    const atIndex = word.indexOf('@');

    // Skip if:
    // - no '@' found (returns -1)
    // - or the part before '@' has less than 3 characters (invalid)
    // - or '@' is at the end of the word (no content after '@')
    if (atIndex < 3 || atIndex === word.length - 1) continue;

    // Split before '@' (X) and after '@' (Y + domain)
    const before = word.slice(0, atIndex);           // part X
    const after = word.slice(atIndex + 1);            // part Y + domain

    // Check each valid domain
    for (const domain of domains) {
      // Check if the word ends with a valid domain
      if (after.endsWith(domain)) {
        // Extract Y (excluding the domain at the end)
        const y = after.slice(0, after.length - domain.length);

        // If Y has length ≥ 3, the email is valid
        if (y.length >= 3) {
          count++;    // increment count
          break;      // count once per word, skip other domains
        }
      }
    }
  }

  return count;  // Return the total number of valid emails found
}
module.exports = countEmails;