import React from 'react'
import { Link } from 'react-router-dom'

function Home2(props) {
  console.log(props)

  // Iterator for bounty links (from props.bounties)

  if (!props.bounties) {
    return <p>...Loading</p>
  }

  return (
    <div>
      <h2>BOUNTY HOMEPAGE VIEW</h2>

      {/* 1. A conditional used to check if props.bounties is defined;
          2. if props.bounty is defined, then map through the bounties */}

      {props.bounties &&
        props.bounties.map((bounty) => {
          return (
            <div>
              {/* Link to trigger <App/> to render <Show /> component and display content from 'bounty' map variable*/}

              <Link to={'/show/' + bounty._id}>{bounty.name}</Link>
            </div>
          )
        })}
    </div>
  )
}

export default Home2
