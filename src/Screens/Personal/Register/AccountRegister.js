import React from "react";
import {Link} from "react-router-dom";

import './personalreg.css';

class AccountRegister extends React.Component {

    render() {

        return <div className="account-reg-content">
            <div className="account-reg-form-box">
                <div className="account-reg-title">
                    <div>
                        <h1 className="account-unbind-title">UNBIND</h1>
                        <div className="account-reg-divider" />
                    </div>
                </div>

                <div className="account-reg-subtitle">
                    <div>Looking For A Service Or Providing Your Own?</div>
                    <div>Choose Your Account</div>
                </div>

                <div className="account-type-btns">
                    <Link to="/personal-register">
                        <button className="personal-btn" onClick={this.personal}>Personal Account</button>
                    </Link>
                    <Link to="/business-register">
                        <button className="account-reg-business-btn" onClick={this.business}>Business Account</button>
                    </Link>
                </div>

                <div className="account-reg-login-redirect">
                    <Link to="/login">
                        <p>Already Have An Account? Login Here</p>
                    </Link>
                </div>

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
    }

    /* Set 'userType' to value 'personal' in the browser's localStorage */
    personal() {
        window.localStorage.setItem('userType', 'personal');
    }

    /* Set 'userType' to value 'business' in the browser's localStorage */
    business() {
        window.localStorage.setItem('userType', 'business');
    }
}

export default AccountRegister;
