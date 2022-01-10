import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserQuestion } from "../../app/middleware/payloadQuestions"
import QuestionsPrivate from "../../components/private/QuestionsPrivate"
import React from 'react';


const MyQuestions = () => {
  const dispatch = useDispatch()
  const {user}=useSelector(state=>state.auth)
  const {
    isLoading,
    myQuestions,
    error
  } = useSelector(state => state.myQuestion)

  useEffect(() =>{
    dispatch(getUserQuestion(user.uid));
  },[])

  return (
    <section className="pagina">
  {/* {isLoading && <h3> Cargando preguntas </h3>}
            {error && <h3> Error {error} </h3>} */}
      {myQuestions && myQuestions.map((question)=>{
        return(
          <QuestionsPrivate key={question.id} question={question} mostrar={true}/>
        )
      })}
    </section>
  )
}

export default MyQuestions
