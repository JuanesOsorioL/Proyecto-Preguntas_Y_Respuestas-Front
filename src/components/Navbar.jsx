import {Link} from "react-router-dom"
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useDispatch ,useSelector  } from "react-redux"
import { useNavigate } from "react-router-dom"
import { app } from "../service/firebase";
import { logoutAction } from "../actions/AuthorActions";
import { toast } from 'react-toastify';

const Navbar = ({elements}) => {

const state = useSelector(state=>state.auth)

const dispatch = useDispatch()
    const navigate=useNavigate()

    const handler=()=>{
        app.auth().signOut().then(res=>{
            toast.success('Logout Con Exito!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }).catch()
        dispatch(logoutAction())
        navigate("/")
    }
    return (
        <nav>
            <section >
                {
                    elements.map((element,index)=>{
                    return (<Link key={index} to={element.url}>{element.titulo}</Link>)
                    })
                }
                {state.user&&<button className="button" onClick={handler}>Log-out</button>}
                <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            </section>
        </nav>
    )
}

export default Navbar
