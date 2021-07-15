import React, { Component } from 'react'
import classes from "./Work.module.css"
import {getStoredWork, updatePrevWork} from "../../actions/WorkActions"
import {connect} from "react-redux"
import PropTypes from "prop-types"



class UpdateWork extends Component {

    constructor(){
        super()
        this.state={
          workId:"",
          jobTitle: "",
          companyName: "",
          jobDescription: "",
          workImage:"",
          city: "",
          state: "",
          country: "",
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
        const{
          workId,
          jobTitle,
          companyName,
          jobDescription,
          workImage,
          city,
          state,
          country,
          startDate,
          endDate,
          file,
          fileName,
          image_preview,
          
        } = nextProps.work;

        this.setState({
          workId,
          jobTitle,
          companyName,
          jobDescription,
          workImage,
          city,
          state,
          country,
          startDate,
          endDate,
          file,
          fileName,
          image_preview,
          
        })
    }

    componentDidMount(){
        const{id} = this.props.match.params;
        this.props.getStoredWork(id, this.props.history)
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
        formData.append('workId', this.state.workId);
        formData.append('file', this.state.file);
        formData.append('companyName', this.state.companyName);
        formData.append('jobTitle', this.state.jobTitle);
        formData.append('jobDescription', this.state.jobDescription);
        formData.append('city', this.state.city);
        formData.append('state', this.state.state);
        formData.append('country', this.state.country);
        formData.append('fileName', this.state.fileName);
        formData.append('workImage', this.state.workImage);
        this.props.updatePrevWork(formData, this.props.history)
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
                  <div>
                <img src={this.state.workImage} alt="..." className={classes.form_img_preview}/>
                    <img src={this.state.image_preview} alt="..."className={classes.form_img_preview} />
                    </div>
                      <input 
                      type="file" 
                      className= "custom-file-input"
                      name="file"
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

UpdateWork.propTypes = {
    getStoredWork: PropTypes.func.isRequired,
    work: PropTypes.object.isRequired,
    updatePrevWork: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    work: state.work.work,
    errors: state.errors
})


export default connect(mapStateToProps, {getStoredWork, updatePrevWork})(UpdateWork)