import mongoose from 'mongoose';
import productListSchema from './schemas/productListSchema.js';

const ProductList = mongoose.model('ProductList', productListSchema);

module.exports default ProductList;