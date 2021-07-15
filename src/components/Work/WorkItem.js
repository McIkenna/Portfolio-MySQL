import React, { Component } from 'react'
import classes from "./Work.module.css"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {deleteWork} from "../../actions/WorkActions"
class WorkItem extends Component {

    onDeleteClick = id => {
        this.props.deleteWork(id);
    }
    render() {
        const {work} = this.props;
        const {validToken, user} = this.props.security;
        const image = `data:image/png;base64,${work.image}`

        const userIsAuthenticated = (
               
          <div className={classes.infobutton}>
          <Link to={`/updateWork/${work.workId}`}>
          <button className={classes.updatebtn}>Update</button>
          </Link>
          <button className={classes.deletebtn} onClick={this.onDeleteClick.bind(this, work.workId)}>Delete</button>
             </div>

        )

       
        let securedLinks;

        if(validToken&&user){
            securedLinks = userIsAuthenticated;
        }else{
            securedLinks = "";
        }
        
  
return (
  
  <div>
<div className={classes.main}>

  <div className={classes.cards}>

    <div className={classes.cards_item}>
    <div className={classes.flip}>
    <div className={classes.front} >
    <div><img src={image}  alt="car"  className={classes.image} /></div>

    </div>

    <div className={classes.back}>
    <h3>{work.companyName}</h3>
    <p className={classes.jobTitle}>{work.jobTitle}</p>
    <p>{work.jobDescription}</p>
    </div>
   {securedLinks}
    </div>
    </div>
   
  </div>
  
      
  </div>
  </div>


        )
    }
}

WorkItem.propTypes = {
    deleteWork: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  security: state.security
})


export default connect(mapStateToProps, {deleteWork})(WorkItem)