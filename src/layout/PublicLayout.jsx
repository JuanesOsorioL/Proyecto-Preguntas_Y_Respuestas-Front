import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import {publicNavbar} from "../utils/NavbarList"
import { app } from "../service/firebase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {  useSelector  } from "react-redux"
import React from 'react';

const PublicLayout = () => {
    const state = useSelector(state => state.auth)
    const [user,setUser]=useState([])

    const navigate=useNavigate()

    useEffect(()=>{
        console.log(state);
      app.auth().onAuthStateChanged((users)=>{
      users?navigate("/private/home"):setUser(users)
  })},[])




    return (
        <>
    {user?null:
    <>
            <Navbar elements={publicNavbar}/>
            <Outlet/>
            </>
    }
        </>
    )
}
    
export default PublicLayout
