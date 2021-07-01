//.netlify/functions/airtable
// const Airtable = require('airtable-node');
 
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWKyK4W9BClFHip'}).base('appq49OKDKPmiVXTB');

base('products').create([
  {
    "fields": {
      "name": "bitcoin",
      "price": 85,
      "image": [
        {
          "url": "https://dl.airtable.com/.attachments/b1b1fe4633fc190a5c36f2885d5410cd/ee12c44a/btcone.svg"
        }
      ],
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
  {
    "fields": {
      "name": "ethereum",
      "price": 205,
      "image": [
        {
          "url": "https://dl.airtable.com/.attachments/19a0cc25db01157900a53e77ad0b1749/915292d6/ethone.svg"
        }
      ],
      "featured": true,
      "company": "eth",
      "instock": true,
      "stars": 5,
      "reviews": 1,
      "category": "ethereum",
      "description": "Ethereum, which launched in 2015, is the second-biggest cryptocurrency by market cap after Bitcoin. But unlike Bitcoin, it wasn’t created to be digita...",
      "maintenance fee": "$ 0.0035  / 100 KH/s / day",
      "algorithm": "ETHASH ",
      "minimum hashrate": "100 KH/s"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log('-----------------here-----------------------')
    console.log(record.getId());
  });
});