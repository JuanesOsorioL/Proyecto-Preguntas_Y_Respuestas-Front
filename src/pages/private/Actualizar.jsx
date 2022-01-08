import React ,{useEffect} from 'react'
import {  useDispatch ,useSelector  } from "react-redux"
import useFormData from '../../hooks/UseFormData'



const Actualizar = () => {

/* 
    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.auth)
    const {
        isLoading,
        myQuestions,
        error
    } = useSelector(state => state.myQuestion)
    
    useEffect(() =>{
        dispatch(getUserQuestion(user.uid));
       console.log(myQuestions)
    },[])
*/




const{form, formData, updateFormData} = useFormData();




const state = useSelector(state=>state.auth)
    useEffect(()=>{
      console.log(state);
       /*  app.auth().onAuthStateChanged((users)=>{
            if(!users){
                navigate("/")
        }}) */
      },[])


const submitForm = (e) => {
  e.preventDefault();
}





  return (
    <>
      actualizar


<section>
    <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
      <h1>Registrar</h1>
    <label>Ingresa tus daos</label>
    <input required name="Nombre" type="text"
    defaultValue={state.user.nombre}></input>
    <input required name="Apellido" type="text"defaultValue={state.user.apellido}></input>
    <input required name="Correo" disabled type="text" placeholder='Correo' defaultValue={state.user.email} ></input>
      <button className="Corrreo" name="login" type="submit">Login con Correo</button>
  </form>
  </section>



    </>
  )
}

export default Actualizar
