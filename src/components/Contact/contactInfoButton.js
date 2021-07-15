import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styles from "./contact.module.css"

class contactInfoButton extends Component {
    render() {
        return (
            <React.Fragment>
            <Link to="/contactForm" className={styles.button}>
                Contact Me
            </Link>
            </React.Fragment>
        )
    }
}

export default contactInfoButton