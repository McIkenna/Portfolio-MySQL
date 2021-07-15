import React, { Component } from 'react'
import classes from "./Project.module.css"
import {Link} from "react-router-dom"
import {deleteProject} from "../../actions/ProjectActions"
import {connect} from "react-redux"
import PropTypes from "prop-types"

class ProjectItem extends Component {
	onDeleteClick = id => {
		this.props.deleteProject(id)
	}
    render() {
		let {project} = this.props;
		const image = `data:image/jpg;base64,${project.image}`
		let {validToken, user} = this.props.security;
		
		const userIsAuthenticated = (
               <div>
            <Link to={`/updateProject/${project.projectId}`}><button className={classes.button}>Update</button></Link>
			<button className={classes.button} onClick={this.onDeleteClick.bind(this, project.projectId)}>Delete</button>
			</div>

        )
       
        let securedLinks;

        if(validToken&&user){
            securedLinks = userIsAuthenticated;
        }else{
            securedLinks = "";
        }

        return (

			<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.card}>
				<div className={classes.leftSide} >
			<img src={image} alt="car"/>
			</div>
				<div className={classes.rightSide} >
			   
				  <div className={classes.title}>
				  <h1 className={classes.label}>{project.projectTitle}</h1>
					<h5>{project.keyRole}</h5>
					<h3>{project.projectSummary}</h3>
				  </div>
				  <div className={classes.box}>
					<div
					className={project.progressRate == 3 ? classes.completedBar : project.progressRate == 2 ? classes.inProgressBar : project.progressRate == 1 ? classes.startedBar: classes.NoBar}
				   >
					  <div className={classes.bar}></div>
					</div>
				   
					<small>{(project.progressRate*100/3).toFixed(2)} % Completion</small>
				   <a href={project.projectLink} target="blank" disabled><button className={classes.btn}>View</button></a>
				  </div>
				  
				</div>
				
			  </div>
			  {securedLinks}
			  
		</div>
		</div>
           
		
        )
    }
}

ProjectItem.propTypes = {
	deleteProject: PropTypes.func.isRequired,
	security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps, {deleteProject})(ProjectItem)