import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

import Coin from './Coin';



const CryptoPrices = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
    axios
        .get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        )
        // 237 coins
        .then(res => {
            setCoins(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <main>
        <Wrapper className='page section section-center'>
            <article>
                <div className='coin-app'>
                <div className='coin-search'>
                    <h1 className='coin-text'>Search a currency</h1>
                    <form>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                    </form>
                </div>
                {filteredCoins.map(coin => {
                    return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                    );
                })}
                </div>
            </article>
      {/* <Ethereum />
      <Bitcoin />
      <Zcash />
      <Decred />
      <Dash />
      <Litecoin /> */}
        </Wrapper>
    </main>
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

export default CryptoPrices
