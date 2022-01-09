import { useDispatch,useSelector } from "react-redux";
import { loadById } from '../../app/middleware/payloadQuestions';
import OneQuestionPrivate from '../../components/private/OneQuestionPrivate';
import {useEffect} from'react'
import { useParams } from "react-router-dom";
import FormAnswer from "../../components/private/FormAnswer";
import ViewAnswer from "../../components/private/ViewAnswer";
import React from 'react';

const OneQuestionPagePrivate = () => {
  const {id}=useParams();
  const dispatch = useDispatch()
  const state =useSelector(state=>state.auth)
  const {oneQuestion} = useSelector(state => state.oneQuestion)

  useEffect(()=>{
    dispatch(loadById(id))
    
  },[])


  return (
    <section className="pagina">
      {oneQuestion &&
        <>
          <OneQuestionPrivate oneQuestion={oneQuestion}/>
          {oneQuestion.answers&&oneQuestion.answers.map((answer,index)=>{
              const eliminar=answer.userId===state.user.uid
            return(
              <ViewAnswer key={index} answer={answer} eliminar={eliminar} />
            )
            })}
          <FormAnswer idQuestion={oneQuestion.id} ></FormAnswer>
        </>
      }
    </section>
  )
}
export default OneQuestionPagePrivate