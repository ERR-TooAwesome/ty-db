const mongoose = require('mongoose');
const ProductStyle = require('../db/models/productStyle.js');
const dbURI = "mongodb://localhost:27017/tenMillionRecords"

const queryProductStyle = (id) => {

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
        .then((result => console.log(result)))
    });
  })
};

queryProductStyle(1);

module.exports = {
 queryProductStyle
}