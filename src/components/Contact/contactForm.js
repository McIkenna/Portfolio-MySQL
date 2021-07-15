import React, { Component } from 'react'
import styles from "./contact.module.css"
import emailjs from "emailjs-com";

class contactForm extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: " ",
            message: "",
            nameError:"",
            emailError: "",
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
        let nameError = "";
        let emailError = "";

        
        if(!this.state.name){
            nameError = "name cannot be empty"
        }
        if(!this.state.message){
            let confirm = window.confirm("You are about to submit an empty file")
            if(confirm === true){
                return true;
            }
            else{
                return false
            }
        }
        if(nameError){
            this.setState({nameError});
            return false
        }
        return true;
    }

    onSubmit(event){
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            emailjs.sendForm('gmail', 'template_atlctbc', event.target, 'user_GrMB7c02iEBfFNCUzpLWb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            this.setState({
                name: "",
                email: "",
                message: "",
                nameError:"",
                emailError: "",
                messageError: "",
                feedback: "Successfully submitted!!"
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
                    <h4> Contact Me</h4>
                    <hr />
                    <form onSubmit={this.onSubmit} className={styles.inner}>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Your Name"
                          name="name"
                          value = {this.state.name}
                          onChange={this.onChange}
                        />
                        <p className={styles.invalid}>{this.state.nameError}</p>
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Email Address"
                          name="email"
                          value = {this.state.email}
                          onChange={this.onChange}
                        />
                        <p className={styles.invalid}>{this.state.emailError}</p>
                      </div>
                      <div className={styles.row}>
                        <textarea
                          type="textarea"
                          className={styles.input}
                          placeholder="Your Message"
                          name="message"
                          value = {this.state.message}
                          onChange={this.onChange}
                        />
                        <p className={styles.invalid}>{this.state.messageError}</p>
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

export default contactForm