import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styles from "./task.module.css"
export default class CreateTaskButton extends Component {
    render() {
        return (
            <React.Fragment>
        <Link to="/addTask" className={styles.button}>
           Create Project Task
        </Link>
        </React.Fragment>
        )
    }
}
