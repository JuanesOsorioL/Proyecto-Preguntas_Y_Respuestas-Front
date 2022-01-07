import {loginAction,loggedAction,logoutAction} from "../../actions/AuthorActions"
import { app, google } from "../../service/firebase"
import { postUser } from "../../app/middleware/payloadQuestions"
import {  useDispatch ,useSelector  } from "react-redux"
import { useNavigate } from "react-router-dom"
import React from 'react';
import { useState } from "react"
import useFormData from '../../hooks/UseFormData'


export const Login = () => {

  const [estado, setEstado] = useState(true)
   const state = useSelector(state=>state.auth)

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
                path:user.user.multiFactor.user.photoURL,
                email:user.user.multiFactor.user.email
            }
            const datosBD = await postUser(data);
            if (datosBD.id) {
                dispatch(loginAction())
                navigate("/private/Home")
            }
          //   dispatch(loginAction(user.user.multiFactor.user.email ,
           //     user.user.multiFactor.user.displayName,
           //     user.user.multiFactor.user.uid,
           //     user.user.multiFactor.user.photoURL))
        })
        .catch()
        }

////form
    //const state =useSelector(state=>state.auth)

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
       // postAnswer(formData)
console.log(formData);
  app.auth().createUserWithEmailAndPassword(formData.email,formData.password)
        .then(async user =>{
          console.log(user);
             let data = {
                uid:user.user.multiFactor.user.uid,
                nombre:"ninguno",
                apellido:"",
                path:"data:image/jpeg;base64,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",
                email:user.user.multiFactor.user.email
            }
            console.log(data);
            /*
            const datosBD = await postUser(data);
            if (datosBD.id) {
                dispatch(loginAction())
                navigate("/private/Home")
            } */

        })
        .catch(error=>console.log(error))






      }

  return (
  <>

  <input type="radio" id="html" defaultChecked name="Login/registrar" onChange={()=>{setEstado(true)}} value="Login"/>
  <label>Login</label>
  <input type="radio" id="css" name="Login/registrar" onChange={()=>{setEstado(false)}} value="Registrar"/>
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
      <button className="button" type="submit">Login con Correo</button>
    </>:
    <>
      <button className="button" type="submit">Registrar con Correo</button>
    </>}
  </form>
  </section>

      <div>

        <button className="button" onClick={handlerLog}> google</button>
      </div>
  </>
  )
}
