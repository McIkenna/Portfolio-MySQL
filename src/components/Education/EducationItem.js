import React, { Component } from 'react'
import styles from "./Edu.module.css"
import {Link} from "react-router-dom"
import 'aos/dist/aos.css';
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {deleteEdu} from "../../actions/EduActions"

class EducationItem extends Component {

  onDeleteClick = id => {
		this.props.deleteEdu(id)
	}
    render() {

       const {education} = this.props;
       const image = `data:image/png;base64,${education.image}`
      const {validToken, user} = this.props.security;

        const userIsAuthenticated = (
               <div>
          <Link to={`/updateEdu/${education.id}`}><button className={styles.button}>Update</button></Link>
          <button className={styles.button} onClick={this.onDeleteClick.bind(this, education.id)}>Delete</button>
          </div>

        )

       
        let securedLinks;

        if(validToken&&user){
            securedLinks = userIsAuthenticated;
        }else{
            securedLinks = "";
        }

 
      
  return (
  <div className={styles.wrapper}>
  <div className={styles.cards_wrap}>
    <div className={styles.card_item}>
      <div className={styles.card_inner}>
        <div className={styles.card_top}>
          <img src={image} alt="car" />
        </div>
          <div className={styles.card_bottom}>
          <div className={styles.card_category}>
            {education.schoolName}
          </div>
          <div className={styles.card_info}>
  
            <p>
              {education.honor}
            </p>
          </div>
        
        </div>
          {securedLinks}
			  
        </div>
    </div>
</div>
</div>
        )
    }
}

EducationItem.propTypes = {
  deleteEdu: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  security: state.security
})

export default connect(mapStateToProps, {deleteEdu})(EducationItem)