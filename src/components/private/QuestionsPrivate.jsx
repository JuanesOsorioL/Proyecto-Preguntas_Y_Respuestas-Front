import { Link } from "react-router-dom"
import React from 'react';
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { deleteQuestion } from "../../app/middleware/payloadQuestions";
import { toast } from 'react-toastify';

const QuestionsPrivate = ({question, mostrar}) => {

  const element = <FontAwesomeIcon icon={faQuestionCircle}  size="6x" />
  const Swal = require('sweetalert2')
  const dispatch = useDispatch()

  const eliminarPregunta=()=>{
    Swal.fire({
    title: 'Alerta!',
    text: "Estas seguro que quieres eliminar esta Pregunta?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si'
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(deleteQuestion(question.id, question.userId,toast))
    }
  })
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
        </div>
        <div className="colum-3Q">
          <Link to={`/private/question/${question.id}`} className="button-view">
            View Question
          </Link>
          {mostrar &&
          <button type="button" className="btn btn-danger" onClick={()=>{eliminarPregunta()}}>Eliminar</button>
          }
        </div>
      </div>
    </div>
    
    )
}

export default QuestionsPrivate