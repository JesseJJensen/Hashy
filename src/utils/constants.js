import React from 'react'
import { FaBitcoin, FaRegEdit } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'

const API_KEY = process.env.API_KEY

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'settings',
    url: '/settings',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <FaRegEdit />,
    title: 'sign up',
    text:
      'Fill in the form and get ready to start mining in under than 1 minute',
  },
  {
    id: 2,
    icon: <FaBitcoin />,
    title: 'purchase a contract',
    text:
      'Choose one of the most profitable contracts and start cloud mining',
  },
  {
    id: 3,
    icon: <GiTakeMyMoney/>,
    title: 'get paid',
    text:
      'Withdraw your mining income on a daily basis to your crypto wallet',
  },
]



export const products_url = `https://api.airtable.com/v0/appq49OKDKPmiVXTB/products?api_key=${process.env.REACT_APP_API_KEY}`



var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWKyK4W9BClFHip'}).base('appq49OKDKPmiVXTB');

const table = base('products')

export const single_product_url = async (id) => {
    const record = await table.find(id)
    // console.log(record.fields)
}
// single_product_url("recPBAj1e081T3mXI")


// export const single_product_url = "https://api.airtable.com/v0/appwVPQ1A1XW1OPod/products?api_key=keyWKyK4W9BClFHip"