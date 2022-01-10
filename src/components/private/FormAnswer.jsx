import { postAnswer } from '../../app/middleware/payloadQuestions';
import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import '../../../node_modules/react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill"
import { useState } from 'react';
import { toast } from 'react-toastify';

const FormAnswer = ({idQuestion}) => {

  const[data,setData]=useState("")
  const state =useSelector(state=>state.auth)
  const dispatch = useDispatch()

  const submitForm = (e) => {
    e.preventDefault();
    console.log(e.target.userId.value, e.target.questionId.value, data);
    dispatch(postAnswer(e.target.userId.value, e.target.questionId.value, data,toast))
   setData("")
  }

  return(
    <section className='form-answer'>
      <form  onSubmit={submitForm} >
        <h3>Escribe una Respuesta</h3>
          <ReactQuill  className="texto-enrriquecido"
            modules={modules}
            formats={formats}
            value={data}
            onChange={(e)=>{setData(e)}}>
          </ReactQuill>
        <input hidden id="userId" type="text" value={state.user.uid} ></input>
        <input hidden id="questionId" type="text" value={idQuestion} ></input>
        <button className="button margin-top" type="submit">Enviar Respuesta</button>
      </form>
    </section>
  )
}

const modules = {
  toolbar: [
    [{ header: "1" }, {header: "2"}, {header: [3, 4, 5, 6]}, {font: []}],
    [{ size: [] }],
    [ "bold", "italic", "underline", "strike", "blockquote" ],
    [{ list: "ordered", }, { list: "bullet" }],
    ["image"],
    ["clean"],
    ["code-block"],
  ],
};

const formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"link",
	"image",
	"video",
	"code-block"
];


export default FormAnswer