import React from 'react'
import styled from 'styled-components'
import CryptoPrices from '../components/CryptoPrices';
import Bitcoin from '../components/Bitcoin';

const Dashboard = () => {
  return (
    <main>
        <Wrapper className=''>
            <CryptoPrices />
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

`

export default Dashboard
