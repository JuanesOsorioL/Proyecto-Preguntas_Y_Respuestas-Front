import { app, google } from "../../service/firebase"
import { postUser } from "../../app/middleware/payloadQuestions"
import {  useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import React from 'react';
import { useState } from "react"
import useFormData from '../../hooks/UseFormData'
import { IMGDEFAULT } from "../../utils/NavbarList"
import { toast } from 'react-toastify';
import { CORREO_EXISTENTE,
  CORREO_PASS_CORTO,
  CORREO_PASS_INCORRECTO,
  CORREO_NO_EXISTE,
BLOQUEO_CUENTA } from "../../utils/NavbarList"

export const Login = () => {

  const [estado, setEstado] = useState(true)
  const dispatch = useDispatch()
  const navigate=useNavigate()

  //cuenta de google
  const handlerLog=()=>{
    app.auth().signInWithPopup(google)
    .then(async user =>{
      let data = {
        uid:user.user.multiFactor.user.uid,
        nombre:user.user.multiFactor.user.displayName,
        apellido:"",
        email:user.user.multiFactor.user.email,
        path:user.user.multiFactor.user.photoURL
      }
      dispatch(postUser(data,toast))
      navigate("/private/Home")
    })
    .catch()
  }

////form
  const{form, formData, updateFormData} = useFormData();
  const submitForm = (e) => {
  e.preventDefault();

  if (e.target.lastChild.name==="registrar") {
    app.auth().createUserWithEmailAndPassword(formData.email,formData.password)
    .then(async user =>{
      correoCorrecto(user);
    })
    .catch(error=>{
      if (error.message===CORREO_EXISTENTE) {
         mensaje('Correo ya existe!');
      }else if(error.message===CORREO_PASS_CORTO) {
        mensaje('Contraseña debe de ser mayor de 6 Caracteres');
      }
    })

  } else {

    app.auth().signInWithEmailAndPassword(formData.email,formData.password)
      .then(async user =>{correoCorrecto(user)})
      .catch(error=>{
        if (error.message===CORREO_PASS_INCORRECTO)
          mensaje('Password incorrecto');
        else if (error.message===CORREO_NO_EXISTE)
          mensaje("Correo no existe!");
      })
  }
}

  const correoCorrecto= (user)=>{
    let data = {
      uid:user.user.multiFactor.user.uid,
      nombre:"",
      apellido:"",
      email:user.user.multiFactor.user.email,
      path:IMGDEFAULT
    }
    dispatch(postUser(data,toast))
    navigate("/private/Home")
  }

  const mensaje=(texto)=>{
    toast.error(texto, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }




  return (
  <>
    <input type="radio" id="html" defaultChecked name="Login/registrar" onChange={()=>{setEstado(true)}} value="Login"/>
    <label>Login</label>
    <input type="radio" id="css" name="Login/registrar" onChange={()=>        {setEstado  (false)}} value="Registrar"/>
    <label>Registrar</label>

    <section>
      <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
      {estado ?
      <>
        <h1>Login</h1>
      </>:
      <>
        <h1>Registrar</h1>
      </>}
      <label>Ingresa tus daos</label>
      <input required name="email" type="text" placeholder='Ingresa Correo'></input>
      <input required name="password" type="text" placeholder='Ingrese pass' ></input>
      {estado ?
      <>
        <button className="button" name="login" type="submit">Login con Correo</button>
      </>:
      <>
        <button className="button" name="registrar" type="submit">Registrar con Correo</button>
      </>}
      </form>
    </section>
    <div>
      <button className="button" onClick={handlerLog}>Ingresar con Google</button>
    </div>
  </>
  )


}
