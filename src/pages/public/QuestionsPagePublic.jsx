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
        <section>
        {isLoading && <h1> Cargando preguntas </h1>}
            {error && <h1> Error {error} </h1>}
            {questions && questions.map((question)=>{
                return(
                    <QuestionPublic key={question.id} question={question}/>
                )
            })}
        </section>
    )
}

export default QuestionsPagePublic
