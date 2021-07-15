import { DELETE_WORK, GET_WORK, GET_WORKS } from "../actions/types";

const initialState = {
    works: [],
    work: {}
}

export default function(state=initialState, action){
    switch(action.type){

        case GET_WORKS:
            return{
                ...state,
                works: action.payload
            }

        case GET_WORK:
            return{
                ...state,
                work: action.payload
            }

        case DELETE_WORK:
            return {
                ...state,
                works:state.works.filter(
                    work => work.workId !== action.payload
                )
            }
        default:
            return state;
    }
}