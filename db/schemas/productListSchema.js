import mongoose from 'mongoose';
const { Schema } = mongoose;

const productListSchema = new Schema({
  _id: Number, //must be defined or will not save
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number, //In original API it appears to be a string
});

  module.exports default productListSchema;
