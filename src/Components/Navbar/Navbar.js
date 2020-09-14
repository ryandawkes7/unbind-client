import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import './navbar.css';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        // Alter the navigation depending on whether the user has logged in or not.
        const isAuthenticated = window.localStorage.getItem('isAuthenticated');

        this.state = {
            isLoggedIn: isAuthenticated
        };
    }

    state = {
        username: ''
    }

    // TODO: Remove?
    /* To populate 'state.username', use the 'componentDidMount' lifecycle method */
    componentDidMount() {
        /* This api call gets the users details once they have logged in */
        axios({
            url: "/authentication/userdetails",
            method: "POST"
        })
        .then(response => {
            console.log(response)
            this.setState({ username: response.data.username })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <header className="header">
                <div className="brand">
                    <Link to="/" >
                        <h1>UNBIND</h1>
                    </Link>
                </div>

                <div className="header-links">
                    <nav>
                        <ul>
                            {/*
                                If the user is signed in, display the basket button,
                                otherwise display both the login and register buttons.
                            */}
                            <div className="account-display">

                                {
                                    this.state.isLoggedIn && <li className="nav-home-btn">
                                        <div className="nav-button home-btn">
                                            <Link to="/">
                                                <p>Home</p>
                                            </Link>
                                        </div>
                                    </li>
                                }
                                {
                                    this.state.isLoggedIn && <li className="services-btn">
                                        <div className="nav-button services-drop">
                                            <div className="serv-btn-container">
                                                <Link to="/services">
                                                    <p>Services</p>
                                                </Link>
                                            </div>


                                            <div className="services-content">
                                                <Link to="/categories">Categories</Link>
                                                <hr />
                                                <Link to="/bookmarks">Bookmarks</Link>
                                            </div>
                                        </div>
                                    </li>
                                }
                                {
                                    this.state.isLoggedIn && <li className="nav-orders-btn">
                                        <div className="nav-button orders-btn">
                                            <Link to="/orders">
                                                <p>Orders</p>
                                            </Link>
                                        </div>
                                    </li>
                                }
                                {
                                    this.state.isLoggedIn && <li className="lin-divider">
                                        <div />
                                    </li>
                                }
                                <div className="nav-icon-images">
                                    {
                                        this.state.isLoggedIn && <li className="messages-btn">
                                            <div className="nav-icon msg-btn">
                                                <Link to="/messenger">
                                                    <img src={require('../../Images/message.png')} alt=""/>
                                                </Link>
                                            </div>
                                        </li>
                                    }
                                    {
                                        this.state.isLoggedIn && <li className="notification-btn">
                                            <div className="nav-icon notif-btn">
                                                <Link to="/notifications">
                                                    <img src={require('../../Images/bell.png')} alt=""/>
                                                </Link>
                                            </div>
                                        </li>
                                    }
                                    {
                                        this.state.isLoggedIn && <li className="basket-btn">
                                            <div className="nav-icon basket-btn">
                                                <Link to="/basket">
                                                    <img src={require('../../Images/basket.png')} alt=""/>
                                                </Link>
                                            </div>
                                        </li>
                                    }
                                </div>
                                {
                                    this.state.isLoggedIn && <li className="welcome-btn">
                                        <div className="profile-drop"> {/* Profile Drop Container */}
                                            <div className="prof-btn-container">
                                                <button className="prof-btn">
                                                    <h4>Welcome {this.state.username}</h4>
                                                    <img src={require('./assets/profile-placeholder.svg')} alt="" />
                                                </button>
                                            </div>

                                            <div className="prof-drop-content">
                                                <Link to="/">My Profile</Link>
                                                <hr/>
                                                <Link to="/">Help Center</Link>
                                                <hr/>
                                                <Link to="/">Settings</Link>
                                                <hr/>
                                                <Link to="/" onClick={logout}>Logout</Link>
                                            </div>
                                        </div>
                                    </li>
                                }
                            </div>

                            {/* If user is not logged in... */}
                            <div className="no-account-display">
                                {
                                    !this.state.isLoggedIn && <li className="about-btn">
                                        <a className="smoothscroll" href="#intro-info-pnls">
                                            <p>About</p>
                                        </a>
                                    </li>
                                }
                                {
                                    !this.state.isLoggedIn && <li className="services-btn">
                                        <Link to="/services">
                                            <p>Services</p>
                                        </Link>
                                    </li>
                                }
                                {
                                    !this.state.isLoggedIn && <li className="business-btn">
                                        <Link to="/business">
                                                <p>Business</p>
                                        </Link>
                                    </li>
                                }
                                {
                                    !this.state.isLoggedIn && <li className="login-btn">
                                        <Link to="/login" >
                                            <div className="no-acc-divider">
                                            </div>
                                        </Link>
                                    </li>
                                }
                                {
                                    !this.state.isLoggedIn && <li className="login-btn">
                                        <Link to="/login" >
                                            <div className="login-btn-back">
                                                <p>Login</p>
                                            </div>
                                        </Link>
                                    </li>
                                }
                                {
                                    !this.state.isLoggedIn && <li className="register-btn">
                                        <Link to="/account-type-register">
                                            <div className="register-btn-back">
                                                <p>Sign Up</p>
                                            </div>
                                        </Link>
                                    </li>
                                }
                            </div>

                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

/* Calls the logout function from the back-end, removing the localStorage and Cookies */
function logout() {
    axios({
        url: "/authentication/logout",
        method: "POST"
    })
    .then(res => {
        localStorage.clear()
        window.location.reload(false);
    })
    .catch(error => {
        console.log(error)
    })
}

export default Navbar;
