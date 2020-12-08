import mongoose from 'mongoose';
import ProductInfo from './models/productInfo.js';
//may need to connect to db from here?

const products = ProductInfo.find({}, (err, products) => {
  if (err) throw err;
  return products;
});