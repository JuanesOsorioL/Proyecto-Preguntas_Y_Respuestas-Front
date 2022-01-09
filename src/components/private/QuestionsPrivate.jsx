import { Link } from "react-router-dom"
import React from 'react';
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { deleteQuestion } from "../../app/middleware/payloadQuestions";

const element = <FontAwesomeIcon icon={faQuestionCircle}  size="6x" />

const QuestionsPrivate = ({question}) => {

  const dispatch = useDispatch()

  const eliminarPregunta=()=>{
    /* console.log(question);
    console.log(question.id, question.userId); */
    dispatch(deleteQuestion(question.id, question.userId))
  }

  return(
    <div className='question-public'>
      <div className="contenedor_question-public">
        <div className="colum-1Q">{element}</div>
        <div className="colum-2Q">
          <p>
            {question.question}<br></br>
            Categoria: <small>{question.category}</small><br></br>
            Tipo: <small>{question.type}</small>
          </p>
          {/* {onDelete && (
          <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
          )} */}
        </div>
        <div className="colum-3Q">
          <Link to={`/private/question/${question.id}`} className="button-view">
                View Question
          </Link>
          <button type="button" className="btn btn-danger" onClick={()=>{eliminarPregunta()}}>Eliminar</button>
        </div>
      </div>
    </div>
/*
        <section className="margen">
            <p>
                Pregunta: <small>{question.question}</small>
                Categoria: <small>{question.category}</small>
                Tipo: <small>{question.type}</small>
            </p>

            <Link to={`/private/question/${question.id}`} className="button">
                View Question
            </Link>
        </section> */
    )
}

export default QuestionsPrivate