import React, { Component } from 'react'
import classes from "./Work.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {createWork} from "../../actions/WorkActions"


class AddWork extends Component {

    constructor(){
        super()
        this.state = {
        id:null,
        jobTitle: "",
        companyName: "",
        jobDescription: "",
        image:"",
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

    static getDerivedStateFromProps(nextProps, prevState){
      if(nextProps.errors){
          return {errors: nextProps.errors};
      }
      else return null;
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.error){
        this.setState({errors: prevProps.errors});
        
    }
  
  }
  
    onChange(e) {
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
            formData.append('file', this.state.file);
            formData.append('companyName', this.state.companyName);
            formData.append('jobTitle', this.state.jobTitle);
            formData.append('jobDescription', this.state.jobDescription);
            formData.append('fileName', this.state.fileName);
            formData.append('image', this.state.image);
        this.props.createWork(formData, this.props.history)
    }

    render() {
        const {errors} = this.state
        return (
            <div>
                 <div className={classes.info}>
              <div className={classes.container}>
                <div className={classes.cover}>
                  <div className={classes.col}>
                    <h4>Create Work Experience</h4>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    <div className={classes.row}>
                    <img src={this.state.image_preview} alt="..." />
                      <input 
                      type="file" 
                    className= "custom-file-input"
                    name="file"
                    value = {this.state.workImage}
                    onChange={this.handlePreview}/>
                    <label className="custom-file-label" for="customFile">{this.state.fileName}</label>
                    
                      </div>
                      <div className={classes.row}>
                        <input
                          type="text"
                          className={errors.companyName ? classes.invalid : classes.input}
                          placeholder="Company Name"
                          name="companyName"
                          value = {this.state.companyName}
                          onChange={this.onChange}
                         
                        />
                         <p className={classes.invalid}>{errors.companyName}</p>
                      </div>

                      <div className={classes.row}>
                        <input
                          type="text"
                          className={errors.jobTitle ? classes.invalid : classes.input}
                          placeholder="Job Title"
                          name="jobTitle"
                          value = {this.state.jobTitle}
                          onChange={this.onChange}
                        />
                        <p  className={classes.invalid}>{errors.jobTitle}</p>
                      </div>
                      <div className={classes.row}>
                        <textarea
                          type="textarea"
                          className={errors.phone ? classes.invalid : classes.input}
                          placeholder="Job Description"
                          name="jobDescription"
                          value = {this.state.jobDescription}
                          onChange={this.onChange}
                        />
                        <p className={classes.invalid}>{errors.jobDescription}</p>

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
                      <h4>End Date</h4>
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
AddWork.propTypes = {
    createWork: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    errors: state.errors
})
export default connect(mapStateToProps, {createWork}) (AddWork)