const fs = require('fs');
const faker = require('faker');

// const writeTestRecs = fs.createWriteStream('./listRecordsExample.json');


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

      let productListString = [];

      let newProduct = {
        productId: id, //must be defined or will not save
        name: faker.commerce.productName(),
        slogan: faker.fake('{{commerce.productAdjective}} {{commerce.productAdjective}} {{commerce.productAdjective}}'),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        default_price: parseFloat(faker.commerce.price()) //In original API it appears to be a string
      }



      productListString.push(`${JSON.stringify(newProduct)}`);

      productListString = productListString.sort((a, b) => a - b).join('').toString();

      if (i === 0) {
        let end = Date.now();
        console.log('Time-Elapsed: ', end - start);
        writer.write(productListString, encoding, callback);
      } else {
        console.log('#: ', id)
        ok = writer.write(productListString, encoding);
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
// const writeMillionRecs = fs.createWriteStream('./oneMillionListRecords.json');


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

      let productListString = [];

      let newProduct = {
        productId: id, //must be defined or will not save
        name: faker.commerce.productName(),
        slogan: faker.fake('{{commerce.productAdjective}} {{commerce.productAdjective}} {{commerce.productAdjective}}'),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        default_price: parseFloat(faker.commerce.price()) //In original API it appears to be a string
      }


      productListString.push(`${JSON.stringify(newProduct)}`);


      productListString = productListString.sort((a, b) => a - b).join('').toString();

      if (i === 0) {
        let end = Date.now();
        console.log('Time-Elapsed: ', end - start);
        writer.write(productListString, encoding, callback);
      } else {
        console.log('#: ', id)
        ok = writer.write(productListString, encoding);
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
// const writeRecs = fs.createWriteStream('./tenMillionListRecords.json');

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

      let productListString = [];

      let newProduct = {
        productId: id, //must be defined or will not save
        name: faker.commerce.productName(),
        slogan: faker.fake('{{commerce.productAdjective}} {{commerce.productAdjective}} {{commerce.productAdjective}}'),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        default_price: parseFloat(faker.commerce.price()) //In original API it appears to be a string
      }

      productListString.push(`${JSON.stringify(newProduct)}`);

      productListString = productListString.sort((a, b) => a - b).join('').toString();

      if (i === 0) {
        let end = Date.now();
        console.log('Time-Elapsed: ', end - start);
        writer.write(productListString, encoding, callback);
      } else {
        console.log('#: ', id)
        ok = writer.write(productListString, encoding);
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
      default_price: parseFloat(faker.commerce.price()) //In original API it appears to be a string
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