import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg-2.jpeg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>about us</h2>
            <div className='underline'></div>
          </div>
          <p>
            about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
`

export default AboutPage
