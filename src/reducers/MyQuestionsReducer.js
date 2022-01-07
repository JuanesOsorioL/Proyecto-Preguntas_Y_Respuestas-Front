import actionsTypesMyQuestion from "../actions/actionsTypes/ActionsTypeMyQuestions"

const initialState={
    isLoading:false,
    myQuestions:null,
    error:null
}

const myQuestionReducer = (state=initialState, {type,payload})=>{
    switch(type){

        case actionsTypesMyQuestion.LOADING_SUCCESS_MY_QUESTIONS:
            return {
                ...state,
                isLoading:true,
                error:null
                }
        case actionsTypesMyQuestion.LOAD_SUCCESS_MY_QUESTIONS:
            return {
                ...state,
                isLoading:false,
                error:null,
                myQuestions:payload
                }
        case actionsTypesMyQuestion.LOAD_FAILURE_MY_QUESTIONS:
            return {
                ...state,
                isLoading:false,
                error:payload
                }

        default: return state;
    }
}

export default myQuestionReducer