const mongoose = require('mongoose');
const ProductStyle = require('../db/models/productStyle.js');
const dbURI = "mongodb://localhost:27017/tenMillionRecords"

const queryProductStyle = (id, callback) => {

  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // poolSize: 100,
  })

  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
  });

  mongoose.connection.once('open', () => {
    mongoose.connection.db.collection("tenMillionRecords", function (err, collection) {
      collection.findOne({ product_id: id })
        .then((result) => {
          callback(null, result);
          mongoose.connection.close();
        })
    });
  })
};

module.exports = {
 queryProductStyle
}