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

app.use(require('cors')());
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
    let formattedId = { id: result.productId }
    let formattedPrice = { default_price: result.default_price.toString() }
    let formattedResult = { ...formattedId, ...result, ...formattedPrice}

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
    let firstFormatted = {
      original_price: result.results[0].original_price.toString(),
      sale_price: result.results[0].sale_price.toString(),
    };
    let secondFormatted = {
      original_price: result.results[1].original_price.toString(),
      sale_price: result.results[1].sale_price.toString(),
    };

    result.results[0] = { ...result.results[0], ...firstFormatted };
    result.results[1] = {  ...result.results[1], ...secondFormatted };

    let firstSkus = {};
    let secondSkus = {};

    for (let i = 0; i < result.results[0].skus.sizes.length; i++) {
      let name = result.results[0].skus.sizes[i].size;
      firstSkus[name] = result.results[0].skus.sizes[i].qty;
    }
    for (let j = 0; j < result.results[1].skus.sizes.length; j++) {
      let name = result.results[1].skus.sizes[j].size;
      secondSkus[name] = result.results[1].skus.sizes[j].qty;
    }

    result.results[0].skus = {...firstSkus}
    result.results[1].skus = {...secondSkus}

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
