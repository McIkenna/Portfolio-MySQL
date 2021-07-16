import React, { Component } from 'react'
import styles from "./Skill.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {updateSkill, getStoredSkill} from "../../actions/SkillAction"

 class UpdateSkill extends Component {
     constructor(){
         super()
         this.state = {
           skillId:"",
            skillName: "",
             subName: "",
             proficiency: "",
             rating: "",
             skillImageUrl:"",
             file: null,
            fileName:"",
            image_preview: "",
            errors: {}
         }
         this.onChange = this.onChange.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
     }

     UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.error){
            this.setState({errors: nextProps.errors})
        }
        const{
            skillId,
            skillName,
            subName,
            proficiency,
            rating,
            skillImageUrl,
            file,
           fileName,
           image_preview,
        } = nextProps.skill;

        this.setState({
            skillId,
            skillName,
            subName,
            proficiency,
            rating,
            skillImageUrl,
            file,
           fileName,
           image_preview,
        })
    }

    componentDidMount(){
        const{id} = this.props.match.params;
        this.props.getStoredSkill(id, this.props.history)
    }
     onChange(e){
         this.setState({[e.target.name]: e.target.value})
     }

     handlePreview =(e)=> {
      let image_as_base64 = URL.createObjectURL(e.target.files[0])
      this.setState({
        image_preview: image_as_base64,
        file : e.target.files[0],
        fileName : e.target.files[0].name

    })
    }


     onSubmit(e){
         e.preventDefault();
         let formData = new FormData();
         formData.append('skillId', this.state.skillId);
         formData.append('file', this.state.file);
         formData.append('skillName', this.state.skillName);
         formData.append('subName', this.state.subName);
         formData.append('proficiency', this.state.proficiency);
         formData.append('rating', this.state.rating);
         formData.append('skillImageUrl', this.state.skillImageUrl);
         formData.append('fileName', this.state.fileName);
        

         this.props.updateSkill(formData, this.props.history)
     }
     
    render() {
        const {errors} = this.state
        return (
            <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Update Skills</h4>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    <div className={styles.row}>
                        <div>
                    <img src={this.state.skillImageUrl} alt="..." />
                    <img src={this.state.image_preview} alt="..." />
                    </div>  
                    <input 
                      type="file" 
                    className= "custom-file-input"
                    name="file"
                    onChange={this.handlePreview}/>
                    <label className="custom-file-label" for="customFile">{this.state.fileName}</label>
                    
                         <p className={styles.invalid}>{errors.fileName}</p>
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.skillname ? styles.invalid : styles.input}
                          placeholder="Skill Name"
                          name="skillName"
                          value = {this.state.skillName}
                          onChange={this.onChange}
                         
                        />
                         <p className={styles.invalid}>{errors.skillname}</p>
                      </div>

                      <div className={styles.row}>
                        <input
                          type="text"
                          className={errors.subname ? styles.invalid : styles.input}
                          placeholder="Sub-Name"
                          name="subName"
                          value = {this.state.subName}
                          onChange={this.onChange}
                        />
                        <p  className={styles.invalid}>{errors.subname}</p>
                      </div>
                      <div className={styles.row}>
                        <select
                          type="text"
                          className={errors.proficiency ? styles.invalid : styles.input}
                          placeholder="Proficiency"
                          name="proficiency"
                          value = {this.state.proficiency}
                          onChange={this.onChange}
                        >
                        <option value={0}>Novice</option>
                        <option value={1}>Beginner</option>
                        <option value={2}>Intermidiate</option>
                        <option value={3}>Expert</option>
                        <option value={4}>GodFather</option>
                        </select>
                        <p className={styles.invalid}>{errors.proficiency}</p>

                      </div>
                      <div className={styles.row}>
                        <select
                          type="text"
                          className={errors.rating ? styles.invalid : styles.input}
                          placeholder="rating"
                          name="rating"
                          value = {this.state.rating}
                          onChange={this.onChange}
                        >
                        <option value={0}>0</option>
                        <option value={1}>25</option>
                        <option value={2}>50</option>
                        <option value={3}>75</option>
                        <option value={4}>100</option>
                        </select>
                        <p className={styles.invalid}>{errors.rating}</p>
                      </div>
                      <input
                        type="submit"
                        className={styles.button}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        )
    }
}

UpdateSkill.propTypes = {
    updateSkill: PropTypes.func.isRequired,
    skill: PropTypes.object.isRequired,
    getStoredSkill: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    skill:state.skill.skill,
    errors: state.errors
})

export default connect(mapStateToProps, {updateSkill,getStoredSkill})(UpdateSkill)