const mongoose = require('mongoose');
const ProductStyle = require('../db/models/productStyle.js');
const dbURI = "mongodb://localhost:27017/tenMillionRecords"

const queryProductStyle = (id, callback) => {

    mongoose.connection.db.collection("tenMillionRecords", function (err, collection) {
      if (err) { console.error(error) };
      collection.findOne({ product_id: id })
        .then((result) => {
          callback(null, result);
        })
    });
};

module.exports = {
 queryProductStyle
}