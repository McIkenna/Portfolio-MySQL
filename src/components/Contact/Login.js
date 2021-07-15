import React, { Component } from 'react'
import styles from "./contact.module.css"
import {connect} from "react-redux";
import {login} from "../../actions/SecurityActions"
import PropTypes from "prop-types"
class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            usernameError:"",
            passwordError: "",
            messageError: "",
            feedback : null
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
   
        this.setState({ [event.target.name]: event.target.value });
    }

    validate =() => {
        let usernameError = "";
        let passwordError = "";

        
        if(!this.state.username){
            usernameError = "name cannot be empty"
        }
        if(!this.state.password){
            passwordError = "name cannot be empty"
        }
    
        if(usernameError){
            this.setState({usernameError});
            return false
        }
        if(passwordError){
            this.setState({passwordError});
            return false
        }
        return true;
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.security.validToken){
            this.props.history.push("/");
            this.setState({
                username: "",
                password: "",
                usernameError:"",
                passwordError: "",
                messageError: "",
                feedback:"Login Successful"
               
              });
        }
    }

    onSubmit(event){
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            const LoginRequest = {
                username: this.state.username,
                password: this.state.password
            }
      
            this.props.login(LoginRequest);
            this.setState({
                username: "",
                password: "",
                usernameError:"",
                passwordError: "",
                messageError: "",
               
              });
        }else{
          this.setState({
            feedback:"Wrong Username or Password"
          });
        }
        
           
    }

    render() {
            const {feedback} = this.state;
        return (
            <div className={styles.info}>
              <div className={styles.container}>
                  <div className={styles.col}>
                  <div className={styles.col}>
                    <p className={styles.feedback}>{feedback}</p>
                    <h4>Login</h4>
                    <hr />
                    <form onSubmit={this.onSubmit} className={styles.inner}>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Username"
                          name="username"
                          value = {this.state.username}
                          onChange={this.onChange}
                        />{
                            this.state.usernameError &&(
<div className={styles.invalid}>{this.state.usernameError}</div>
                            )
                        }
                        
                      </div>
                      <div className={styles.row}>
                        <input
                          type="password"
                          className={styles.input}
                          placeholder="Password"
                          name="password"
                          value = {this.state.password}
                          onChange={this.onChange}
                        />
                        <p className={styles.invalid}>{this.state.passwordError}</p>
                      </div>
                      
                      <input
                        type="submit"
                        className={styles.button}
                        
                      />
                    </form>
                  </div>
                </div>
              </div>
              </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToProps =state => ({
security: state.security,
errors: state.errors
})

export default connect(mapStateToProps, {login})(Login)