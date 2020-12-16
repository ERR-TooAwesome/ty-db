const mongoose = require('mongoose');
const ProductInfo = require('../db/models/productInfo.js');
const dbURI = "mongodb://localhost:27017/tenMillionRecords";

const queryProductInfo = (id, callback) => {

        mongoose.connection.db.collection("tenMillionRecords", function (err, collection) {
          if (err) { console.log(err); }
          collection.findOne({ productId: id })
            .then((result) => {
              callback(null, result);
            })
        });
  }



module.exports = {
  queryProductInfo,
}