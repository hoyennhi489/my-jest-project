const { calculateSum, calculateSumV2 } = require('./01-calc-s');
describe('s(n) = 1 + 2 + 3 + … + n', () => {
    test('should return 0 when n <= 0', () => {
        expect(calculateSum(-1)).toBe(0);
        expect(calculateSum(0)).toBe(0);  
    });

    test('should return sum when n > 0', () => {
        expect(calculateSum(1)).toBe(1);
        expect(calculateSum(2)).toBe(3);
        expect(calculateSum(3)).toBe(6);
        expect(calculateSum(10)).toBe(55);
    });
});

describe('s(n) = 1 + 2 + 3 + … + n', () => {
    test('should return 0 when n <= 0', () => {
        expect(calculateSumV2(-1)).toBe(0);
        expect(calculateSumV2(0)).toBe(0);  
    });

    test('should return sum when n > 0', () => {
        expect(calculateSumV2(1)).toBe(1);
        expect(calculateSumV2(2)).toBe(3);
        expect(calculateSumV2(3)).toBe(6);
        expect(calculateSumV2(10)).toBe(55);
    });
});