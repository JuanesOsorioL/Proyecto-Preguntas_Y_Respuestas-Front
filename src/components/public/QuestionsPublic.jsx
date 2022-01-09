import { Link } from "react-router-dom"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const QuestionsPublic = ({question}) => {

const element = <FontAwesomeIcon icon={faQuestionCircle}  size="6x" />

  return(
    <div className='question-public'>
      <div className="contenedor_question-public">
        <div className="colum-1Q">{element}</div>
        <div className="colum-2Q">
          <p>{question.question}<br></br>
            Categoria: <small>{question.category}</small><br></br>
            Tipo: <small>{question.type}</small>
          </p>
        </div>
        <div className="colum-3Q">
          <Link to={`/question/${question.id}`} className="button-view">
            View Question
          </Link>
        </div>
      </div>
    </div>
  )
}

export default QuestionsPublic