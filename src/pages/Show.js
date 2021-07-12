import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import styled from 'styled-components'

function Show(props) {

  const deleteWallet = () => {
    fetch(`https://hashy-app.herokuapp.com/wallets/${props.wallet._id}`, {
      method: 'DELETE',
    }).then((res) => {
      props.reload()
      props.history.push('/')
    })
  }

  if (!props.wallet) {
    return <h1>Loading...</h1>
  }

  return (
    <Wrapper>
    <div classname='container'>
      <h2>{props.wallet.name}</h2>
      <p>Cryptocurrency Name: {props.wallet.crypto}</p>
      <p>Wallet Address: {props.wallet.walletAddress}</p>
      <p>Balance: {props.wallet.balance}</p>
      <div>
        <Link to={`/edit/${props.wallet._id}`}>Edit {props.wallet.name}</Link>
        <br />
        <button onClick={deleteWallet}>Delete this Wallet</button>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`

`

export default Show
