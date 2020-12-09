const mongoose = require('mongoose');
const productStylesSchema = require('../schemas/productStyleSchema.js');

const ProductStyle = mongoose.model('ProductStyle', productStylesSchema);

module.exports = { ProductStyle }