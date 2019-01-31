import React, { Component } from 'react';
// import fire from '../../firebase';
// import { Grid, Modal, Button, FormControl, Input, InputLabel, Paper } from '@material-ui/core';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import classes from './Authentification.module.scss';



class Authentification extends Component {
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: '',
            isLogin: true,
        }

    }

    toggleForm = () => {
        this.setState(previousState => ({
            isLogin: !previousState.isLogin
        }));
    }

    render(){
        return(
            <div className={classes.AuthContainer}>                
                <Login open={this.state.isLogin} handleSwitch={this.toggleForm}/>
                <Signup open={!this.state.isLogin} handleSwitch={this.toggleForm}/>
                <div className={classes.Stripe}></div>
            </div>
        )
    }



}
export default Authentification;

