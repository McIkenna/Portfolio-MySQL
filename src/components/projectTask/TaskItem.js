import React, { Component } from 'react'
import classes from "./task.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom"

class TaskItem extends Component {


    render() {
        const {task} = this.props;
        const data = `data:image/jpeg;base64,${task.data}`
        AOS.init({duration: 2000});
        const progStyle = {
             
        }
    return (

        
    <div className={classes.container}>
        <div className={classes.content}>
            <div className={classes.card}>
            <div className={classes.leftSide} data-aos="fade-right">
        <img src={data} alt="car"/>
        </div>
            <div className={classes.rightSide} data-aos="fade-left">
           
              <div className={classes.title}>
              <h1 className={classes.label}>{task.projectTitle}</h1>
                <h5>{task.keyRole}</h5>
                <h3>{task.projectSummary}</h3>
              </div>
              <div className={classes.box}>
                <div
                className={task.progress.toUpperCase() === "COMPLETED" ? classes.completedBar : task.progress.toUpperCase() === "STARTED" ? classes.startedBar : classes.NoBar}
               >
                  <div className={classes.bar}></div>
                </div>
               
                <small>{task.progress}</small>
               <a href={task.link} target="_blank"><button className={classes.btn}>View</button></a>
              </div>
            </div>          
          </div>
    </div>
    </div>
        )
    }
}

export default TaskItem
