// Find the first email in the array

function isEmail(str) {
  // Check email simply with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

function findFirstEmail(arr) {
  for (let item of arr) {
    if (typeof item === 'string' && isEmail(item)) {
      return item;
    }
  }
  return null;
}

module.exports = findFirstEmail;