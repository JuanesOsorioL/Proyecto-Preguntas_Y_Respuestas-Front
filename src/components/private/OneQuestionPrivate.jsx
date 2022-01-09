import React from 'react';

const OneQuestionPrivate = ({oneQuestion}) => {
  return(
    <section className='question'>
      <h2>{oneQuestion.question}</h2>
      <p>
        <small>Categoria: </small> {oneQuestion.category}<br></br>
        <small>Tipo: </small>{oneQuestion.type}
      </p>
    </section>
    )
}

export default OneQuestionPrivate