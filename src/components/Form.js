import { useState } from 'react'
import FormField from './FormField'
import { withRouter } from 'react-router-dom'

// Connection String
const CONNECTION_URI = process.env.DB_URI || 'https://hashy-app.herokuapp.com'

function Form(props) {
  const initialState = props.wallet
    ? {
        name: props.wallet.name,
        crypto: props.wallet.crypto,
        walletAddress: props.wallet.walletAddress,
        balance: props.wallet.balance,
      }
    : {
        name: '',
        crypto: '',
        walletAddress: '',
        balance: '',
      }

  const [state, setState] = useState(initialState)

  const submitForm = async (e) => {
    e.preventDefault()

    // Arg1 for fetch (conditional)

    let url = props.wallet
      ? `${CONNECTION_URI}/wallets/${props.wallet._id}`
      : `${CONNECTION_URI}/wallets/`

    let method = props.wallet ? 'PUT' : 'POST'

    let options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }

    const response = await fetch(url, options)
    const respJSON = await response.json()

    props.reload()

    props.wallet
      ? props.history.push(`/show/${props.wallet._id}`)
      : props.history.push(`/show/${respJSON.wallet._id}`)
  }

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })

    // 1. Invoke setState
    // 2. Spread the current value of state into a new object (argument)
    // 3. Add a key/value pair that matches the currently updated input (and its value)
  }
  return (
    <form onSubmit={submitForm}>
      {/* create a label & a text field for each */}
      {/* add a submit button to the form */}

      <FormField
        labelLink='name'
        displayLabel='Wallet Name'
        value={state.name}
        handler={handleInput}
      />
      <FormField
        labelLink='crypto'
        displayLabel='Cryptocurrency Name'
        value={state.crypto}
        handler={handleInput}
      />
      <FormField
        labelLink='walletAddress'
        displayLabel='Wallet Address'
        value={state.walletAddress}
        handler={handleInput}
      />
      <FormField
        labelLink='balance'
        displayLabel='Current Balance'
        value={state.balance}
        handler={handleInput}
      />

      <button type='submit'>
        {props.wallet
          ? `Edit "${props.wallet.name}" Wallet`
          : 'Add Wallet'}
      </button>
    </form>
  )
}

export default withRouter(Form)
