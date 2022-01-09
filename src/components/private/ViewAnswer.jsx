import React from 'react';
import ReactQuill from "react-quill"
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { deleteAnswer } from '../../app/middleware/payloadQuestions';
import { toast } from 'react-toastify';
import { useDispatch} from "react-redux";
import { loadById } from '../../app/middleware/payloadQuestions';

const ViewAnswer = ({answer,eliminar}) => {

const Swal = require('sweetalert2')
const dispatch = useDispatch()
const Fun_eliminar=()=>{
  Swal.fire({
    title: 'Alerta!',
    text: "Estas seguro que quieres eliminar esta Respuesta?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si'
  }).then((result) => {
    if (result.isConfirmed) {
        deleteAnswer(answer.id,toast)
        dispatch(loadById(answer.questionId))
    }
  })
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