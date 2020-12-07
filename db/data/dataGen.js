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
        },
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
    console.log(`${numOfRecords} Records have been appended to file: productInfos.json!`);
  });

  let end = Date.now();
  console.log('Time-Elapsed in milliseconds: ', end - start);
};

//Product Styles
const createProductStyle = (numOfRecords) => {
  //Timer setter
  let start = Date.now();

  let productStyleString = [];
  let defaulter = 1;

  let clothingSizes = [{
    size: 'S',
    qty: 15
  }, {
    size:'M',
    qty: 15
  }, {
    size:'L',
    qty: 15
  }];

  let shoeSizes = [{
    size: '9',
    qty: 15
  }, {
    size:'10',
    qty: 15
  }, {
    size:'11',
    qty: 15
  }];

  for (let j = 1; j <= numOfRecords; j++) {
    //Create fake data strings to be appended to a file created with fs module.
    let flipper = Math.floor(Math.random()*3);

    let chosen = flipper ? shoeSizes : clothingSizes;
    let price = faker.commerce.price();
    let discounted = Math.floor(parseFloat(price) * 1/2).toString();

    let newProduct = {
      product_id: j, //In original API it appears to be a string
      results: [
        {
          style_id: j,
          name: faker.commerce.productName(),
          original_price: price, //In original API it appears to be a string
          sale_price: discounted + '.99', //In original API it appears to be a string
          'default?': defaulter,
          photos: [
            {
              thumbnail_url: faker.image.imageUrl(), //Path to photo thumbnail
              url: faker.image.imageUrl(), //Path to photo
            },
            {
              thumbnail_url: faker.image.imageUrl(), //Path to photo thumbnail
              url: faker.image.imageUrl(), //Path to photo
            },
            {
              thumbnail_url: faker.image.imageUrl(), //Path to photo thumbnail
              url: faker.image.imageUrl(), //Path to photo
            }
          ],
          skus: {
            sizes: chosen,
         }
        }
      ]
    }

    //default only one
    defaulter = 0;

    if (j !== numOfRecords) {
      productStyleString.push(`${JSON.stringify(newProduct)},`);
    } else {
      productStyleString.push(`${JSON.stringify(newProduct)}`);
    }
  }
  productStyleString = productStyleString.sort((a, b) => a - b).join('').toString();

  fs.appendFile('./db/data/productStyles.json', '[' + productStyleString + ']', (err) => {
    if (err) {
      throw error;
    }
    console.log(`${numOfRecords} Records have been appended to file: productStyles.json!`);
  });
  let end = Date.now();
  console.log('Time-Elapsed: ', end - start);
};

//Product List creation
const createProductList = (numOfRecords) => {
  //Timer setter
  let start = Date.now();

  let productListString = [];

  for (let k = 1; k <= numOfRecords; k++) {
    //Create fake data strings to be appended to a file created with fs module.
    let newProduct = {
      productId: k, //must be defined or will not save
      name: faker.commerce.productName(),
      slogan: faker.fake('{{commerce.productAdjective}} {{commerce.productAdjective}} {{commerce.productAdjective}}'),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      default_price: faker.commerce.price() //In original API it appears to be a string
    }


    if (k !== numOfRecords) {
      productListString.push(`${JSON.stringify(newProduct)},`);
    } else {
      productListString.push(`${JSON.stringify(newProduct)}`);
    }
  }
  productListString = productListString.sort((a, b) => a - b).join('').toString();

  fs.appendFile('./db/data/productLists.json', '[' + productListString + ']', (err) => {
    if (err) {
      throw error;
    }
    console.log(`${numOfRecords} Records have been appended to file: productLists.json!`);
  });

  let end = Date.now();
  console.log('Time-Elapsed in milliseconds: ', end - start);
};


module.exports = {
  createProductInfo,
  createProductStyle,
  createProductList
}