import {Link} from "react-router-dom"
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useDispatch ,useSelector  } from "react-redux"
import { useNavigate } from "react-router-dom"
import { app } from "../service/firebase";
import { logoutAction } from "../actions/AuthorActions";
import { toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faQuestionCircle}  size="4x" />

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
      <section className="contendornavbar">
        <div className="colum-1">
          {element}
        </div>
        <div className="colum-2">
          {
            elements.map((element,index)=>{
              return (<Link key={index} to={element.url}>{element.titulo}</Link>)
            })
          }
        </div>
        <div className="colum-3">
          {state.user &&
            <button className="button" onClick={handler}>Log-out</button>}
        </div>
        {/* <div className="colum-1">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div> */}
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
