import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components/index.js'
import {
  Home,
  Dashboard,
  FAQPage,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  Settings,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages'
import App2 from './App2'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <AuthWrapper>
        
      <Router>
        <App2></App2>
        {/* <Navbar /> */}
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/faqpage'>
            <FAQPage />
          </Route> 
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <BrowserRouter path='/settings'>
            <Settings />
          </BrowserRouter>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route path='/products/:id' children={<SingleProduct />} />
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
        
      </Router>
     </AuthWrapper>
  )
}

export default App
