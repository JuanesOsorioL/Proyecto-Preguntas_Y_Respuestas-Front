import { postAnswer } from '../../app/middleware/payloadQuestions';
import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import '../../../node_modules/react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill"
import { useState } from 'react';

const FormAnswer = ({idQuestion}) => {

  const[data,setData]=useState("")
  const state =useSelector(state=>state.auth)
  const dispatch = useDispatch()

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(postAnswer(e.target.userId.value, e.target.questionId.value, data))
    setData("")
  }

  return(
    <section>
      <form  onSubmit={submitForm} >
        <label>Añade una respuesta.</label>
          <ReactQuill  className=" bg-white"
            modules={modules}
            formats={formats}
            value={data}
            onChange={(e)=>{setData(e)}}>
          </ReactQuill>
        <input hidden id="userId" type="text" value={state.user.uid} ></input>
        <input hidden id="questionId" type="text" value={idQuestion} ></input>
        <button className="button" type="submit">Enviar Respuesta</button>
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