const hasTruthy = require('./21-hasTruthy');

describe('hasTruthy', () => {
  test('returns true if array has at least one truthy value', () => {
    expect(hasTruthy([0, null, false, '', 5])).toBe(true);  // 5 is truthy
    expect(hasTruthy([true, false])).toBe(true);
  });

  test('returns false if array has no truthy values', () => {
    expect(hasTruthy([0, null, false, ''])).toBe(false);
    expect(hasTruthy([])).toBe(false);
  });
});
