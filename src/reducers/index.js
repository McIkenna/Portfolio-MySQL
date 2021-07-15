import {combineReducers} from "redux"
import eduReducer from "./eduReducer"
import errorReducer from "./errorReducer"
import infoReducer from "./infoReducer"
import profileImgReducer from "./profileImgReducer"
import projectReducer from "./projectReducer"
import securityReducer from "./securityReducer"
import skillReducer from "./skillReducer"
import taskReducer from "./taskReducer"
import workReducer from "./workReducer"


export default combineReducers ({
    errors:errorReducer,
    info: infoReducer,
    education: eduReducer,
    work: workReducer,
    project: projectReducer,
    skill: skillReducer,
    upload: profileImgReducer,
    task: taskReducer,
    security: securityReducer
})