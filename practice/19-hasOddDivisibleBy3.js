// Check if there is an odd number divisible by 3 in the array

function hasOddDivisibleBy3(arr) {
    for (const number of arr) {
        if (number % 2 !== 0 && number % 3 === 0) {
            return true;
        }
    }
    return false;
}
module.exports = hasOddDivisibleBy3;