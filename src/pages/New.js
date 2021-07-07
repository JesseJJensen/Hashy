import React from 'react'
import Form from '../components/Form'
function New(props) {
  console.log(props)

  return (
    <div>
      <h2>NEW BOUNTY VIEW</h2>
      <Form reload={props.reload} />
    </div>
  )
}

export default New
