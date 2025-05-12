// Calculate S(n) = 1^2 + 2^2 + … + n^2
// S(n) = (n * (n + 1) * (2 * n + 1)) / 6;
function sumSquare(n) {
    if (n <= 0) return 0;

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}

function sumSquareV2(n) {
    if (n <= 0) return 0;
    return (n * (n + 1) * (2 * n + 1)) / 6;
}

module.exports = { sumSquare, sumSquareV2 };