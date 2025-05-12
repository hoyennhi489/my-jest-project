// Calculate S(n) = 1 + 1/2 + 1/3 + … + 1/n

function harmonicSum(n) {
    if (n <= 0) {
        throw new Error('n must be a positive integer');
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    return sum;
}

module.exports = harmonicSum;