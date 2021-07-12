import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Wallet(props) {
  console.log(props)

  if (!props.wallets) {
    return <p>...Loading</p>
  }

  return (
    <Wrapper>
    <div className='container'>
      <h2>My Wallets</h2>

      {props.wallets &&
        props.wallets.map((wallet) => {
          return (
            <div>


              <Link to={'/show/' + wallet._id}>{wallet.name}</Link>
            </div>
          )
        })}
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

export default Wallet
