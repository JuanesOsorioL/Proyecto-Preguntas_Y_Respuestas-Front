import {useEffect} from'react'
import { useDispatch,useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPublic from '../../components/public/QuestionsPublic';
import React from 'react';

const QuestionsPagePublic = () => {

  const dispatch = useDispatch()
  const {isLoading,questions,error}=useSelector(state=>state.question)

  useEffect(()=>{
    dispatch(loadAllQuestion())
  },[])

  return (
    <section className="pagina">
      {/*  {isLoading && <h3> Cargando preguntas </h3>}
            {error && <h3> Error {error} </h3>} */}
      {questions && questions.map((question)=>{
        return(
          <QuestionPublic key={question.id} question={question}/>
        )
      })}
    </section>
  )
}

export default QuestionsPagePublic
