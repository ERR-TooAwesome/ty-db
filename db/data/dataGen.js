const fs = require('fs');
const faker = require('faker');

const createProductInfo = (numOfRecords) => {

  let productArrayString = [];

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
      productArrayString.push(`${JSON.stringify(newProduct)},`);
    } else {
      productArrayString.push(`${JSON.stringify(newProduct)}`);
    }
  }

  fs.appendFile('./db/data/productInfos.json', '[' + productArrayString.sort((a,b) => a-b).join('').toString() + ']', (err) => {
    if (err) {
      throw error;
      }
      console.log(`Records have been appended to file!`);
    });

};





module.exports = {
  createProductInfo
}