import React, { Component } from 'react';
import classes from './Signup.module.scss';
import classNames from 'classnames';

class signup extends Component {
    constructor(props){
        super(props);
    }
    handleChange( e ){
        this.setState({ [e.target.name]: e.target.value});
    }
    render(){
        let openClasses = "";
        this.props.open ? 
            openClasses = classNames(classes.SignupModal, classes.Open):
            openClasses = classNames(classes.SignupModal, classes.Close)

        return(
            <div className={openClasses}>
                <div className={classes.SignupFormContainer}>
                    <button className={classes.BackButton} onClick={this.props.handleSwitch}>Back to Login</button><p>Sign Up</p>
                    <input 
                        className={classNames(classes.Inputs, classes.EmailInput)} 
                        type="email" 
                        placeholder="Email" 
                        onChange={this.handleChange} 
                        required={true} 
                        name="email"></input>
                    <input 
                        className={classNames(classes.Inputs, classes.PasswordInput)} 
                        type="password" 
                        placeholder="Password" 
                        onChange={this.handleChange} 
                        required={true} 
                        name="password"></input>
                    <input 
                        className={classNames(classes.Inputs, classes.PasswordInput)} 
                        type="password" 
                        placeholder="Confirm Password" 
                        onChange={this.handleChange} 
                        required={true} 
                        name="password"></input>
                    <button className={classes.SignupButton}>Sign Up</button>
                </div>
            </div>
        );
    }
}

export default signup;