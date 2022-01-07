import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import {privateNavbar} from "../utils/NavbarList"
import { app } from "../service/firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {  useSelector  } from "react-redux"
import React from 'react';

const PrivateLayout = () => {

    const state = useSelector(state => state.auth)
    const navigate=useNavigate()

    useEffect(()=>{
        app.auth().onAuthStateChanged((users)=>{
            if(!users){
                navigate("/")
        }})
      },[])



    return (
        <>
        {state?.user
        ?(<div>
            <Navbar elements={privateNavbar}/>
            <Outlet/>
        </div>)
        :
        null}
        </>
       
    )
}

export default PrivateLayout
