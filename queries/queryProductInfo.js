const mongoose = require('mongoose');
const ProductInfo = require('../db/models/productInfo.js');
const dbURI = "mongodb://localhost:27017/tenMillionRecords";

const queryProductInfo = (id) => {

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
      collection.findOne({ productId: id })
        .then((result => console.log(result)))
    });
  })
}

module.exports = {
  queryProductInfo,
}