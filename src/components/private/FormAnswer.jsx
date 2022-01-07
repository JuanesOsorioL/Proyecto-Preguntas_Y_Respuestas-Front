import useFormData from '../../hooks/UseFormData'
import { postAnswer } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';
import React from 'react';

const FormAnswer = ({idQuestion}) => {

    const state =useSelector(state=>state.auth)

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        postAnswer(formData)
      }

    return(
        <section>
            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <h1>Respuestas</h1>
                <label>Añade una respuesta.</label>
                <input required name="answer" type="text" placeholder='Ingresa acá una respuesta'></input>
                <input hidden name="userId" type="text" value={state.user.uid} ></input>
                <input hidden name="questionId" type="text" value={idQuestion} ></input>
                <button className="button" type="submit">Enviar Respuesta</button>
            </form>
        </section>
    )
}

export default FormAnswer