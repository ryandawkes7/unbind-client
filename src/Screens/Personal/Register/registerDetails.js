import React, {Component} from 'react';
import './registerDetails.css';

import AccountInfo from "../../../Components/Register/accountInfo";

class RegisterDetails extends Component {
    render () {
        return (
            <div className="reg-details-container">
                <div className="account-information">
                    <h3>Account Information</h3>
                    <AccountInfo />

                </div>
            </div>
        );
    }
}

export default RegisterDetails;
