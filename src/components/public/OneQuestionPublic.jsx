import React from 'react';

const OneQuestionPublic = ({question}) => {
  return(
    <div className='question'>
      <h2>{question.question}</h2>
      <p>
        <small>Categoria: </small> {question.category}<br></br>
        <small>Tipo: </small>{question.type}
      </p>
    </div>
    )
}
export default OneQuestionPublic