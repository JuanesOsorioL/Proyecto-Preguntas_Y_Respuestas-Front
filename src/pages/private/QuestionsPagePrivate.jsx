import {useEffect} from'react'
import { useDispatch,useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPrivate from '../../components/private/QuestionsPrivate';
import React from 'react';
const QuestionsPagePrivate = () => {
  const dispatch = useDispatch()
  const {isLoading,questions,error}=useSelector(state=>state.question)

  useEffect(()=>{
    dispatch(loadAllQuestion())
  },[])

  return (
    <section className="pagina">
      {isLoading && null}
      {error && <h1> Error {error} </h1>}
      {questions && !isLoading && questions.map((question)=>{
        return(
          <QuestionPrivate key={question.id} question={question} mostrar={false}/>
        )
      })}
    </section>
  )
}

export default QuestionsPagePrivate
