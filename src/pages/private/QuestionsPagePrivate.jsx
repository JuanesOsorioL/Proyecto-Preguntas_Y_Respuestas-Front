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
      console.log(questions);
    },[])
  
    
    return (
        <section>
        {isLoading && <h1> Cargando preguntas </h1>}
            {error && <h1> Error {error} </h1>}
            {questions && questions.map((question)=>{
                return(
                    <QuestionPrivate key={question.id} question={question}/>
                )
            })}
        </section>
    )
}

export default QuestionsPagePrivate
