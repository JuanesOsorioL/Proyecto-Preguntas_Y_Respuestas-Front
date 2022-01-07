import {loginAction,loggedAction,logoutAction} from "../../actions/AuthorActions"
import {  useDispatch ,useSelector  } from "react-redux"
import { useNavigate } from "react-router-dom"
import { app, google } from "../../service/firebase"
import { postUser } from "../../app/middleware/payloadQuestions"
import React from 'react'

const HomePage = () => {

    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const handler=()=>{
        app.auth().signOut()
        dispatch(logoutAction())
        navigate("/")
    }

/*     //cuenta de google
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
        } */



    return (
        <section>
            <h1>Home</h1>
            {state.user?<button className="button" onClick={handler}>Log-out</button>:
            <>
            {/* <button className="button" onClick={handlerLog}> google</button>
            <button className="button" onClick={handlerLog}> Correo</button> */}
            </>
            }
        </section>
    )
}

export default HomePage
