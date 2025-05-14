const isDivisibleBy10 = require('./11-isDivisibleBy10');

describe('isDivisibleBy10', () => {
    test('should return false when sum of digits is not divisible by 10', () => {
        expect(isDivisibleBy10(15)).toBe(false);
        expect(isDivisibleBy10(27)).toBe(false);
    });

    test('should return false when n >= 1000000 ', () => {
        expect(isDivisibleBy10(1000000)).toBe(false);
        expect(isDivisibleBy10(1000001)).toBe(false);
    });

    test('should return true when sum of digits is divisible by 10', () => {
        expect(isDivisibleBy10(1234)).toBe(true); // 1 + 2 + 3 + 4 = 10
        expect(isDivisibleBy10(123455)).toBe(true); // 1+2+3+4+5+5 = 20
    });
});