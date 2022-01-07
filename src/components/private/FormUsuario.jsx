/* import React from 'react';
import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';

const FormUsuario = () => {

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData)
      }

    return(
        <div>
            <h1>Actualización de los datos personales</h1>

            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label>Datos Personales</label>
                <input name="nombre" placeholder='Ingrese Nombre'></input>
                <input name="apellido" placeholder='Ingrese Pellido'></input>
                <input name="correo" placeholder='Ingrese Correo'></input>
                <button type="submit">Actualizar</button>
            </form>
        </div>
    )

}

export default FormUsuario; */