// Check if there is any falsy value in the array

function hasFalsy(arr) {
    for (const val of arr) {
        if (!val) return true;
    }
    return false;
}
module.exports = hasFalsy;