import { questionsLoading ,questionsLoadSucces,questionsLoadError } from "../../actions/QuestionsActions";
import {
  oneQuestionLoadSucces,
  oneQuestionLoadError,
  oneQuestionClear,
} from "../../actions/OneQuestionActions";
import { myQuestionsLoadSucces, myQuestionsLoading,myQuestionsLoadError } from "../../actions/MyQuestionsActions";
import axios from "axios";

import { loggedAction, loginAction } from "../../actions/AuthorActions";

const BASE = "https://back-preguntas-respuestas.herokuapp.com/";
/* const BASE = "http://localhost:8080/"; */

export const loadAllQuestion=()=>(dispatch)=>{
    dispatch(questionsLoading())
    const options = {
    method: 'GET',
    url: BASE+'getAll',
    headers: {'Content-Type': 'application/json'}
    };
    axios.request(options).then(function (response) {
        dispatch(questionsLoadSucces(response.data))
    }).catch(function (error) {
        dispatch(questionsLoadError(error.message))
    });
}

export const loadById=(id)=>(dispatch)=>{
 /// dispatch(oneQuestionClear());//////////
    const options = {
        method: 'GET',
        url: BASE+`get/${id}`,
        headers: {'Content-Type': 'application/json'}
        };
        axios.request(options).then(function (response) {
            dispatch(oneQuestionLoadSucces(response.data))
        }).catch(function (error) {
            dispatch(oneQuestionLoadError(error.message))
        });
}

export const postQuestion=(question)=>{
    const options = {
      method: "POST",
      url: BASE+"create",
      headers: { "Content-Type": "application/json" },
      data: question,
    };
     const result= axios.request(options)
      .then(function (response) {return (response.data)})
      .catch(function (error) {});
      return  result;
}

export const postAnswer = (userId, questionId, data, toast) => (dispatch) => {

  const options = {
    method: "POST",
    url: BASE+"add",
    headers: { "Content-Type": "application/json" },
    data: { userId: userId, questionId: questionId, answer: data },
  };

  axios
    .request(options)
    .then(function (response) {
      dispatch(oneQuestionLoadSucces(response.data));
      toast.success("Respuesta Creada", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};

///borrar preguntas
export const deleteQuestion = (id, iduser, toast) => (dispatch) => {
  const options = {
    method: "DELETE",
    url: BASE+`delete/${id}`,
  };
  axios
    .request(options)
    .then(function (response) {
      dispatch(getUserQuestion(iduser));
      toast.success("Pregunta Borrada ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getUserQuestion=(userId)=>(dispatch)=>{
  dispatch(myQuestionsLoading())
    const options = {
        method: 'GET',
        url: BASE+`getOwnerAll/${userId}`,
        headers: {'Content-Type': 'application/json'}
      };
      axios.request(options).then(function (response) {
        dispatch(myQuestionsLoadSucces(response.data));
      }).catch(function (error) {
        dispatch(myQuestionsLoadError(error.message));
      });
}

//crear usuario
export const postUser = (data, toast) => (dispatch) => {
  const options = {
    method: "POST",
    url: BASE+"createUsuario",
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  axios
    .request(options)
    .then(function (response) {
      const { apellido, email, id, nombre, path, uid } = response.data;
      dispatch(loginAction(apellido, email, id, nombre, path, uid));
      toast.success("Logueado con Correo Correctamente", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return response.data;
    })
    .catch(function (error) {});
};

//se loguea para todo
export const getUserByUid = (userUid) => (dispatch) => {
  const options = {
    method: "GET",
    url: BASE+`getUsuario/${userUid}`,
    headers: { "Content-Type": "application/json" },
  };
  axios
    .request(options)
    .then(function (response) {
      const{ apellido,
        email,
        id,
        nombre,
        path,
        uid }=response.data
      dispatch(loggedAction(apellido, email, id, nombre, path, uid));
    })
    .catch(function (error) {
     console.log("error");
    });
};

//actualizar usuario
export const ActualizarUser = (data, toast) => (dispatch) => {
  const options = {
    method: "PUT",
    url: BASE + "actualizarUsuario",
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  axios
    .request(options)
    .then(function (response) {
      const { apellido, email, id, nombre, path, uid } = response.data;
      dispatch(loggedAction(apellido, email, id, nombre, path, uid));
      toast.success("Datos actualizados", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch(function (error) {});
};

//borrar respuesta
export const deleteAnswer = (id,questionId, toast) => (dispatch) => {
  const options = {
    method: "DELETE",
    url: BASE + `deleteAnswear/${id}`,
  };
  axios
    .request(options)
    .then(function (response) {
      dispatch(loadById(questionId));
      toast.success("Respuesta Borrada ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch(function (error) {});
};