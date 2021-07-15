import React, { Component } from 'react'
import styles from "./Project.module.css"
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import {getStoredProject, updateProject} from "../../actions/ProjectActions"

class UpdateProject extends Component {

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


    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.error){
            this.setState({errors: nextProps.errors})
        }
        const{
            projectId,
            projectImage,
            projectTitle,
            keyRole,
            projectSummary,
            projectLink,
            progress,
            progressRate,
            file,
            fileName,
            image_preview,
            startDate,
            endDate,
        } = nextProps.project

        this.setState({
          projectId,
          projectImage,
          projectTitle,
          keyRole,
          projectSummary,
          projectLink,
          progress,
          progressRate,
          file,
          fileName,
          image_preview,
          startDate,
          endDate,
        })
    }

    componentDidMount(){
        const{id} = this.props.match.params;
        this.props.getStoredProject(id, this.props.history)
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
        formData.append('projectId', this.state.projectId);
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
   
        this.props.updateProject(formData, this.props.history)
    }

    render() {
        const {errors} = this.state
        return (
            <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Update Project</h4>
                    <hr />
                    <form onSubmit={this.onSubmit}>

                    <div className={styles.row}>
                  <div>
                <img src={this.state.projectImage} alt="..." className={styles.form_img_preview}/>
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
                          className={errors.progressRate ? styles.invalid : styles.input}
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

UpdateProject.propTypes = {

    getStoredProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    updateProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project: state.project.project,
    errors: state.errors
})

export default connect(mapStateToProps, {getStoredProject, updateProject})(UpdateProject)