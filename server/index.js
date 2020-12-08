const express = require('express');
const app = express();
const port = 27017;
const queryProductInfo = require('../queries/queryProductInfo.js');
const queryProductStyle = require('../queries/queryProductStyle.js');
const queryProductList = require('../queries/queryProductList.js');

app.use(express.json());

//test
app.get('/', (req, res) => {
  res.send('Test working');
})

//product Information GET request
app.get('/products/:product_id', (req, res) => {
  //use queryProductInfo route
  res.status(200).send('product info')
})

//product Styles GET Request
app.get('/products/:product_id/styles', (req, res) => {
  //use queryProductStyle route
  res.status(200).send('product styles')
})

app.get('/products/list', (req, res) => {
  //use queryProductList route
  res.status(200).send('product list')
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
