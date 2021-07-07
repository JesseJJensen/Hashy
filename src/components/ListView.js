import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '.'

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, imgUrl, name, price, description, stock, stars,reviews, id: sku, company, images, coinprice } = product
        // console.log(product)

        return (
          <article key={id}>
            <img src={imgUrl} alt={name} />
            <div>
              {/* <Link to={`/products/${id}`} className='btn'>
                Details
              </Link> */}
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            {/* <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p> */}
            <p className='info'>
              <span>SKU :</span>
              {sku}
            </p>
            <p className='info'>
              <span>Company :</span>
              {company}
            </p>
            {/* <p className='info'>
              <span>Current Price :</span>
              {coinprice}
            </p> */}
              {/* {stock > 0 && <AddToCart product={product} />} */}
              {<AddToCart product={product}/>}
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
