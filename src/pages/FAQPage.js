import React, { useState } from 'react';
import data from '../utils/FAQData';
import SingleQuestion from '../components/Question';
import styled from 'styled-components'


function FAQPage() {
  const [questions, setQuestions] = useState(data);
  return (
    <Wrapper>
        <main>
        <div className='container'>
            <h3>FAQ's</h3>
            <section className='info'>
            {questions.map((question) => {
                return (
                <SingleQuestion key={question.id} {...question}></SingleQuestion>
                );
            })}
            </section>
        </div>
        </main>
    </Wrapper>
  );
}

const Wrapper = styled.main`
.container {
  width: 90vw;
  margin: 5rem auto;
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  display: grid;
  gap: 1rem 4rem;
}
.container h3 {
  line-height: 1.2;
  font-weight: 500;
}

`

export default FAQPage;