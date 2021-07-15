import React, { Component } from 'react'
import classes from "./Edu.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {updateEducation, getStoredEdu} from "../../actions/EduActions"

class  UpdateEdu extends Component {
    constructor(){
        super()
        this.state = {
            eduId:"",
            major: "",
            concentration: "",
            schoolName: "",
            honor: "",
            state: "",
            city: "",
            country: "",
            educationImage:"",
            startDate: "",
            endDate: "",
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
            eduId,
            major,
            concentration,
            schoolName,
            honor,
            state,
            city,
            country,
            educationImage,
            startDate,
            endDate,
            file,
            fileName,
            image_preview
        
        } = nextProps.education;
        
        this.setState({
            eduId,
            major,
            concentration,
            schoolName,
            honor,
            state,
            city,
            country,
            educationImage,
            startDate,
            endDate,
            file,
            fileName,
            image_preview
        })
        }
        
        
        componentDidMount(){
            const {id} = this.props.match.params;
            this.props.getStoredEdu(id, this.props.history);
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
        e.preventDefault();
      
        let formData = new FormData();
        formData.append('eduId', this.state.eduId);
        formData.append('file', this.state.file);
        formData.append('major', this.state.major);
        formData.append('concentration', this.state.concentration);
        formData.append('schoolName', this.state.schoolName);
        formData.append('honor', this.state.honor);
        formData.append('state', this.state.state);
        formData.append('city', this.state.city);
        formData.append('country', this.state.country);
        formData.append('fileName', this.state.fileName);
        formData.append('educationImage', this.state.educationImage);
        formData.append('startDate', this.state.startDate);
        formData.append('endDate', this.state.endDate);
   
        this.props.updateEducation(formData, this.props.history)
    }
    render() {
        const {errors} = this.state
        return (
            <div>
                 <div className={classes.info}>
              <div className={classes.container}>
                <div className={classes.cover}>
                  <div className={classes.col}>
                    <h4>Update Education</h4>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    <div className={classes.row}>
                
                    <img src={this.state.educationImage} alt="..." className={classes.form_img_preview}/>
                    <img src={this.state.image_preview} alt="..." />
                      <input 
                      type="file" 
                    className= "custom-file-input"
                    name="file"
                    onChange={this.handlePreview}/>
                    <label className="custom-file-label" for="customFile">{this.state.fileName}</label>
                 
                         <p className={classes.invalid}>{errors.fileName}</p>
                      </div>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={errors.schoolName ? classes.invalid : classes.input}
                          placeholder="school Name"
                          name="schoolName"
                          value = {this.state.schoolName}
                          onChange={this.onChange}
                         
                        />
                         <p className={classes.invalid}>{errors.schoolName}</p>
                      </div>

                      <div className={classes.row}>
                        <input
                          type="text"
                          className={errors.major ? classes.invalid : classes.input}
                          placeholder="Major"
                          name="major"
                          value = {this.state.major}
                          onChange={this.onChange}
                        />
                        <p  className={classes.invalid}>{errors.major}</p>
                      </div>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={errors.phone ? classes.invalid : classes.input}
                          placeholder="Concentration"
                          name="concentration"
                          value = {this.state.concentration}
                          onChange={this.onChange}
                        />
                        <p className={classes.invalid}>{errors.phone}</p>

                      </div>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={errors.honor ? classes.invalid : classes.input}
                          placeholder="Honors"
                          name="honor"
                          value = {this.state.honor}
                          onChange={this.onChange}
                        />
                         <p className={classes.invalid}>{errors.honor}</p>
                      </div>
                   
                      <h4>Address</h4>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={classes.input}
                          placeholder="City"
                          name="city"
                          value = {this.state.city}
                          onChange={this.onChange}
                      
                        />
                      </div>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={classes.input}
                          placeholder="State"
                          name="state"
                          value = {this.state.state}
                          onChange={this.onChange}
                      
                        />
                      </div>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={classes.input}
                          placeholder="Country"
                          name="country"
                          value = {this.state.country}
                          onChange={this.onChange}
                      
                        />
                      </div>
                      <h4>Start Date</h4>
                      <div className={classes.row}>
                        <input
                          type="date"
                          className={classes.input}
                          name="startDate"
                          value = {this.state.startDate}
                          onChange={this.onChange}
                        />
                      </div>
                      <h4>Estimated End Date</h4>
                      <div className={classes.row}>
                        <input
                          type="date"
                          className={classes.input}
                          name="endDate"
                          value = {this.state.endDate}
                          onChange={this.onChange}
                        />
                      </div>
                      <input
                        type="submit"
                        className={classes.button}
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

UpdateEdu.propTypes = {
    getStoredEdu: PropTypes.func.isRequired,
    education: PropTypes.object.isRequired,
    updateEducation: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
   }
   const mapStateToProps = state => ({
       education: state.education.education,
       errors: state.errors
   })
   

export default connect(mapStateToProps, {updateEducation, getStoredEdu})(UpdateEdu)