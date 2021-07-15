import React from 'react';
import Header from './components/Layout/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Dashboard from './components/Dashboard';
import AddInfo from './components/Info/AddInfo';
import {Provider} from "react-redux";
import store from "./store"
import UpdateInfo from './components/Info/UpdateInfo';
import AddEducation from './components/Education/AddEducation';
import UpdateEdu from './components/Education/UpdateEdu';
import AddWork from './components/Work/AddWork';
import UpdateWork from './components/Work/UpdateWork';
import AddProject from './components/Project/AddProject';
import UpdateProject from './components/Project/UpdateProject';
import AddSkill from './components/Skill/AddSkill';
import UpdateSkill from './components/Skill/UpdateSkill';
import styles from './app.module.css'
import Footer from './components/Layout/Footer';
import contactForm from './components/Contact/contactForm';
import AddTask from './components/projectTask/AddTask';
import AddImage from './components/ProfileImage/AddImage';
import Login from "./components/Contact/Login"
import jwt_decode from "jwt-decode"
import setJwtToken from "./securityUtils/setJwtToken"
import { SET_CURRENT_USER } from './actions/types';
import {logout} from "./actions/SecurityActions"
import SecuredRoute from "./securityUtils/securedRoute"




const jwtToken = localStorage.jwtToken;


if(jwtToken){
  setJwtToken(jwtToken)
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  })

  const currentTime = Date.now()/1000
  if(decoded_jwtToken.exp<currentTime){
    store.dispatch(logout())
    window.location.href = "/"
  }
}

function App() {

  const centeredStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
  };
  const h2Styles = {
    fontSize: "82px",
  };
 

  return (
    <Provider store={store}>
    <Router>
   
      <Header/>
      {
        //public
      }
       
    
      {
        //private
      }
      <div className={styles.body}>
      <div className={styles.body}>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/contactForm" component={contactForm} />
        <Route exact path="/Login" component={Login} />
     {  /* <Route exact path="/Todo" component={TodoApp} /> */}
      </div>
        <Switch>
      <SecuredRoute exact path="/addInfo" component={AddInfo} />
      <SecuredRoute exact path="/updateInfo/:id" component={UpdateInfo} />
      <SecuredRoute exact path="/addEducation" component={AddEducation } />
      <SecuredRoute exact path="/updateEdu/:id" component={UpdateEdu} />
      <SecuredRoute exact path="/addWork" component={AddWork} />
      <SecuredRoute exact path="/updateWork/:id" component={UpdateWork} />
      <SecuredRoute exact path="/addProject" component={AddProject} />
      <SecuredRoute exact path="/updateProject/:id"  component={UpdateProject} />
      <SecuredRoute exact path="/addSkill" component={AddSkill} />
      <SecuredRoute exact path="/updateSkill/:id" component={UpdateSkill} />
      <SecuredRoute exact path="/addImg" component={AddImage} />
      <SecuredRoute exact path="/addTask" component={AddTask} />
      </Switch>
      </div>
      <Footer />
    </Router>
    </Provider>

  );
}

export default App;
