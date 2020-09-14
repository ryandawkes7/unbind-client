import React from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

import './login.css';

export default class LoginScreen extends React.Component {
    state = {
        username: '',
        password: '',
        errorMessage: ''
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        axios({
            url: "/authentication/signin",
            method: "POST",
            data: {
                username,
                password
            }
        })
        .then(response => {
            const isAuthenticated = response.data.isAuthenticated;
            window.localStorage.setItem('isAuthenticated', isAuthenticated);
            this.props.history.push('/');
            window.location.reload(false);
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
        // If the user has logged in, prevent access to the login page.
        const isAuthenticated = window.localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {
            return <Redirect to = '/' />
        }

        return(
            <div className="login-content">
                <div className="login-form-box">

                    <div className="login-title">
                        <h1 className="login-unbind-title">LOGIN</h1>
                        <div className="login-divider"/>
                    </div>

                    <div className="login-subtitle">
                        <p>Welcome Back! Please Login To Your Account</p>
                    </div>

                    <form onSubmit={this.handleSubmit} className="login-input-group">
                        <input className="login-input" type="text" name="username" placeholder="Username..." onChange={this.handleChange} required/>
                        <input className="login-input" type="password" name="password" placeholder="Password..." onChange={this.handleChange} required/>

                        <div className="login-interactions">
                            <div className="login-remember">
                                <input type="checkbox" className="check-box" />
                                <p>Remember Me</p>
                            </div>
                            <div className="login-forgot-pass">
                                <Link to="#">Forgot Password</Link>
                            </div>
                        </div>

                        <div className="login-btns">
                            <button className="login-back-btn">Back</button>
                            <button className="login-continue-btn">Login</button>
                        </div>
                    </form>
                    {/*<p>{this.state.errorMessage}</p>*/}

                    <div className="account-reg-admin">
                        <Link to="/terms-of-use">
                            <div>Terms of Use</div>
                        </Link>
                        <Link to="/privacy">
                            <div>Privacy Policy</div>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}
