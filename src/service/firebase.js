import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const app = firebase.initializeApp({
  projectId: "preguntas-y-respuestas-728b3",
  appId: "1:549143188651:web:921b17b9bdf60347a913ee",
  storageBucket: "preguntas-y-respuestas-728b3.appspot.com",
  apiKey: "AIzaSyBpSDcTCn-Fu3SE651XUBjWPC0ctCN2gDk",
  authDomain: "preguntas-y-respuestas-728b3.firebaseapp.com",
  messagingSenderId: "549143188651",
});

export const google = new firebase.auth.GoogleAuthProvider();
