import React from 'react';
import ReactQuill from "react-quill"
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { deleteAnswer } from '../../app/middleware/payloadQuestions';
import { toast } from 'react-toastify';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const ViewAnswer = ({answer,eliminar}) => {

const Swal = require('sweetalert2')

const Fun_eliminar=()=>{
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})


  //console.log(answer);
  //deleteAnswer(answer.id,toast)
}

  return(
    <div className='visualizador'>
      <ReactQuill value={answer.answer}
        modules={modules}
        readOnly='true'/>
        {eliminar&& <span onClick={()=>{Fun_eliminar()}}>Eliminar</span>}
    </div>
  )
}

const modules = {
    toolbar: false
};

export default ViewAnswer