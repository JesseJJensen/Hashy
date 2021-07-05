import React from 'react'
import styled from 'styled-components'
import image from '../assets/hero-bcg-2.jpeg'

const CryptoColumns = () => {
  return (
    <Wrapper>
      <div className='coin-container'>
            <div className='coin-row'>
                <div lassName='coin'>
                <p>coin</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-symbol'>symbol</p>
                    <p className='coin-price'>price</p>
                    <p className='coin-marketCap'>market cap</p>
                    <p className='coin-percent'>days change </p>
                </div>
            </div>
      </div>
      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.div`

.coin-container {
  display: flex;
  justify-content: center;
}

.coin-row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;
}

.coin {
  display: flex;
  align-items: center;
  padding-right: 24px;

  min-width: 300px;
}

.coin h1 {
  font-size: 16px;
  width: 150px;
}

.coin img {
  height: 10px;
  width: 10px;
  margin-right: 10px;
}

.coin-data {
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;
}


.coin-price {
  width: 110px;
}

.coin-marketCap {
  width: 155px;
}

.coin-volume {
  width: 230px;
}

.coin-percent {
  width: 100px;
}

.red {
  color: #f00606;
}

.green {
  color: #11d811;
}


`

export default CryptoColumns
