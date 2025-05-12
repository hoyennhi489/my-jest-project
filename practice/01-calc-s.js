// Calculate S(n) = 1 + 2 + 3 + … + n
// S(n) = n * (n + 1) /2 
// S(10) = (10 * 11) /2 = 55

// V1
function calculateSum(n) {
    if (n <= 0) return 0;

    let sum = 0;
    for (let i = 1; i <= n; i ++) {
        sum += i;
    }

    return sum;
}

// v2
function calculateSumV2(n) {
    if (n <= 0) return 0;

    return (n * (n + 1) / 2);
}

module.exports = { calculateSum, calculateSumV2 };