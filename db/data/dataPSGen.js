const fs = require('fs');
const faker = require('faker');

// const writeTestRecs = fs.createWriteStream('./styleRecordsExample.json');


const writeTenRecs = (writer, encoding, callback) => {
  let stop = 10;
  let i = 10;
  let id = 0;
  let start = Date.now();
  let defaulter = 1;

  let clothingSizes = [{
    size: 'S',
    qty: 15
  }, {
    size: 'M',
    qty: 15
  }, {
    size: 'L',
    qty: 15
  }];

  let shoeSizes = [{
    size: '9',
    qty: 15
  }, {
    size: '10',
    qty: 15
  }, {
    size: '11',
    qty: 15
  }];

  const write = () => {
    let ok = true;

    do {
      i -= 1;
      id += 1;

      let productStyleString = [];


      let flipper = Math.floor(Math.random() * 3);

      let chosen = flipper ? shoeSizes : clothingSizes;
      let price = faker.commerce.price();
      let discounted = Math.floor(parseFloat(price) * 1 / 2).toString() + '.99';

      let newProduct = {
        product_id: id, //In original API it appears to be a string
        results: [
          {
            style_id: 1,
            name: faker.commerce.productName(),
            original_price: parseFloat(price), //In original API it appears to be a string
            sale_price: parseFloat(discounted), //In original API it appears to be a string
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
          },
          {
            style_id: 2,
            name: faker.commerce.productName(),
            original_price: parseFloat(price), //In original API it appears to be a string
            sale_price: parseFloat(discounted), //In original API it appears to be a string
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

      productStyleString.push(`${JSON.stringify(newProduct)}`);

      productStyleString = productStyleString.sort((a, b) => a - b).join('').toString();


      if (i === 0) {
        let end = Date.now();
        console.log('Time-Elapsed: ', end - start);
        writer.write(productStyleString, encoding, callback);
      } else {
        console.log('#: ', id)
        ok = writer.write(productStyleString, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}
//UNCOMMENT TO RUN
// writeTenRecs(writeTestRecs, 'utf-8', () => {
//   writeTestRecs.end();
// })

// Write 1 Mill Recs
// const writeMillionRecs = fs.createWriteStream('./oneMillionStyleRecords.json');


const writeOneMillion = (writer, encoding, callback) => {
  let stop = 1000000;
  let i = 1000000;
  let id = 0;
  let start = Date.now();
  let defaulter = 1;

  let clothingSizes = [{
    size: 'S',
    qty: 15
  }, {
    size: 'M',
    qty: 15
  }, {
    size: 'L',
    qty: 15
  }];

  let shoeSizes = [{
    size: '9',
    qty: 15
  }, {
    size: '10',
    qty: 15
  }, {
    size: '11',
    qty: 15
  }];

  const write = () => {
    let ok = true;

    do {
      i -= 1;
      id += 1;

      let productStyleString = [];


      let flipper = Math.floor(Math.random() * 3);

      let chosen = flipper ? shoeSizes : clothingSizes;
      let price = faker.commerce.price();
      let discounted = Math.floor(parseFloat(price) * 1 / 2).toString() + '.99';

      let newProduct = {
        product_id: id, //In original API it appears to be a string
        results: [
          {
            style_id: 1,
            name: faker.commerce.productName(),
            original_price: parseFloat(price), //In original API it appears to be a string
            sale_price: parseFloat(discounted), //In original API it appears to be a string
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
          },
          {
            style_id: 2,
            name: faker.commerce.productName(),
            original_price: parseFloat(price), //In original API it appears to be a string
            sale_price: parseFloat(discounted), //In original API it appears to be a string
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

      productStyleString.push(`${JSON.stringify(newProduct)}`);

      productStyleString = productStyleString.sort((a, b) => a - b).join('').toString();


      if (i === 0) {
        let end = Date.now();
        console.log('Time-Elapsed: ', end - start);
        writer.write(productStyleString, encoding, callback);
      } else {
        console.log('#: ', id)
        ok = writer.write(productStyleString, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}
//UNCOMMENT TO RUN
// writeOneMillion(writeMillionRecs, 'utf-8', () => {
//   writeMillionRecs.end();
// })


// WRITE 10 Milly Records
// const writeRecs = fs.createWriteStream('./tenMillionStyleRecords.json');

const writeTenMillionRecs = (writer, encoding, callback) => {
  let stop = 10000000;
  let i = 10000000;
  let id = 0;
  let start = Date.now();
  let defaulter = 1;

  let clothingSizes = [{
    size: 'S',
    qty: 15
  }, {
    size: 'M',
    qty: 15
  }, {
    size: 'L',
    qty: 15
  }];

  let shoeSizes = [{
    size: '9',
    qty: 15
  }, {
    size: '10',
    qty: 15
  }, {
    size: '11',
    qty: 15
  }];

  const write = () => {
    let ok = true;

    do {
      i -= 1;
      id += 1;

      let productStyleString = [];


      let flipper = Math.floor(Math.random() * 3);

      let chosen = flipper ? shoeSizes : clothingSizes;
      let price = faker.commerce.price();
      let discounted = Math.floor(parseFloat(price) * 1 / 2).toString() + '.99';

      let newProduct = {
        product_id: id, //In original API it appears to be a string
        results: [
          {
            style_id: 1,
            name: faker.commerce.productName(),
            original_price: parseFloat(price), //In original API it appears to be a string
            sale_price: parseFloat(discounted), //In original API it appears to be a string
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
          },
          {
            style_id: 2,
            name: faker.commerce.productName(),
            original_price: parseFloat(price), //In original API it appears to be a string
            sale_price: parseFloat(discounted), //In original API it appears to be a string
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

      productStyleString.push(`${JSON.stringify(newProduct)}`);

      productStyleString = productStyleString.sort((a, b) => a - b).join('').toString();


      if (i === 0) {
        let end = Date.now();
        console.log('Time-Elapsed: ', end - start);
        writer.write(productStyleString, encoding, callback);
      } else {
        console.log('#: ', id)
        ok = writer.write(productStyleString, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}

//UNCOMMENT TO RUN
// writeTenMillionRecs(writeRecs, 'utf-8', () => {
//   writeRecs.end();
// })

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
    size: 'M',
    qty: 15
  }, {
    size: 'L',
    qty: 15
  }];

  let shoeSizes = [{
    size: '9',
    qty: 15
  }, {
    size: '10',
    qty: 15
  }, {
    size: '11',
    qty: 15
  }];

  for (let j = 1; j <= numOfRecords; j++) {
    //Create fake data strings to be appended to a file created with fs module.
    let flipper = Math.floor(Math.random() * 3);

    let chosen = flipper ? shoeSizes : clothingSizes;
    let price = faker.commerce.price();
    let discounted = Math.floor(parseFloat(price) * 1 / 2).toString() + '.99';

    let newProduct = {
      product_id: j, //In original API it appears to be a string
      results: [
        {
          style_id: j,
          name: faker.commerce.productName(),
          original_price: parseFloat(price), //In original API it appears to be a string
          sale_price: parseFloat(discounted), //In original API it appears to be a string
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