const harmonicSum = require('./03-calc-harmonic-sum');

describe('s(n) = 1 + 1/2 + 1/3 + … + 1/n', () => {
    test('should throw error when n <= 0', () => {
        expect(() => harmonicSum(0)).toThrow('n must be a positive integer');
        expect(() => harmonicSum(-1)).toThrow('n must be a positive integer');
    });

    test('should return 0 when n > 0', () => {
        expect(harmonicSum(1)).toBeCloseTo(1.0, 5);
        expect(harmonicSum(3)).toBeCloseTo(1.8333, 4);
        expect(harmonicSum(10)).toBeCloseTo(2.929, 3);
    });
});