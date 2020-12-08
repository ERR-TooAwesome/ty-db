import mongoose from 'mongoose';
import ProductList from './models/productList.js';
//may need to connect to db from here?

const productsList = ProductList.find({}, (err, products) => {
  if (err) throw err;
  return products;
});