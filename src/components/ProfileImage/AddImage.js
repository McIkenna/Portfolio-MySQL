import React, { Component } from 'react'

import styles from "./profileImage.module.css"
import Axios from 'axios';
 

class AddImage extends Component {

  constructor(){
    super();
    this.state = {
      file: " ",
      imagePreviewUrl: ""
    }
  }
  
  addData(data){
    Axios.request({
      method: "POST",
      url: "http://localhost:8080/uploadFile",
      data: data
    }).then(res=>{
      this.props.history.push('/')
    }).catch(err=>console.log(err));
  }

  onAddSubmit(e){
    e.preventDefault();
    const imgPrev = this.state.imagePreviewUrl.split(',')[1];
    let raw = window.atob(decodeURIComponent(imgPrev));
    let rawLength = raw.length
    let array = new Uint8Array(new ArrayBuffer(rawLength));
    for(let i=0; i<rawLength; i++){
      array[i] = raw.charCodeAt(i);
    }
    let imge = [];
    for(let i =0; i<rawLength; i++){
      imge.push((array[i]));
    }

    const data = {
      image: imge

    }
    this.addData(data)
  }
  
  _handleImageChange(e){
    e.preventDefault();
    let file = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
  
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
  }


    render() {

      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
        return (
            <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Create Project Undertaken</h4>
                    <hr />
                    
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                    <img  width="200" height="200" src={$imagePreview} alt="car" />
                    <div className={styles.row}>
                        <input
                          type="file"
                          className={styles.input}
                          placeholder="profile Image"
                         accept="image/*"
                      
                          onChange={(e)=>this._handleImageChange}
                         
                        />
                  
                      </div>
                      <div>
                  <button type="submit" value="save" onClick= {this.onAddSubmit.bind(this)}>Upload</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default AddImage
