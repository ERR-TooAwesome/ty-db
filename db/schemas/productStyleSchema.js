import mongoose from 'mongoose';
const { Schema } = mongoose;

const productStyleSchema = new Schema({
  product_id: Number, //In original API it appears to be a string
  results: [
    {
      style_id: Number,
      name: String,
      original_price: Number, //In original API it appears to be a string
      sale_price: Number, //In original API it appears to be a string
      default?: Number,
      photos: [
        {
          thumbnail_url: String, //Path to photo thumbnail
          url: String, //Path to photo
        }
      ],
     skus: {
      sizes: [
        {
          size: String,
          qty: Number
        }
      ]
     }
    }
  ]
});

module.exports default productStyleSchema;