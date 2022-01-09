import React  from 'react'
import {  useDispatch ,useSelector  } from "react-redux"
import useFormData from '../../hooks/UseFormData'
import { ActualizarUser } from '../../app/middleware/payloadQuestions'

const Actualizar = () => {

const{form, formData, updateFormData} = useFormData();

const dispatch = useDispatch()
const state = useSelector(state=>state.auth)

const submitForm = (e) => {
  e.preventDefault();
  dispatch(ActualizarUser(formData))
}
  return (
  <section className="formulario">
    <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
      <h1>Actualizar</h1>
      <label>Nombre: </label>
      <input required name="nombre" type="text" defaultValue={state.user.nombre}></input>
      <label>Apellido: </label>
      <input required name="apellido" type="text"defaultValue={state.user.apellido}></input>
      <label>Correo: </label>
      <input required name="email"  type="text" placeholder='Correo' defaultValue={state.user.email} ></input>
      <input hidden required name="id"  type="text" defaultValue={state.user.id} ></input>
      <input hidden required name="path" type="text" defaultValue={state.user.path} ></input>
      <input hidden required name="uid" type="text" placeholder='Correo' defaultValue={state.user.uid} ></input>
      <button className="button" type="submit">Actualizar</button>
    </form>
  </section>
  )
}

export default Actualizar
