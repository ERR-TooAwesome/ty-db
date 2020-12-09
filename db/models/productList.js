const mongoose = require('mongoose');
const productListSchema = require('../schemas/productListSchema.js');

const ProductList = mongoose.model('ProductList', productListSchema);

module.exports = { ProductList }