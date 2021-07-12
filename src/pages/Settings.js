import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
/* VIEWS IMPORTS */
import Home from './Wallet'
import Show from './Show'
import New from './New'
import Edit from './Edit'
import styled from 'styled-components'

/* COMPONENT IMPORTS */
import Nav from '../components/Nav'

require('dotenv').config()

const CONNECTION_URI = process.env.DB_URI || 'https://hashy-app.herokuapp.com'


function Settings(props) {
  const [wallets, setWallets] = useState([])
  const [finishedLoading, setFinishedLoading] = useState(false)

  //  Helper function that will trigger a rerender of app (when invoked by child components (new/show/edit))

  const fetchWallets = async () => {
    const response = await fetch(CONNECTION_URI + '/wallets')
    const respJSON = await response.json()
    setWallets(respJSON.wallets)
    setFinishedLoading(true)
  }

  useEffect(() => {
    fetchWallets()
  }, [])

  // We can use an if check to block our rendered content if the API is not reachable/content has not finished loading.
  if (!finishedLoading) {
    return <p>...Loading</p>
  }

  return (
    <Wrapper>
    <div className='App'>
      
      <h2>Settings</h2>
      
      <Nav />

      <Route path='/wallet' exact>
        <Home wallets={wallets} />
      </Route>

      <Route
        path='/show/:id'
        render={(routeProps) => {

          const wallet = wallets.find((b) => {
            return b._id === routeProps.match.params.id
          })

          return <Show {...routeProps} wallet={wallet} reload={fetchWallets} />
        }}
      />

      <Route path='/new'>
        <New reload={fetchWallets} />
      </Route>

      <Route
        path='/edit/:id'
        render={(routeProps) => {
          const wallet = wallets.find((b) => {
            return b._id === routeProps.match.params.id
          })

          return <Edit wallet={wallet} reload={fetchWallets} {...routeProps} />
        }}
      />
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`

`

export default Settings
