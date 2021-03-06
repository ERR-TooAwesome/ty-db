const mongoose = require('mongoose');
const ProductStyle = require('../db/models/productStyle.js');

const queryProductStyle = (id, callback) => {

    mongoose.connection.db.collection("productRecords", function (err, collection) {
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
