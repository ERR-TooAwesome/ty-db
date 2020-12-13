require('newrelic');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const queryProductInfo = require('../queries/queryProductInfo.js');
const queryProductStyle = require('../queries/queryProductStyle.js');
const queryProductList = require('../queries/queryProductList.js');

const dbURI = "mongodb://localhost:27017/tenMillionRecords";

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // poolSize: 100,
})

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

  mongoose.connection.once('open', () => {
    console.log('Server Started');
    app.listen(port, () => {
      console.log(`server running at: http://localhost:${port}`);
    });
  })

app.use(express.json());
//eventually add security templating middleware

//test
app.get('/', (req, res) => {
  res.send('Test working');
})


//product Information GET request
app.get('/products/:product_id', (req, res) => {
  //use queryProductInfo route
  let start = Date.now()
  const productId = parseInt(req.params.product_id);


  queryProductInfo.queryProductInfo(productId, (err, result) => {
    let formattedPrice = { default_price: result.default_price.toString() }
    let formattedResult = { ...result, ...formattedPrice}

    if (err) {
      console.log('err in server index.js: ', err)
      res.sendStatus(500)
    }
    let stop = Date.now()
    console.log(`ms Elapsed during product info GET request to item: ${productId}`,stop - start)
    res.status(200).json(formattedResult)
  })

})

//product Styles GET Request
app.get('/products/:product_id/styles', (req, res) => {
  //use queryProductStyle route
  let start = Date.now()
  const productId = parseInt(req.params.product_id);

  queryProductStyle.queryProductStyle(productId, (err, result) => {
    if (err) {
      console.log('err in server index.js: ', err)
      res.sendStatus(500)
    }
    let stop = Date.now()
    console.log(`ms Elapsed during product style GET request to item: #${productId}`,stop - start)
    res.status(200).send(result)

  })

})

// app.get('/products/list', (req, res) => {
//   //use queryProductList route
//   res.status(200).send('product list')
// })
