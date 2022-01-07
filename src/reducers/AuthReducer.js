import actionsTypesAuth from "../actions/actionsTypes/ActionsTypesAuth";

const initialState = {
    user: null,
}

const reducerAuth = (state=initialState,{type,payload})=>{
    switch(type){
        case actionsTypesAuth.LOGIN:
            return {
                    ...state,
                    user : payload,         
                }
        case actionsTypesAuth.LOGGED:
            return {
                    ...state,
                    user : payload,         
                }
                
        case actionsTypesAuth.LOGOUT:
            return {
                ...state,
                    user : payload,
                }

        default: return state;
    }
}
export default reducerAuth; 