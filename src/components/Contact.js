import React from 'react'
import styled from 'styled-components'
const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>contact us</h3>
        <div className='content'>
          <p>
            contact left contact left contact left contact left contact left contact left contact left contact left contact left contact left contact left contact left
          </p>
          <form className='contact-form'                                 action='https://formspree.io/f/xknkzrzz'
              method='Post'
              >
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
              name='_replyto'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
`

export default Contact
