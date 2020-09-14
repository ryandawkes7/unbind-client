import React from "react";
import axios from 'axios';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';

export default class PersonalRegisterScreen extends React.Component {
    state = {
        userType: '',
        firstName: '',
        surname: '',
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
        const { firstName, surname, username, password, emailAddress } = this.state;
        axios({
            url: "/authentication/signup",
            method: "POST",
            data: {
                userType: window.localStorage.getItem('userType'),
                firstName,
                surname,
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

        const {firstName, surname, username, password, confirmPassword, emailAddress} = this.state
        return <div className="register-content">
            <div className="register-form-box">
                <div className="reg-title">
                    <div>
                        <h1 className="reg-unbind-title">PERSONAL</h1>
                        <div className="reg-title-divider" />
                    </div>
                </div>

                {/*Creates input form for username, password, remember me button and submit button*/}
                <form id="register" className="register-input-group" onSubmit={this.handleSubmit}>
                    <div className="reg-name-input">
                        <input className="name-input" type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} required/>
                        <input className="name-input" type="text" name="surname" placeholder="Surname" value={surname} onChange={this.handleChange} required/>
                    </div>
                    <input className="register-input" type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} required/>
                    <input className="register-input" type="email" name="emailAddress" placeholder="Email Address" value={emailAddress} onChange={this.handleChange} required/>
                    <input className="register-input" type="password" name="password" placeholder="Password..." value={password} onChange={this.handleChange} required/>
                    <input className="register-input" type="password" name="confirmPassword" placeholder="Confirm Password..." value={confirmPassword} onChange={this.handleChange} required/>
                    <div className="reg-check-box">
                        <input type="checkbox" className="check-input" />
                        <p>I agree with the T&Cs</p>
                    </div>
                </form>

                <div className="register-btns">
                    <Link
                        to="/account-type-register"
                          className="reg-back-btn"
                    >
                        <h3>Back</h3>
                    </Link>
                    <Link
                        to="/register-details"
                        className="reg-sign-up-btn"
                    >
                        <h3>Sign Up</h3>
                    </Link>
                </div>

                <div className="reg-login-redirect">
                    <Link to={'/login'}>Already Have An Account? Login Here</Link>
                </div>

            </div>
            <div className="reg-image">
                <img className="reg-image-section" src={require('../../../Images/register-coffee.png')} alt="" />
            </div>
        </div>
    };
}
