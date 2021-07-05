require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: 'keyWKyK4W9BClFHip' })
  .base('appq49OKDKPmiVXTB')
  .table('products')

exports.handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list()
    const products = records.map((product) => {
      const { id } = product
      const { name, image, price, featured, instock, stars, stock, description, reviews, category, company } = product.fields
      const imgUrl = image[0].url
      return { id, name, imgUrl, price, featured, instock, stars, stock, description, reviews, category, company }
    })
    // console.log(products)
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    }
  }
}



