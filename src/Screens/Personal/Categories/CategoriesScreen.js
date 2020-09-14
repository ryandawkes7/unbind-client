import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './categories.css';

class CategoriesScreen extends Component {
    render () {
        return (
            <div className="ctg-container">
                {/* Header Section */}
                <div className="ctg-header">
                        <h1>
                            CATEGORIES
                        </h1>
                        <img
                            className="ctg-header-backdrop"
                            src={require('../../../Images/ctgrs-hdr.png')}
                            alt="header"
                        />
                </div>
                {/* End of Header Section */}

                {/* Category Grid Section */}
                <div className="ctg-grid">

                    <Link to='#' className="ctg-btn accounting">
                        <div>
                            <h3>ACCOUNTING & FINANCE</h3>
                        </div>
                        <img src={require('./assets/a&f-img.png')} alt="accounting & finance"/>
                    </Link>

                    <Link to='#' className="ctg-btn pets">
                        <div>
                            <h3>PETS & ANIMALS</h3>
                        </div>
                        <img src={require('./assets/pets.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Art & Design</h3>
                        </div>
                        <img src={require('./assets/a&d-img.png')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Events</h3>
                        </div>
                        <img src={require('./assets/events.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Management</h3>
                        </div>
                            <img src={require('./assets/management.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Education</h3>
                        </div>
                        <img src={require('./assets/education.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Restaurant & Hospitality</h3>
                        </div>
                        <img src={require('./assets/hospitality.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Computer & Data</h3>
                        </div>
                        <img src={require('./assets/computing.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Legal</h3>
                        </div>
                        <img src={require('./assets/legal.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Manufacturing</h3>
                        </div>
                        <img src={require('./assets/manufacturing.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Healthcare</h3>
                        </div>
                        <img src={require('./assets/healthcare.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Community & Social Services</h3>
                        </div>
                        <img src={require('./assets/social.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Retail & Sales</h3>
                        </div>
                        <img src={require('./assets/retail.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Entertainment</h3>
                        </div>
                        <img src={require('./assets/entertainment.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Transportation</h3>
                        </div>
                        <img src={require('./assets/transportation.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Media & Communication</h3>
                        </div>
                        <img src={require('./assets/media.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Business Operations</h3>
                        </div>
                        <img src={require('./assets/business.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Installation, Maintenance & Repairs</h3>
                        </div>
                        <img src={require('./assets/maintenance.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Protection Services</h3>
                        </div>
                        <img src={require('./assets/protection.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Construction & Mining</h3>
                        </div>
                        <img src={require('./assets/construction.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Personal Care</h3>
                        </div>
                        <img src={require('./assets/care.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Farming & Gardening</h3>
                        </div>
                        <img src={require('./assets/farming.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Cleaning & Facilities</h3>
                        </div>
                        <img src={require('./assets/cleaning.svg')} alt=""/>
                    </Link>

                    <Link to='#' className="ctg-btn art">
                        <div>
                            <h3>Others</h3>
                        </div>
                        <img src={require('./assets/others.svg')} alt=""/>
                    </Link>

                </div>
                {/* End of Category Grid Section */}

            </div>
        );
    }
}

export default CategoriesScreen;
