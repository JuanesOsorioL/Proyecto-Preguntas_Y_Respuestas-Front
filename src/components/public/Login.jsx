import {loginAction} from "../../actions/AuthorActions"
import { app, google } from "../../service/firebase"
import { postUser } from "../../app/middleware/payloadQuestions"
import {  useDispatch ,useSelector  } from "react-redux"
import { useNavigate } from "react-router-dom"
import React from 'react';
import { useState } from "react"
import useFormData from '../../hooks/UseFormData'
import { IMGDEFAULT } from "../../utils/NavbarList"

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
      const datosBD = await postUser(data);
      dispatch(loginAction(datosBD.apellido,
          datosBD.email,
          datosBD.id,
          datosBD.nombre,
          datosBD.path,
          datosBD.uid))
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
      let data = {
        uid:user.user.multiFactor.user.uid,
        nombre:"",
        apellido:"",
        email:user.user.multiFactor.user.email,
        path:IMGDEFAULT
      }
      console.log(data);

      const datosBD = await postUser(data);
      console.log("datosdb",datosBD);
      if (datosBD.id) {
        dispatch(loginAction(
          datosBD.apellido,
          datosBD.email,
          datosBD.id,
          datosBD.nombre,
          datosBD.path,
          datosBD.uid))
        navigate("/private/Home")
      }
    })
    .catch(error=>console.log(error))





  } else {

  app.auth().signInWithEmailAndPassword(formData.email,formData.password)
    .then(async user =>{
      let data = {
        uid:user.user.multiFactor.user.uid,
        nombre:"",
        apellido:"",
        email:user.user.multiFactor.user.email,
        path:IMGDEFAULT
      }
      const datosBD = await postUser(data);
      if (datosBD.id) {
        dispatch(loginAction(datosBD.user.apellido,
          datosBD.user.email,
          datosBD.user.id,
          datosBD.user.nombre,
          datosBD.user.path,
          datosBD.user.uid))
      navigate("/private/Home")
      }
    })
    .catch(error=>console.log(error))
  }
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
