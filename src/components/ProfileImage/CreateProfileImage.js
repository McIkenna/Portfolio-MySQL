import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styles from "./profileImage.module.css"

class CreateProfileImage extends Component {
    render() {
        return (
            <React.Fragment>
        <Link to="/addImg" className={styles.button}>
            Create Profile Image
        </Link>
        </React.Fragment>
        )
    }
}

export default CreateProfileImage