import React, { Component } from 'react'
import styles from "./Header.module.css"
import {Link} from "react-router-dom"
import CreateInfo from '../Info/CreateInfoButton'
import CreateEduButton from '../Education/CreateEduButton';
import CreateWorkButton from '../Work/CreateWorkButton';
import CreateProjectButton from '../Project/CreateProjectButton';
import CreateSkillButton from '../Skill/CreateSkillButton';
import CreateProfileImage from '../ProfileImage/CreateProfileImage';
import CreateTaskButton from '../projectTask/CreateTaskButton';
import logo from "../images/Ikenna2.png"
import LoginButton from "../Contact/LoginButton"
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {logout} from "../../actions/SecurityActions"
import LogoutButton from "../Contact/LogoutButton"

class Header extends Component {

    logout(){
        this.props.logout();
        window.location.href = "/"
    }


    render() { 
const {validToken, user} = this.props.security;
        const userIsAuthenticated = (
            <div >
                <li><CreateInfo/></li>
                <li><CreateEduButton /></li>
                <li><CreateWorkButton /></li>
                <li><CreateProjectButton /></li>
                <li><CreateSkillButton /></li>
                <li onClick={this.logout.bind(this)}><LogoutButton /></li>
                <div ><Link to="/"  ><p style={{color: "red"}}>Logged in as {user.sub}</p></Link></div>
                
                    
            </div>
        )

        const userIsNotAuthenticated =(
            <div className={styles.navItem}>
            <li><LoginButton /></li>
            </div>
        )

        let headlinks;

        if(validToken&&user){
            headlinks = userIsAuthenticated;
        }else{
            headlinks = userIsNotAuthenticated;
        }

        return (
        <div className={styles.Header}>
           
            
            <div className={styles.maxWidth}> 
            <Link to="/"><img src={logo} alt="IKENNA" className={styles.logo}/>
                </Link>  
             </div>
                <div className={styles.navItem}>
            {headlinks}
            </div>
            </div>
              
                

        )
    }
}


Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToProps =state => ({
    security: state.security
})
export default connect(mapStateToProps, {logout})(Header)