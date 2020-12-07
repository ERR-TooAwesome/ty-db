const fs = require('fs');
const faker = require('faker');

//Product Info
const createProductInfo = (numOfRecords) => {
  //Timer setter
  let start = Date.now();

  let productInfoString = [];

  for (let i = 1; i <= numOfRecords; i++) {
    //Create fake data strings to be appended to a file created with fs module.
    let newProduct = {
      productId: i, //must be defined or will not save
      name: faker.commerce.productName(),
      slogan: faker.fake('{{commerce.productAdjective}} {{commerce.productAdjective}} {{commerce.productAdjective}}'),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      default_price: faker.commerce.price(), //In original API it appears to be a string
      features: [
        {
          feature: faker.commerce.productAdjective(),
          value: faker.commerce.productAdjective(),
        }
      ]
    }


    if (i !== numOfRecords) {
      productInfoString.push(`${JSON.stringify(newProduct)},`);
    } else {
      productInfoString.push(`${JSON.stringify(newProduct)}`);
    }
  }
  productInfoString = productInfoString.sort((a, b) => a - b).join('').toString();

  fs.appendFile('./db/data/productInfos.json', '[' + productInfoString + ']', (err) => {
    if (err) {
      throw error;
    }
    console.log(`Records have been appended to file!`);
  });

  let end = Date.now();
  console.log('Time-Elapsed in milliseconds: ', end - start);
};

//Product Styles


module.exports = {
  createProductInfo
}