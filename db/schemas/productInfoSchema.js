const mongoose = require('mongoose');
const { Schema } = mongoose;

const productInfoSchema = new Schema({
  productId: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number, //In original API it appears to be a string
  features: [
    {
      feature: String,
      value: String,
    }
  ],
});

module.exports = {
  productInfoSchema,
}