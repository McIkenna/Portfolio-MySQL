import {connect} from 'react-redux';
import classes from './Spinner.module.css';

import React, { Component } from 'react'

class Spinner extends Component {

    
    render() {
        return (
            <div className={classes.Loader_container}>
                <div className={classes.Loader}>Loading...</div> 
            </div>
        )
    }
}
export default Spinner;