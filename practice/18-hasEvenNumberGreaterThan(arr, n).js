// Check if there is an even number greater than n in the array.

function hasEvenNumberGreaterThan(arr, n) {
    for (const number of arr) {
        if (number % 2 === 0 && number > n) {
            return true;
        }
    }
    return false;
}
module.exports = hasEvenNumberGreaterThan;