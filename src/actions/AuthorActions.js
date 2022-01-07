import actionsTypesAuth from "./actionsTypes/ActionsTypesAuth"

export const loginAction = (apellido, email, nombre, uid, path,id) => {
  return {
    type: actionsTypesAuth.LOGIN,
    payload: { apellido, email, nombre, uid, path, id },
  };
};

export const logoutAction =()=>{
    return{
        type : actionsTypesAuth.LOGOUT,
        payload: null
    }
}

export const loggedAction = (apellido, email, nombre, uid, path, id) => {
  return {
    type: actionsTypesAuth.LOGGED,
    payload: { apellido, email, nombre, uid, path, id },
  };
};