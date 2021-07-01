import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
const API_KEY = process.env.API_KEY

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
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
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]



export const products_url = `https://api.airtable.com/v0/appq49OKDKPmiVXTB/products?api_key=${process.env.REACT_APP_API_KEY}`



var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWKyK4W9BClFHip'}).base('appq49OKDKPmiVXTB');

const table = base('products')

export const single_product_url = async (id) => {
    const record = await table.find(id)
    console.log(record.fields)
}
// single_product_url("recPBAj1e081T3mXI")


// export const single_product_url = "https://api.airtable.com/v0/appwVPQ1A1XW1OPod/products?api_key=keyWKyK4W9BClFHip"