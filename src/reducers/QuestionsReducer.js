import actionsTypesQuestions from "../actions/actionsTypes/ActiosTypesQuestions";

const initialState={
  isLoading:false,
  questions:null,
  error:null
}

const QuestionsReducer = (state=initialState,{type,payload})=>{
  switch(type){

    case actionsTypesQuestions.LOADING:
      return {
        ...state,
        isLoading:true,
        error:null
      }
    case actionsTypesQuestions.LOAD_SUCCESS:
      return {
        ...state,
        isLoading:false,
        questions:payload,
        error:null
      }
    case actionsTypesQuestions.LOAD_FAILURE:
      return {
        ...state,
        isLoading:false,
        error:payload
      }
    default: return state;
  }
}

export default QuestionsReducer
