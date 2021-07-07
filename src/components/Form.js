import { useState } from 'react'
import FormField from './FormField'
import { withRouter } from 'react-router-dom'

// Connection String
const CONNECTION_URI = process.env.DB_URI || 'http://localhost:9000'

function Form(props) {
  const initialState = props.bounty
    ? {
        name: props.bounty.name,
        wantedFor: props.bounty.wantedFor,
        client: props.bounty.client,
        reward: props.bounty.reward,
      }
    : {
        name: '',
        wantedFor: '',
        client: '',
        reward: '',
      }
  // conditionally defined state - if props are present -
  // then set initial state with values from props.bounty otherwise fill an object with empty strings

  const [state, setState] = useState(initialState)

  const submitForm = async (e) => {
    e.preventDefault()

    // Arg1 for fetch (conditional)

    let url = props.bounty
      ? `${CONNECTION_URI}/bounties/${props.bounty._id}`
      : `${CONNECTION_URI}/bounties/`

    // Arg2 for fetch (conditional)
    // If props.bounty is defined, set the method to put (for edit),otherwise set method to post (for create)
    let method = props.bounty ? 'PUT' : 'POST'

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

    props.bounty
      ? props.history.push(`/show/${props.bounty._id}`)
      : props.history.push(`/show/${respJSON.bounty._id}`)
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
        displayLabel='Name'
        value={state.name}
        handler={handleInput}
      />
      <FormField
        labelLink='wantedFor'
        displayLabel='Wanted For'
        value={state.wantedFor}
        handler={handleInput}
      />
      <FormField
        labelLink='client'
        displayLabel='Client'
        value={state.client}
        handler={handleInput}
      />
      <FormField
        labelLink='reward'
        displayLabel='Reward'
        value={state.reward}
        handler={handleInput}
      />

      <button type='submit'>
        {props.bounty
          ? `Edit "${props.bounty.name}" Bounty`
          : 'Create New Bounty'}
      </button>
    </form>
  )
}

export default withRouter(Form)
