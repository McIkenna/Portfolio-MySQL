import React, { Component } from 'react'
import styles from "./Info.module.css"
import {getStoredInfo, updatePrevInfo} from "../../actions/InfoActions"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import errorReducer from '../../reducers/errorReducer'



class UpdateInfo extends Component {

  constructor(){
    super()
      this.state = { 
        infoId: "",
        firstName: "",
        lastName: "",
        occupation: "",
        email: "",
        phone: "",
        summary: "",
        personalImage:"",
        file: null,
        fileName:"",
        image_preview: "",
        
        errors: {}
}
this.onChange = this.onChange.bind(this)
this.onSubmit = this.onSubmit.bind(this)
}

UNSAFE_componentWillReceiveProps(nextProps){
if(nextProps.errors){
    this.setState({errors:nextProps.errors})
}
const { 
  infoId,
firstName,
lastName,
occupation,
phone,
email,
summary,
personalImage,
file,
fileName,
image_preview,
} = nextProps.info;

this.setState({
  infoId,
firstName,
lastName,
occupation,
phone,
email,
summary,
personalImage,
file,
fileName,
image_preview,

})
}


componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getStoredInfo(id, this.props.history);
}

onChange(e){
    this.setState({[e.target.name]: e.target.value})
}

handlePreview =(e)=> {
  let image_as_base64 = URL.createObjectURL(e.target.files[0])
  this.setState({
    image_preview: image_as_base64,
    file : e.target.files[0],
    fileName : e.target.files[0].name

})
}

onSubmit(e){
    e.preventDefault()

    let formData = new FormData();
        
          formData.append('infoId', this.state.infoId);
            formData.append('file', this.state.file);
            formData.append('firstName', this.state.firstName);
            formData.append('lastName', this.state.lastName);
            formData.append('occupation', this.state.occupation);
            formData.append('phone', this.state.phone);
            formData.append('email', this.state.email);
            formData.append('summary', this.state.summary);
            formData.append('fileName', this.state.fileName);
            formData.append('personalImage', this.state.personalImage);
       
    this.props.updatePrevInfo(formData , this.props.history)
}
render() {
    const {errors} =this.state
    return (
        <div>
           <div className={styles.info}>
          <div className={styles.container}>
            <div className={styles.cover}>
              <div className={styles.col}>
                <h4>Update User Info</h4>
                <hr />
                <form onSubmit={this.onSubmit}>
                <div className={styles.row}>
                  <div>
                <img src={this.state.personalImage} alt="..." className={styles.form_img_preview}/>
                    <img src={this.state.image_preview} alt="..."className={styles.form_img_preview} />
                    </div>
                      <input 
                      type="file" 
                    className= "custom-file-input"
                    name="file"
                    onChange={this.handlePreview}/>
                    <label className="custom-file-label" for="customFile">{this.state.fileName}</label>
                    
                      </div>

                  <div className={styles.row}>
                    <input
                      type="text"
                      className={errors.firstName ? styles.invalid : styles.input}
                      placeholder="First Name"
                      name="firstName"
                      value = {this.state.firstName}
                      onChange={this.onChange}
                     
                    />
                     <p className={styles.invalid}>{errors.firstName}</p>
                  </div>

                  <div className={styles.row}>
                    <input
                      type="text"
                      className={errors.lastName ? styles.invalid : styles.input}
                      placeholder="Last Name"
                      name="lastName"
                      value = {this.state.lastName}
                      onChange={this.onChange}
                    />
                    <p  className={styles.invalid}>{errors.lastName}</p>
                  </div>
               <div className={styles.row}>
                    <input
                      type="text"
                      className={errors.phone ? styles.invalid : styles.input}
                      placeholder="Phone Number"
                      name="phone"
                      value = {this.state.phone}
                      onChange={this.onChange}

                    />
                    <p className={styles.invalid}>{errors.phone}</p>

                  </div>
                  <div className={styles.row}>
                    <input
                      type="text"
                      className={errors.email ? styles.invalid : styles.input}
                      placeholder="Email"
                      name="email"
                      value = {this.state.email}
                      onChange={this.onChange}
                    />
                     <p className={styles.invalid}>{errors.email}</p>
                  </div>
                  <div className={styles.row}>
                    <input
                      type="text"
                      className={errors.occupation ? styles.invalid : styles.input}
                      placeholder="Job Title"
                      name="occupation"
                      value = {this.state.occupation}
                      onChange={this.onChange}
                  
                    />
                    <p className={styles.invalid}>{errors.occupation}</p>
                  </div>
                  <div className={styles.row}>
                    <textarea
                    type="textarea"
                      className={errors.summary ? styles.invalid : styles.input}
                      placeholder="Job Description"
                      name="summary"
                      value = {this.state.summary}
                      onChange={this.onChange}
                    />
                    <p className={styles.invalid}>{errors.summary}</p>
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
        </div>
    )
}
}

UpdateInfo.propTypes = {
    getStoredInfo: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
    updatePrevInfo: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    info: state.info.info,
    errors: state.errors
})

export default connect(mapStateToProps, {getStoredInfo, updatePrevInfo}) (UpdateInfo)