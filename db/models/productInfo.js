import mongoose from 'mongoose';
import productInfoSchema from './schemas/productInfoSchema.js';

const ProductInfo = mongoose.model('ProductInfo', productInfoSchema);

module.exports default ProductInfo;