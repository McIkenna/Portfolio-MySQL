
import {UPLOAD_PROFILEIMG} from "../actions/types";


const initialState = {
    profileImg : null
}

export default function(state = initialState, action){
    switch(action.type){
        case UPLOAD_PROFILEIMG:
            return {
                ...state,
                profileImg: action.payload
            }
            default:
                return state;
    };

   


} 