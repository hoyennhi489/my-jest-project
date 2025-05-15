// // Check if there is any truthy value in the array

function hasTruthy(arr) {
  for (const val of arr) {
    if (val) return true;
  }
  return false;
}
module.exports = hasTruthy;