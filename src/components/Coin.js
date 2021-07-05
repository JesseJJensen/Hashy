import React from 'react';
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <Wrapper>
        <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
            <img src={image} alt='crypto' />
            <h1>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
            <p className='coin-price'>${price.toLocaleString()}</p>
            <p className='coin-volume'>${marketcap.toLocaleString()}</p>

            {priceChange < 0 ? (
                <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
            ) : (
                <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
            )}
            </div>
        </div>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
  height: 30px;
  width: 30px;
  margin-right: 10px;
}

.coin-symbol {
  text-transform: uppercase;
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

.coin-volume {
  width: 155px;
}

.coin-marketcap {
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

export default Coin;