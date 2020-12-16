const mongoose = require('mongoose');
const ProductList = require('../db/models/productList.js');


const queryProductList = (id) => {

    mongoose.connection.db.collection("tenMillionRecords", function (err, collection) {
      collection.find({ id: { $lt: 6 } })
        .then((result => console.log(result)))
    });

};

module.exports = {
 queryProductList
}