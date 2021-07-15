import React, { Component } from 'react'
import {Link} from "react-router-dom"
import classes from "./Work.module.css"


class CreateWorkButton extends Component {
    render() {
        return (
            <React.Fragment>
            <Link to="/addWork" className={classes.button}>
                Create Work
            </Link>
            </React.Fragment>
        )
    }
}
export default CreateWorkButton