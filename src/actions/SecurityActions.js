import { GET_ERRORS, SET_CURRENT_USER } from "./types"
import axios from "axios"
import setJwtToken from "../securityUtils/setJwtToken";
import jwt_decode from "jwt-decode";


export const login = LoginRequest => async dispatch => {
    try{
        const res = await axios.post("http://localhost:8080/login", LoginRequest);

        const{jwt} = res.data;

        localStorage.setItem("jwtToken", jwt)

        setJwtToken(jwt)

       const decoded = jwt_decode(jwt);

       dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
       })

    }catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })

    }
}


export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJwtToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })
}