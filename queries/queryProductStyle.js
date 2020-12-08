import mongoose from 'mongoose';
import ProductStyle from './models/productStyle.js';
//may need to connect to db from here?

const productStyles = ProductStyle.find({}, (err, productStyles) => {
  if (err) throw err;
  return productStyles;
});