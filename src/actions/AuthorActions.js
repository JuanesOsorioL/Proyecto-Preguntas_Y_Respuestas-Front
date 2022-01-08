import actionsTypesAuth from "./actionsTypes/ActionsTypesAuth"

export const loginAction = (apellido, email, id, nombre, path, uid) => {
  return {
    type: actionsTypesAuth.LOGIN,
    payload: { apellido, email, id, nombre, path, uid },
  };
};

export const logoutAction =()=>{
    return{
        type : actionsTypesAuth.LOGOUT,
        payload: null
    }
}

export const loggedAction = (apellido, email, id, nombre, path, uid) => {
  return {
    type: actionsTypesAuth.LOGGED,
    payload: { apellido, email, id, nombre, path, uid },
  };
};