// Count the number of products that belong to the iPhone line and support free shipping

function countIphoneWithFreeShip(products) {
  return products.filter(
    product =>
      typeof product.name === 'string' &&
      product.name.toLowerCase().includes('iphone') &&
      product.freeShip === true
  ).length;
}

module.exports = countIphoneWithFreeShip;