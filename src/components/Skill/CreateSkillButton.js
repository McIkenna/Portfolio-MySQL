import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styles from "./Skill.module.css"

class CreateSkillButton extends Component {
    render() {
        return (
           <React.Fragment>
               <Link to="/addSkill" className={styles.button}>
                   Create Skill
               </Link>
           </React.Fragment>
        )
    }
}

export default CreateSkillButton