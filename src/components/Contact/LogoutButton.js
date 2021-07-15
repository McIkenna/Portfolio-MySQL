import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styles from "../Project/Project.module.css"

export default class LogoutButton extends Component {
    render() {
        return (
            <React.Fragment>
            <Link to="/" className={styles.button}>
                Logout
            </Link>
            </React.Fragment>
        )
    }
}
