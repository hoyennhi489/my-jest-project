const findFirstEmail = require('./35-isEmail');

test('finds first email in array', () => {
  expect(findFirstEmail(['hello', 'test@example.com', 'user@domain.com'])).toBe('test@example.com');
  expect(findFirstEmail(['no-email', 123, null])).toBeNull();
});