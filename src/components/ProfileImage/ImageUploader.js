import {useDispatch, useSelector} from "react-redux";
import React, {useState} from 'react';
import {uploadImage} from "../../actions/ProfileImgAction";
import styles from "./profileImage.module.css"


const ImageUploader = (props) => {

    const dispatch = useDispatch();
    const [imagePreview, setImagePreview] = useState(null);
    const [imageData, setImageData] = useState(null);
    const [imageName, setImageName] = useState("");
    const {image} = useSelector(state => state.upload);

    const handleUploadClick = event => {
        let file = event.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);
        setImageData(imageData);
        setImagePreview(URL.createObjectURL(file));
    };

    const uploadImageWithAdditionalData = () => {
        imageData.append('imageName', imageName);
        dispatch(uploadImage(imageData));
    };

    const handleChange = event => {
        setImageName(event.target.value)
    };


        return (
            <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Create Project Undertaken</h4>
                    <hr />
                    <img width="200" height="200" src={imagePreview} alt="avatar"/>
                    <div className={styles.row}>
                        <input
                          type="file"
                          className={styles.input}
                          placeholder="profile Image"
                         accept="image/*"
                          onChange={handleUploadClick}
                         
                        />
                      </div>
                      <div className={styles.row}>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="Image Name"
                          name="name"
                          value={imageName}
                          onChange={handleChange}
                         
                        />
                      </div>
                      <div>
                        {imagePreview}
                      </div>
                      <div>
                          <button onClick={() => uploadImageWithAdditionalData()}>Upload</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default ImageUploader; 