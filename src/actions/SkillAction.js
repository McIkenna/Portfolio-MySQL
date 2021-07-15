import axios from "axios"
import { DELETE_SKILL, GET_ERRORS, GET_SKILL, GET_SKILLS } from "./types";

export const createSkill = (skill, history) => async dispatch => {
    try {
        await axios.post(`http://localhost:8080/admin/skill`, skill )
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data
        })
        
    }
}

export const getSkills = () => async dispatch => {
    const res = await axios.get(`http://Portfolio-complete-cloud-env.eba-y7qj96hg.us-east-2.elasticbeanstalk.com/api/skill/all`)
    dispatch({
        type: GET_SKILLS,
        payload: res.data
    })
}

export const getStoredSkill = (skillId, history) => async dispatch => {
    try {
     const res = await axios.get(`http://Portfolio-complete-cloud-env.eba-y7qj96hg.us-east-2.elasticbeanstalk.com/api/skill/${skillId}`)
     dispatch({
         type: GET_SKILL,
         payload: res.data,
     })
    } catch (error) {
        history.push("/");
    }
 };
 
 export const deleteSkill = id => async dispatch => {
    if(window.confirm("This will delete data Permanent"))
    {
        await axios.delete(`http://Portfolio-complete-cloud-env.eba-y7qj96hg.us-east-2.elasticbeanstalk.com/admin/skill/${id}`)
    dispatch({
        type: DELETE_SKILL,
        payload: id
    })
    }
        
};

export const updateSkill = (skill, history) => async dispatch => {
    try {
        await axios.post(`http://Portfolio-complete-cloud-env.eba-y7qj96hg.us-east-2.elasticbeanstalk.com/admin/skill`, skill)
        history.push("/")
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })

    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    }
}