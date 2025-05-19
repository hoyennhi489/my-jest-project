const findProductIndexByCode = require('./37-findProductIndexByCode');

test('finds index of product with code "abc"', () => {
  const products = [
    { code: 'xyz', name: 'Product 1' },
    { code: 'abc', name: 'Product 2' },
    { code: 'def', name: 'Product 3' }
  ];
  expect(findProductIndexByCode(products, 'abc')).toBe(1);
  expect(findProductIndexByCode(products, 'nope')).toBe(-1);
});