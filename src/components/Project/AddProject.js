import React, { Component } from 'react'
import styles from "./Project.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {createProject} from "../../actions/ProjectActions"

class AddProject extends Component {

    constructor(){
        super()
        this.state = {
            projectId: "",
            projectTitle: "",
            keyRole: "",
            projectSummary: "",
            projectImage:"",
            projectLink:"",
            progress: "",
            progressRate: null,
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

    onChange(e){
      e.preventDefault();
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
        formData.append('projectTitle', this.state.projectTitle);
        formData.append('keyRole', this.state.keyRole);
        formData.append('projectSummary', this.state.projectSummary);
        formData.append('progress', this.state.progress);
        formData.append('projectLink', this.state.projectLink);
        formData.append('progressRate', this.state.progressRate);
        formData.append('fileName', this.state.fileName);
        formData.append('projectImage', this.state.projectImage);
        formData.append('startDate', this.state.startDate);
        formData.append('endDate', this.state.endDate);
   
        this.props.createProject(formData, this.props.history)
    }
    render() {
        const {errors} = this.state
        return (
            <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Create Project Undertaken</h4>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    <div className={styles.row}>
                    <div className={styles.row}>
                    <img src={this.state.image_preview} alt="..." />
                      <input 
                      type="file" 
                    className= "custom-file-input"
                    name="file"
                    value = {this.state.projectImage}
                    onChange={this.handlePreview}/>
                    <label className="custom-file-label" for="customFile">{this.state.fileName}</label>
                    
                      </div>
                         <p className={styles.invalid}>{errors.projectIdentifier}</p>
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.projectTitle ? styles.invalid : styles.input}
                          placeholder="Project Title"
                          name="projectTitle"
                          value = {this.state.projectTitle}
                          onChange={this.onChange}
                         
                        />
                         <p className={styles.invalid}>{errors.projectTitle}</p>
                      </div>

                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.keyRole ? styles.invalid : styles.input}
                          placeholder="Key Role"
                          name="keyRole"
                          value = {this.state.keyRole}
                          onChange={this.onChange}
                        />
                        <p  className={styles.invalid}>{errors.keyRole}</p>
                      </div>
                      <div className={styles.row}>
                        <select
                          type="text"
                          className={errors.progress ? styles.invalid : styles.input}
                          placeholder="Progress"
                          name="progress"
                          value = {this.state.progress}
                          onChange={this.onChange}
                        >
                        <option value={0}>Not Started</option>
                        <option value={1}>Started</option>
                        <option value={2}>In Progress</option>
                        <option value={3}>Completed</option>
                        </select>
                        <p className={styles.invalid}>{errors.progress}</p>

                      </div>
                      <div className={styles.row}>
                        <select
                          type="text"
                          className={errors.progressrate ? styles.invalid : styles.input}
                          placeholder="progress Rate"
                          name="progressRate"
                          value = {this.state.progressRate}
                          onChange={this.onChange}
                        >
                        <option value={0}>0</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={75}>75</option>
                        <option value={100}>100</option>
                        </select>
                        <p className={styles.invalid}>{errors.progressRate}</p>

                      </div>
                      <div className={styles.row}>
                        <textarea
                        type="text"
                          className={errors.projectSummary ? styles.invalid : styles.input}
                          placeholder="Project Summary"
                          name="projectSummary"
                          value = {this.state.projectSummary}
                          onChange={this.onChange}
                        />
                        <p className={styles.invalid}>{errors.projectSummary}</p>
                      </div>
                                  
                      
                      <h4>Start Date</h4>
                      <div className={styles.row}>
                        <input
                          type="date"
                          className={styles.input}
                          name="startDate"
                          value = {this.state.startDate}
                          onChange={this.onChange}
                        />
                      </div>
                      <h4>Estimated End Date</h4>
                      <div className={styles.row}>
                        <input
                          type="date"
                          className={styles.input}
                          name="endDate"
                          value = {this.state.endDate}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.projectLink ? styles.invalid : styles.input}
                          placeholder="Project Link"
                          name="projectLink"
                          value = {this.state.projectLink}
                          onChange={this.onChange}
                         
                        />
                         <p className={styles.invalid}>{errors.projectLink}</p>
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

AddProject.propTypes = {
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
 errors: state.errors
})
export default connect(mapStateToProps, {createProject})(AddProject)