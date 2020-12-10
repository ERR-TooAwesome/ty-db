const mongoose = require('mongoose');
const ProductList = require('../db/models/productList.js');
const dbURI = "mongodb://localhost:27017/tenMillionRecords"

const queryProductList = (id) => {

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
      collection.find({ id: { $lt: 6 } })
        .then((result => console.log(result)))
    });
  })
};

module.exports = {
 queryProductList
}