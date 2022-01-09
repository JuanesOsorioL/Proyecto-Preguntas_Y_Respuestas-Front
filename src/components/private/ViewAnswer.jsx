import React from 'react';
import ReactQuill from "react-quill"
import '../../../node_modules/react-quill/dist/quill.snow.css';

const ViewAnswer = ({answer}) => {  

const modulo={}

const formats={}

    return(
<div className=' bg-white mt-3'>
            <ReactQuill value={answer.answer}  
            modules={modules}   
            readOnly='true'/>
        </div>


    
    )
}

/*  <section className='question'>
            <p>
                <ReactQuill value={answer.answer}
                modulo={modulo}
                formats={formats}
                readOnly="true"/>
            </p>
        </section>  */


const modules = {
    toolbar: false
};
export default ViewAnswer