import React from "react";
import axios from 'axios';
import { Redirect } from 'react-router';

import './register.css';

export default class RegisterScreen extends React.Component {
    state = {
            userType: '',
            companyName: '',
            username: '',
            password: '',
            confirmPassword: '',
            emailAddress: '',
            // country: '',
            // shortDescription: '',
            // contact: '',
            // securityQuestion: '',
            // securityAnswer:  ''
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { companyName, username, password, emailAddress } = this.state;
        axios({
            url: "/authentication/signup",
            method: "POST",
            data: {
                userType: window.localStorage.getItem('userType'),
                companyName,
                username,
                password,
                emailAddress
            }
        })
        .then(response => {
            this.props.history.push('/login');
        })
        .catch(error => {
            this.setState({
                errorMessage: error.response.data.message
            });
        });
    };
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        // If the user has logged in, prevent access to the register page.
        const isAuthenticated = window.localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {
            return <Redirect to = '/' />
        }

        const {companyName, username, password, confirmPassword, emailAddress} = this.state
        return <div className="register-content">
            <div className="register-form-box">
                <h1 className="unbind-title">BUSINESS</h1>

                {/*Creates input form for username, password, remember me button and submit button*/}
                <form id="register" className="register-input-group" onSubmit={this.handleSubmit}>
                    <input className="login-input" type="text" name="companyName" placeholder="Company Name" value={companyName} onChange={this.handleChange} required/>
                    <input className="login-input" type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} required/>
                    <input className="login-input" type="email" name="emailAddress" placeholder="Email Address" value={emailAddress} onChange={this.handleChange} required/>
                    <input className="login-input" type="password" name="password" placeholder="Password..." value={password} onChange={this.handleChange} required/>
                    <input className="login-input" type="password" name="confirmPassword" placeholder="Confirm Password..." value={confirmPassword} onChange={this.handleChange} required/>

                    <input type="checkbox" className="check-box" /> <span>I agree with the T&Cs</span>

                    <button type="submit" className="submit-btn">REGISTER</button>
                </form>
            </div>
                <img src={require('../../../Images/register-coffee.png')} alt="" className="register-image-pnl" />
        </div>
    };
}
