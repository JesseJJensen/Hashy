import React from 'react'
import { Navbar} from './components'

import styled from 'styled-components'

const Button = styled.button`
    background:green;
    color: white;
`

const Container = styled.div`
    background: red;
    color: white;
    .hero {
        font-size: 8rem;
    }    
`

const Container2 = styled.div`
    background: red;
    color: white;
    .hero {
        font-size: 1rem;
    }    
`

function App() {
  return (
  <div>
    <Navbar />
    <h4>Hashy</h4>
    <Button>click me</Button>
    <Container>
        <div>
            <h3>hello world</h3>
        </div>
        <div className='hero'>hero text</div>
    </Container>
    <Container2>
        <div>
            <h3>hello world</h3>
        </div>
        <div className='hero'>hero text</div>
    </Container2>
  </div>
  )
}

export default App
