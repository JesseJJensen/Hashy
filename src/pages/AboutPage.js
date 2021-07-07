import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/index.js'
import aboutImg from '../assets/spaceData.jpeg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='coin' />
        <article>
          <div className='title'>
            <h2>about us</h2>
            <div className='underline'></div>
          </div>
          <p>
          We are developing the world's Top Cloud Mining Platform with the most advanced deployment technology. Our goal is to have 10% of the world's cryptocurrency Hash Rate by the year 2024 and 90% of our data centers operating in space. Currently we are operating out of Jesse's basement. 
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPage
