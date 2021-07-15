import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styles from "../Project/Project.module.css"
export default class LoginButton extends Component {
    render() {
        return (
            <React.Fragment>
            <Link to="/Login" className={styles.button}>
                Login
            </Link>
            </React.Fragment>
        )
    }
}
