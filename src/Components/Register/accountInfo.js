import React, { Component } from "react";
import './accountInfo.css';

export default class AccountInfo extends Component {
    render(){
        return(
            <div className="info-container"> {/* Account Info Container Section */}
                <form>
                    {/* Username Section */}
                    <div className="info-comp username">
                        <label for="username-input">
                            Username:
                        </label>
                        <input
                            type="text"
                            placeholder="Enter a username..."
                            id="username-input"
                        />
                    </div>
                    {/* Username Section */}

                    {/* Country Section */}
                    <div className="info-comp country">
                        <label for="country-input">
                            Country:
                        </label>
                        <select
                            id="country-input"
                        >
                            <option>United Kingdom</option>
                        </select>
                    </div>
                    {/* End of Country Section */}

                    {/* Short Description Section */}
                    <div className="info-comp about">
                        <label for="description-input">
                            About You:
                        </label>
                        <textarea
                            id="description-input"
                            placeholder="Enter a short description here..."
                        >
                                            </textarea>
                    </div>
                    {/* End of Short Description Section */}

                    {/* Contact Number Section */}
                    <div className="info-comp contact-number">
                        <label for="number-input">
                            Contact Number:
                        </label>
                        <input
                            type="tel"
                            pattern="[0-9]{11}"
                            id="number-input"
                            placeholder="Enter contact number..."
                        >
                        </input>
                    </div>
                    {/* End of Contact Number Section */}
                </form>
            </div> //End of Account Info Container Section
        )
    }
}
