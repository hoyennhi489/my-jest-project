// Find the index of the product with code = "abc"

function findProductIndexByCode(products, code) {
  return products.findIndex(product => product.code === code);
}

module.exports = findProductIndexByCode;