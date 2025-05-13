const isPrime = require('./07-isPrime');

describe('isPrime', () => {
  test('should return false for n <= 1', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  test('should return false for n >= 100000', () => {
    expect(isPrime(100000)).toBe(false);
    expect(isPrime(100001)).toBe(false);
  });

  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  test('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });
});