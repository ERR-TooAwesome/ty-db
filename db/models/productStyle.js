import mongoose from 'mongoose';
import productStylesSchema from './schemas/productStyleSchema.js';

const ProductStyle = mongoose.model('ProductStyle', productStyleSchema);

module.exports default ProductStyle;