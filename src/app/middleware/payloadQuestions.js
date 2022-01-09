import { questionsLoading ,questionsLoadSucces,questionsLoadError } from "../../actions/QuestionsActions";
import {oneQuestionLoadSucces , oneQuestionLoadError} from "../../actions/OneQuestionActions";
import { myQuestionsLoadSucces, myQuestionsLoading,myQuestionsLoadError } from "../../actions/MyQuestionsActions";
import axios from "axios";

import { loggedAction, loginAction } from "../../actions/AuthorActions";


export const loadAllQuestion=()=>(dispatch)=>{

    dispatch(questionsLoading())
    const options = {
    method: 'GET',
    url: 'http://localhost:8080/getAll',
    headers: {'Content-Type': 'application/json'}
    };
    axios.request(options).then(function (response) {
        dispatch(questionsLoadSucces(response.data))
    }).catch(function (error) {
        dispatch(questionsLoadError(error.message))
    });
}


export const loadById=(id)=>(dispatch)=>{
    const options = {
        method: 'GET',
        url: `http://localhost:8080/get/${id}`,
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
      url: "http://localhost:8080/create",
      headers: { "Content-Type": "application/json" },
      data: question,
    };
     const result= axios.request(options)
      .then(function (response) {return (response.data)})
      .catch(function (error) {});
      return  result;
}


export const postAnswer = (answer) => (dispatch) => {
  console.log(answer);
  const options = {
    method: "POST",
    url: "http://localhost:8080/add",
    headers: { "Content-Type": "application/json" },
    data: answer,
  };

  axios
    .request(options)
    .then(function (response) {
      dispatch(oneQuestionLoadSucces(response.data));
    })
    .catch(function (error) {
      console.error(error);
    });
};

/* 
const GetCorreoEnviar = (userUid) =>{
  const options = {
    method: "GET",
    url: `http://localhost:8080/getUsuario/${userUid}`,
    headers: { "Content-Type": "application/json" },
  };
  axios
    .request(options)
    .then(function (response) {
      const {email} = response.data;
      //correo
      console.log(email);

    })
    .catch(function (error) {
    });
}; */

export const deleteQuestion=(id)=>{
  const options = {method: 'DELETE', url: `http://localhost:8080/delete/${id}`};
  axios.request(options)
  .then(function (response) {})
  .catch(function (error) {console.error(error)});
}

export const getUserQuestion=(userId)=>(dispatch)=>{

  dispatch(myQuestionsLoading())
    const options = {
        method: 'GET',
        url: `http://localhost:8080/getOwnerAll/${userId}`,
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
    url: "http://localhost:8080/createUsuario",
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
    url: `http://localhost:8080/getUsuario/${userUid}`,
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
export const ActualizarUser = (data) => (dispatch) => {
  const options = {
    method: "PUT",
    url: "http://localhost:8080/actualizarUsuario",
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  axios.request(options)
    .then(function (response) {
    const { apellido, email, id, nombre, path, uid } = response.data;
    dispatch(loggedAction(apellido, email, id, nombre, path, uid));
    })
    .catch(function (error) {});
};