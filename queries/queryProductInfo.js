const mongoose = require('mongoose');
const ProductInfo = require('../db/models/productInfo.js');
//may need to connect to db from here?

const queryProductInfo = ProductInfo.find({}, (err, products) => {
  if (err) throw err;
  return products;
});

module.exports = {
  queryProductInfo
}