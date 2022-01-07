import {Link} from "react-router-dom"
import React from 'react';

const Navbar = ({elements}) => {
    return (
        <nav>
        <section >
           {
               elements.map((element,index)=>{
                   return (<Link key={index} to={element.url}>{element.titulo}</Link>)
               })
           }
        </section>
        </nav>
    )
}

export default Navbar
