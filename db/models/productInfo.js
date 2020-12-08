const mongoose = require('mongoose');
const productInfoSchema = require('../schemas/productInfoSchema.js');

const ProductInfo = mongoose.model('ProductInfo', productInfoSchema);

module.exports = {
  ProductInfo,
}