const mongoose = require('mongoose');
const ProductInfo = require('../db/models/productInfo.js');


const queryProductInfo = (id, callback) => {

        mongoose.connection.db.collection("productRecords", function (err, collection) {
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
