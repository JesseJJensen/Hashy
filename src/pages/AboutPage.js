import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/index.js'
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut aliquam lectus, a tempor urna. In vestibulum elit vitae venenatis consectetur. Sed efficitur ut ligula sit amet vestibulum. Aliquam erat volutpat. Aliquam feugiat vitae urna venenatis hendrerit. Suspendisse sit amet facilisis ipsum. Etiam tristique diam arcu, non ultricies leo bibendum id. Praesent pellentesque ex eget ultrices commodo. Praesent ac turpis ipsum. Mauris in nisi at erat venenatis rhoncus ut non mi. Morbi non arcu risus. Maecenas eros odio, luctus vel iaculis vitae, consequat et nulla. Vivamus ornare, risus ut venenatis finibus, ipsum velit lobortis elit, in iaculis orci augue consequat diam.

Duis nibh erat, egestas sed odio id, blandit feugiat elit. Nulla ullamcorper viverra turpis, quis posuere magna consectetur nec. Sed ornare nibh at laoreet egestas. Maecenas aliquam, purus sit amet posuere euismod, arcu libero pellentesque est, ut suscipit velit felis a ante. Nullam laoreet at ante id pellentesque. Nulla sit amet pulvinar nisl, et scelerisque sapien. Mauris ipsum nisl, hendrerit eu dapibus id, suscipit at nisi. Morbi pretium mi id ipsum mattis vehicula. Nunc dignissim ex nisl, vel euismod ligula euismod ut. Phasellus ullamcorper purus quis bibendum iaculis. Pellentesque id metus et magna vestibulum vehicula. Integer blandit dui ex, vel venenatis leo varius et.
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
