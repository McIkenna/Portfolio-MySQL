import { DELETE_SKILL, GET_SKILLS, GET_SKILL } from "../actions/types";


const initialState = {
    skills: [],
    skill: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_SKILLS:
            return{
                ...state,
                skills: action.payload
            };
        case GET_SKILL:
            return{
                ...state,
                skill: action.payload
            };
        case DELETE_SKILL:
            return{
                ...state,
                skills: state.skills.filter(skill => skill.skillId !== action.payload)
            }
            default:
                return state;
    }
}