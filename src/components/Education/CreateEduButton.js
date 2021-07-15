import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from "./Edu.module.css"

class CreateEduButton extends Component {
    render() {
        return (
            <React.Fragment>
        <Link to="/addEducation" className={classes.button}>
            Create Education
        </Link>
        </React.Fragment>
        )
    }
}

export default CreateEduButton