import React from 'react'
import { Link } from 'react-router-dom'

function Show(props) {
  /* New Feature:
    1. Added a delete button in JSX to trigger the below function 
    2. Added an edit <Link/> to redirect to edit page for this bounty
  */
  const deleteBounty = () => {
    fetch(`http://localhost:9000/bounties/${props.bounty._id}`, {
      method: 'DELETE',
    }).then((res) => {
      props.reload()
      props.history.push('/')
    })
  }

  // if props.bounty is undefined(falsy), render loading message instead
  if (!props.bounty) {
    return <h1>Loading...</h1>
  }
  // default JSX with content from props.bounty && links to edit page / delete option
  return (
    <div>
      <h2>{props.bounty.name}</h2>
      <p>Wanted for: {props.bounty.wantedFor}</p>
      <p>Client: {props.bounty.client}</p>
      <p>Reward: {props.bounty.reward}</p>
      <div>
        <Link to={`/edit/${props.bounty._id}`}>Edit {props.bounty.name}</Link>
        <br />
        <button onClick={deleteBounty}>Delete this Bounty</button>
      </div>
    </div>
  )
}

export default Show
