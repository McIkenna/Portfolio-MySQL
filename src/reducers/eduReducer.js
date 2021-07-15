import {GET_EDUCATION, GET_EDUS, DELETE_EDU} from "../actions/types"

const initialState = {
    educations: [],
    education: {}
}

export default function(state=initialState, action){
    switch(action.type){

        case GET_EDUS:
            return {
                ...state,
                educations: action.payload
            }

        case GET_EDUCATION:
            return{
                ...state,
                education: action.payload
            }

        case DELETE_EDU:
            return{
                ...state,
                educations: state.educations.filter(education => education.id !== action.payload)
                
            }
            
        default:
            return state;
    }
}