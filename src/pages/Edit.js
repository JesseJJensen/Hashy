import React from 'react'
import Form from '../components/Form'

function Edit(props) {
  console.log('EDIT Page:', props)
  return (
    <>
      BOUNTY EDIT VIEW
      {/* 
          Component Review:
          1. Edit Page View is responsible for rendering 1 component - <Form>
          2. We can use the same component but pass in different props to create unique functionality
          3. Conditional logic also will change which datasource is used for show page routing
      */}
      <Form reload={props.reload} bounty={props.bounty} />
    </>
  )
}

export default Edit
