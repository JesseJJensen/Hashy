// create a record
// when calling createRecord() function you can use postman or airtable docs for reference

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWKyK4W9BClFHip'}).base('appq49OKDKPmiVXTB');

const table = base('products')

const getRecords = async () => {
   const records = await table.select().firstPage()
   records.forEach(function(record) {
    // console.log('Retrieved', record.get('name'));
    // console.log(record.fields)
    // console.log(record.fields.name)
    // console.log(record.id)
    });
}
getRecords()

const getRecordById = async (id) => {
    const record = await table.find(id)
    console.log(record)
}



const createRecord = async (record) => {
    const createdRecord = await table.create(record) 
    createdRecord.forEach(function(record) {
    // console.log('Retrieved', record.get('name'));
    console.log('id:', record.id, record.fields);
    });

}

base('products').update([
  {
    "id": "rec8WVxkOXGaNz2Xf",
    "fields": {
      "name": "bitcoin",
      "price": 85,
      "featured": true,
      "company": "btc",
      "stars": 5,
      "reviews": 1,
      "category": "bitcoin",
      "description": "Bitcoin was created by Satoshi Nakamoto, a pseudonymous person or team who outlined the technology in a 2008 white paper. It’s an appealingly simple c...",
      "maintenance fee": "$ 0.0015  / 10 GH/s / day",
      "algorithm": "SHA-256 ",
      "minimum hashrate": "10 GH/s"
    }
  },
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function(record) {
    console.log('updated', record.id, record.get('name'));
  });
});

deleteRecord = async (id) => {
    const deletedRecord = await table.destroy(id)
    console.log(deletedRecord)
}
deleteRecord('rec8WVxkOXGaNz2Xf')


// createRecord([
//   {
//     "fields": {
//       "name": "Jesse Coin",
//     }
//   },
// ], function(err, records) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   records.forEach(function (record) {
//     console.log(record.getId());
//   });
// });