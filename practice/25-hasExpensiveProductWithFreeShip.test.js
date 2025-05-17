const hasExpensiveFreeShipProduct = require('./25-hasExpensiveProductWithFreeShip');

describe('hasExpensiveFreeShipProduct', () => {
  test('có sản phẩm giá > 100000 và free ship', () => {
    const products = [
      { name: 'A', price: 90000, isFreeShip: true },
      { name: 'B', price: 150000, isFreeShip: true }
    ];
    expect(hasExpensiveFreeShipProduct(products)).toBe(true);
  });

  test('không có sản phẩm nào đủ điều kiện', () => {
    const products = [
      { name: 'A', price: 90000, isFreeShip: true },
      { name: 'B', price: 150000, isFreeShip: false }
    ];
    expect(hasExpensiveFreeShipProduct(products)).toBe(false);
  });

  test('mảng rỗng', () => {
    expect(hasExpensiveFreeShipProduct([])).toBe(false);
  });
});