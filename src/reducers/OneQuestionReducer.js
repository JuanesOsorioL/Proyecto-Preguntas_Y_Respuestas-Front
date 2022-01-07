import actionsTypesOneQuestion from "../actions/actionsTypes/ActionsTypeOneQuestion";

const initialState={
    oneQuestion:null,
    error:null
}

const OneQuestionReducer = (state=initialState, {type,payload})=>{
    switch(type){
        case actionsTypesOneQuestion.LOAD_SUCCESS_QUESTION:
            return {
                ...state,
                oneQuestion:payload,
                error:null
                }
        case actionsTypesOneQuestion.LOAD_FAILURE_QUESTION:
            return {
                ...state,
                error:payload
                }
        default: return state;
    }
}

export default OneQuestionReducer

