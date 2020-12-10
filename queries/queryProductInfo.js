const mongoose = require('mongoose');
const ProductInfo = require('../db/models/productInfo.js');
const dbURI = "mongodb://localhost:27017/tenMillionRecords";

const queryProductInfo = (id, callback) => {

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
      if (err) { console.log(err); }
      collection.findOne({ productId: id })
        .then((result) => {
          callback(null, result);
          mongoose.connection.close();
        })
    });
  })
}

module.exports = {
  queryProductInfo,
}