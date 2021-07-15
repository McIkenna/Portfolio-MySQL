import React, { Component, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import styles from "./task.module.css"
import {uploadTask} from "../../actions/ProjectActions"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import axios from "axios"

class AddTask extends Component {
  constructor(){
    super()
    this.state = {
            imageData: null,
            imageName: null,
            projectIdentifier: "",
            projectTitle: "",
            keyRole: "",
            projectSummary: "",
            progress: "",
            startDate: null,
            endDate: null,
            errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUploadClick = this.handleUploadClick.bind(this)
  }

  handleUploadClick = event => {
    event.preventDefault();
  const imageData = new FormData();
  imageData.append('imageFile', this.state.imageFile);
  imageData.append('projectTitle', this.state.projectTitle);
  imageData.append("projectSummary", this.state.projectSummary);
  imageData.append("progress", this.state.progress);
  imageData.append("keyRole", this.state.keyRole);
  imageData.append("startdate", this.state.startDate);
  imageData.append("endDate", this.state.endDate);

  let headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
  }
  
  axios.post("api/file/uploadFile", imageData, headers)
  .then(function(response){
    console.log(response)
    console.log("success")
  })
  .catch(function(response){
    console.log(response)
    console.log("sorry")
});
}


 
handleChange = e => {
  this.setState({
    imageFile: e.target.files[0]
  })
};
  render() {
    return (
      <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Create Project Task Completed</h4>
                    <hr />
                    <form onSubmit={e => this.handleUploadClick(e)}>
                    <div className={styles.row}>
                        <input
                          type="file"
                          className={styles.input}
                          placeholder="profile Image"
                         accept="image/*"
                          onChange={this.handleChange}
                         
                        />
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Image Name"
                          name="name"
                          disabled
                         value={this.state.imageName}
                          onChange={e => this.setState({ imageName: e.target.value })}
                         
                        />
                        </div>
                
              
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Project Title"
                          name="projectTitle"
                         value = {this.state.projectTitle}
                         onChange={e => this.setState({ projectTitle: e.target.value })}
                         
                        />
        
                      </div>

                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Key Role"
                          name="keyRole"
                          value = {this.state.keyRole}
                          onChange={e => this.setState({ keyRole: e.target.value })}
                        />
                      </div>
                      <div className={styles.row}>
                        <select
                          type="text"
                          className={styles.input}
                          placeholder="Progress"
                          name="progress"
                          value = {this.state.progress}
                          onChange={e => this.setState({ progress: e.target.value })}
                        >
                        <option value={0}>Not Started</option>
                        <option value={1}>Started</option>
                        <option value={2}>In Progress</option>
                        <option value={3}>Completed</option>
                        </select>
                      </div>
          
                      <div className={styles.row}>
                        <textarea
                        type="text"
                          className={ styles.input}
                          placeholder="Project Summary"
                          name="projectSummary"
                          value = {this.state.projectSummary}
                          onChange={e => this.setState({ projectSummary: e.target.value })}
                        />
                      </div>
                      
                      <h4>Start Date</h4>
                      <div className={styles.row}>
                        <input
                          type="date"
                          className={styles.input}
                          name="startDate"
                          value = {this.state.startDate}
                          onChange={e => this.setState({startDate: e.target.value })}
                        />
                      </div>
                      <h4>Estimated End Date</h4>
                      <div className={styles.row}>
                        <input
                          type="date"
                          className={styles.input}
                          name="endDate"
                          value = {this.state.endDate}
                         onChange={e => this.setState({endDate: e.target.value })}
                        />
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







 
/*
  submitForm(contentType, data, setResponse){
    axios({
    url: `${API_BASE}/api/file/uploadFile`,
    method: 'POST',
    data: data,
    headers: {
    'Content-Type': contentType
    }
    }).then((response) => {
    setResponse(response.data);
    }).catch((error) => {
    setResponse("error");
    })
   }
*/
 


export default AddTask