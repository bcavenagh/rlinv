import React, { Component } from 'react';
import classes from './Login.module.scss';
import classNames from 'classnames';
class login extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let openClasses = "";
        this.props.open ? 
            openClasses = classNames(classes.LoginModal, classes.Open):
            openClasses = classNames(classes.LoginModal, classes.Close)

        return(
            <div className={openClasses}>
                <div className={classes.LoginFormContainer}>
                    <p>Login</p>
                    <input className={classNames(classes.Inputs, classes.EmailInput)} type="email" placeholder="Email"></input>
                    <input className={classNames(classes.Inputs, classes.PasswordInput)} type="password" placeholder="Password"></input>
                    <div className={classes.ButtonContainer}>
                        <button className={classNames(classes.AuthButtons, classes.SignupButton)} onClick={this.props.handleSwitch}>Sign Up</button>
                        <button className={classNames(classes.AuthButtons, classes.LoginButton)}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;