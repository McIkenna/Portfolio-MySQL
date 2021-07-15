import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./Info.module.css"


 const  CreateInfoButton = () => {
    return (
        <React.Fragment>
        <Link to="/addInfo" className={styles.button}>
            CreateInfo
        </Link>
        </React.Fragment>
    )
}

export default CreateInfoButton;