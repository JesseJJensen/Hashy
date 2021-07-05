import React from 'react'
import styled from 'styled-components'
import image from '../assets/hero-bcg-2.jpeg'

const CryptoColumns = () => {
  return (
    <Wrapper className='section'>
        <div className='content'>
            <h5>coin</h5>
            <h5>symbol</h5>
            <h5>price</h5>
            <h5>market cap</h5>
            <h5>days change</h5>
      </div>
      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
  @media (min-width: 300px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 125px auto auto auto auto ;
      justify-items: center;
      column-gap: 3rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }


    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`

export default CryptoColumns
