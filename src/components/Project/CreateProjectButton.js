import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styles from "./Project.module.css"

class CreateProjectButton extends Component {
    render() {
        return (
            <React.Fragment>
        <Link to="/addProject" className={styles.button}>
            Create Project
        </Link>
        </React.Fragment>
        )
    }
}

export default CreateProjectButton