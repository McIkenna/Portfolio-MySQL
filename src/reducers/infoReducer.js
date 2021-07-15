import {DELETE_INFO, GET_INFO, GET_STOREDINFO} from "../actions/types"


const initialState = {
    infos: [],
    info: {},  
    
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_INFO:
        return {
            ...state,
            infos: action.payload
        };

        case GET_STOREDINFO:
            return {
                ...state,
                info: action.payload
            }

        case DELETE_INFO:
            return{
                ...state,
                infos: state.infos.filter(info => info.infoId !== action.payload )
            }
     
      
        default:
            return state;
    };

        
}