import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
/* VIEWS IMPORTS */
import Home from './pages/Home2'
import Show from './pages/Show'
import New from './pages/New'
import Edit from './pages/Edit'

/* COMPONENT IMPORTS */
import Nav from './components/Nav'

require('dotenv').config()

const CONNECTION_URI = process.env.DB_URI || 'http://localhost:9000'

/* The Container Application 
    1. Our content is stored in app in the bounties variables []
    2. We will use the finishedLoading boolean to display our components or a loading message. 
*/

function App(props) {
  const [bounties, setBounties] = useState([])
  const [finishedLoading, setFinishedLoading] = useState(false)

  //  Helper function that will trigger a rerender of app (when invoked by child components (new/show/edit))

  const fetchBounties = async () => {
    const response = await fetch(CONNECTION_URI + '/bounties')
    const respJSON = await response.json()
    setBounties(respJSON.bounties)
    setFinishedLoading(true)
  }

  useEffect(() => {
    fetchBounties()
  }, [])

  // LOGGING to very state / DB changes
  // console.log(bounties);

  // We can use an if check to block our rendered content if the API is not reachable/content has not finished loading.
  if (!finishedLoading) {
    return <p>...Loading</p>
  }

  return (
    <div className='App'>
      <Nav />
      <h1>Bounties Client App!</h1>

      <Route path='/home2' exact>
        <Home bounties={bounties} />
      </Route>

      <Route
        path='/show/:id'
        render={(routeProps) => {
          // we are using routeProps object - to access which route id is triggering this render
          // you can test this by console logging - props.match.params.id (inside of show)
          // we use this value to make a comparison across all bounties and return on the bounty that matches
          // we store that found bounty in the bounty variable
          // we pass bounty to show (object from bounties) >> Show component

          const bounty = bounties.find((b) => {
            return b._id === routeProps.match.params.id
          })

          return <Show {...routeProps} bounty={bounty} reload={fetchBounties} />
        }}
      />

      <Route path='/new'>
        <New reload={fetchBounties} />
      </Route>

      <Route
        path='/edit/:id'
        render={(routeProps) => {
          // We can repeat the process we used for the 'show route':
          // Find a bounty from the bounties array (local to app) - comparing data from routeProps && the ._id value from local state

          const bounty = bounties.find((b) => {
            return b._id === routeProps.match.params.id
          })

          return <Edit bounty={bounty} reload={fetchBounties} {...routeProps} />
        }}
      />
    </div>
  )
}

export default App
