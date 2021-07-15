import React, { Component } from 'react'
import classes from "./Info.module.css"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {deleteInfo} from "../../actions/InfoActions"
import {Spring} from "react-spring/renderprops"
import resume from "../images/Ikenna Resume2.1.pdf"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png";


 class InfoItem extends Component {

    onDeleteClick = id => {
        this.props.deleteInfo(id);
    }


    render() {
        const {info} = this.props;
        const {validToken, user} = this.props.security;

        const userIsAuthenticated = (
               
            <div className={classes.infobutton}>
            <Link to={`/updateInfo/${info.infoId}`}>
            <button className={classes.updatebtn}>Update</button>
            </Link>
            <button className={classes.deletebtn} onClick={this.onDeleteClick.bind(this, info.infoId)}>Delete</button>
            </div>

        )

       
        let securedLinks;

        if(validToken&&user){
            securedLinks = userIsAuthenticated;
        }else{
            securedLinks = "";
        }
        return (
            <Spring
            from={{opacity: 0}}
                to={{opacity: 1}}
                config={{delay: 500, duration: 1000}}>
            {props => (
                <div style={props}>
                     <div className={classes.Infocover}>
        <div className={classes.infocontainer}>   
                <div className={classes.textcontainer}>
                    <div className={classes.textinner}>
                        <Spring
                        from = {{opacity: 0, marginLeft: -200}}
                        to = {{opacity: 1, marginLeft: 0}}
                        config={{delay: 1000, duration: 1500}}
                        >
                   {props => (
                       <div style={props}>
                            <p>Hello,</p>
                    <p>I&#8217;M </p>
                    <p>{info.firstName}</p>
                    <p>{info.lastName}</p>
                    <p>{info.occupation}</p>
                    </div>
                    )}
                    </Spring>
                    <Spring
                        from = {{opacity: 0, marginTop: -50}}
                        to = {{opacity: 1, marginTop: 0}}
                        config={{delay: 2000, duration: 1000}}
                        
                        >
                   {props => (
                       <div style={props}>
            <div className={classes.btn} > 
           <div className={classes.contact}><Link to="/contactForm" >
           <button className={classes.hirebtn}>Contact Me</button>
           </Link>    </div>
            <div><a href={resume} download="Ikenna I.pdf"><button className={classes.downcv}>Download CV</button></a>
            </div>
            </div>
            <div className={classes.socials}>
              
            <a href="https://github.com/McIkenna" target="_blank">
                <img src={github} alt="github" className={classes.github}/>
           </a>
           < a href="https://www.linkedin.com/in/ikenna-ifekaonwu/" target="blank"  >
                <img src={linkedin} alt="linkedIn" className={classes.linkedin}/>
           </a>
            </div>
                    
                    </div>
                    )}
                    </Spring>
                    </div>   
            </div>
          
            <div className={classes.aboutcontainer}>
                <div className={classes.abouttext}>
                <p>{info.summary}</p>
                {securedLinks}
                         </div>
                </div>
       
    </div>
    </div>

                </div>
            )} 
       
    </Spring>
        );
    }
}
InfoItem.propTypes ={
    deleteInfo: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps, {deleteInfo})(InfoItem)