import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import React from 'react';

const FormQuestion = () => {

    const state =useSelector(state=>state.auth)
    const{form, formData, updateFormData} = useFormData();
    let navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        const a = await postQuestion(formData)
        navigate("Question/"+a);
        }

    return(
        <section className="formulario">
            {state?.user?
            <>
            <h1>Formulario de Preguntas</h1>
            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
            <label>Pregunta: </label>
            <input required name="question" type="text" placeholder='Ingresa una pregunta acá'></input>

            <input hidden name="email" type="text" defaultValue={state.user.email}></input>

            <input  required name="userId" hidden type="text" value={state.user.uid} placeholder='Ingresa una pregunta acá'></input>

            <label className=" font-medium">Type</label>
            <select required className="" name="type" defaultValue="Type">
            <option disabled type="String" value="type">Type</option>
            <option type="String" value="OPEN">OPEN (LONG OPEN BOX)</option>
            <option type="String" value="OPINION">OPINION (SHORT OPEN BOX)</option>
            <option type="String" value="WITH_RESULT">WITH RESULT (OPEN BOX WITH LINK)</option>
            <option type="String" value="WITH_EVIDENCE">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                </select>
                <label className=" font-medium">Category</label>
                <select required name="category"  defaultValue="Category"className="">
                <option disabled type="String"  value="">Category</option>
                <option value="TECHNOLOGY_AND_COMPUTER">TECHNOLOGY AND COMPUTER</option>
                <option value="SCIENCES">SCIENCES</option>
                <option value="SOFTWARE_DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                <option value="SOCIAL_SCIENCES">SOCIAL SCIENCES</option>
                <option value="LANGUAGE">LANGUAGE</option>
                </select>
                <button className="button" type="submit">Enviar</button>
            </form>
            </>
:null}
        </section>
    )

}

export default FormQuestion