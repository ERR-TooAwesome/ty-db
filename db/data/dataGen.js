const fs = require('fs');
const faker = require('faker');

// const writeTestRecs = fs.createWriteStream('./recordsExample.json');


const writeTenRecs = (writer, encoding, callback) => {
  let stop = 10;
  let i = 10;
  let id = 0;
  let start = Date.now();

  const write = () => {
    let ok = true;

    do {
      i -= 1;
      id += 1;

      let productInfoString = [];

      let newProduct = {
        productId: id, //must be defined or will not save
        name: faker.commerce.productName(),
        slogan: faker.fake('{{commerce.productAdjective}} {{commerce.productAdjective}} {{commerce.productAdjective}}'),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        default_price: parseFloat(faker.commerce.price()), //In original API it appears to be a string
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
      };



      productInfoString.push(`${JSON.stringify(newProduct)}`);

      productInfoString = productInfoString.sort((a, b) => a - b).join('').toString();

      if (i === 0) {
        let end = Date.now();
        console.log('Time-Elapsed: ', end - start);
        writer.write(productInfoString, encoding, callback);
      } else {
        console.log('#: ', id)
        ok = writer.write(productInfoString, encoding);
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
// const writeMillionRecs = fs.createWriteStream('./oneMillionRecords.json');


const writeOneMillion = (writer, encoding, callback) => {
  let stop = 1000000;
  let i = 1000000;
  let id = 0;
  let start = Date.now();

  const write = () => {
    let ok = true;

    do {
      i -= 1;
      id += 1;

      let productInfoString = [];

      let newProduct = {
        productId: id, //must be defined or will not save
        name: faker.commerce.productName(),
        slogan: faker.fake('{{commerce.productAdjective}} {{commerce.productAdjective}} {{commerce.productAdjective}}'),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        default_price: parseFloat(faker.commerce.price()), //In original API it appears to be a string
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
      };


      productInfoString.push(`${JSON.stringify(newProduct)}`);


      productInfoString = productInfoString.sort((a, b) => a - b).join('').toString();

      if (i === 0) {
        let end = Date.now();
        console.log('Time-Elapsed: ', end - start);
        writer.write(productInfoString, encoding, callback);
      } else {
        console.log('#: ', id)
        ok = writer.write(productInfoString, encoding);
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
// const writeRecs = fs.createWriteStream('./tenMillionRecords.json');

const writeTenMillionRecs = (writer, encoding, callback) => {
  let stop = 10000000;
  let i = 10000000;
  let id = 0;
  let start = Date.now();

  const write = () => {
    let ok = true;

    do {
      i -= 1;
      id += 1;

      let productInfoString = [];

      let newProduct = {
        productId: id, //must be defined or will not save
        name: faker.commerce.productName(),
        slogan: faker.fake('{{commerce.productAdjective}} {{commerce.productAdjective}} {{commerce.productAdjective}}'),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        default_price: parseFloat(faker.commerce.price()), //In original API it appears to be a string
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
      };

      productInfoString.push(`${JSON.stringify(newProduct)}`);

      productInfoString = productInfoString.sort((a, b) => a - b).join('').toString();

      if (i === 0) {
        let end = Date.now();
        console.log('Time-Elapsed: ', end - start);
        writer.write(productInfoString, encoding, callback);
      } else {
        console.log('#: ', id)
        ok = writer.write(productInfoString, encoding);
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
      default_price: parseFloat(faker.commerce.price()), //In original API it appears to be a string
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