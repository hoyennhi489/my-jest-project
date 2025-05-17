// Check if there is a product with a price greater than 100000 and free shipping

function hasExpensiveProductWithFreeShip(arr) {
  return arr.some(product => product.price > 100000 && product.isFreeShip === true);
}
module.exports = hasExpensiveProductWithFreeShip;