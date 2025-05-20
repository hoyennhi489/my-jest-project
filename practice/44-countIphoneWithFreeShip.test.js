const countIphoneWithFreeShip = require('./44-countIphoneWithFreeShip');

test('counts iPhone products with free shipping', () => {
  const products = [
    { name: 'iPhone 14', freeShip: true },
    { name: 'iPhone 13', freeShip: false },
    { name: 'Samsung S21', freeShip: true },
    { name: 'iPhone X', freeShip: true },
  ];
  expect(countIphoneWithFreeShip(products)).toBe(2); // iPhone 14, iPhone X
});