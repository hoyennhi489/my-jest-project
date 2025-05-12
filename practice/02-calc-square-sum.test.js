const {sumSquare, sumSquareV2} = require('./02-calc-square-sum');

describe('s(n) = 1^2 + 2^2 + … + n^2', () => {
    test('should return 0 when n <= 0', () => {
        expect(sumSquare(-1)).toBe(0);
        expect(sumSquare(0)).toBe(0);
    });

    test('should return 0 khi n > 0', () => {
    expect(sumSquare(1)).toBe(1);       // 1^2 = 1
    expect(sumSquare(3)).toBe(14);      // 1^2 + 2^2 + 3^2 = 14
    expect(sumSquare(5)).toBe(55);      // 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55
    });
});

describe('s(n) = 1^2 + 2^2 + … + n^2', () => {
    test('should return 0 when n <= 0', () => {
        expect(sumSquareV2(-1)).toBe(0);
        expect(sumSquareV2(0)).toBe(0);
    });

    test('should return 0 khi n > 0', () => {
    expect(sumSquareV2(1)).toBe(1);       // 1^2 = 1
    expect(sumSquareV2(3)).toBe(14);      // 1^2 + 2^2 + 3^2 = 14
    expect(sumSquareV2(5)).toBe(55);      // 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55
    });
});