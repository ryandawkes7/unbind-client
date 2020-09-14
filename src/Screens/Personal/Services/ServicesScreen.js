import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './services.css';

class ServicesScreen extends React.Component {

    state = {
        services: []
    }

    // Filter services by category.
    CategoryFilter(category) {
        axios({
            url: "/api/services/category",
            method: "POST",
            data: {
                category: category
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({ services: response.data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    // Filter services by area.
    AreaFilter(area) {
        axios({
            url: "/api/services/area",
            method: "POST",
            data: {
                area: area
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({ services: response.data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    // Filter services by price.
    PriceFilter(range) {
        axios({
            url: "api/services/price",
            method: "POST",
            data: {
                range: range
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({ services: response.data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    // Take the current services in 'state' and filter by the total orders for that service.
    PopularFilter(services) {
        axios({
            url: "/api/services/popularity",
            method: "POST",
            data: {
                services: services
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({ services: response.data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    // Take the current services in 'state' and filter by most recent service.
    MostRecentFilter(services) {
        axios({
            url: "/api/services/mostrecent",
            method: "POST",
            data: {
                services: services
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({ services: response.data })
        })
    }

    TopRatedFilter(services) {
        axios({
            url: "/api/services/toprated",
            method: "POST",
            data: {
                services: services
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({ services: response.data })
        })
    }

    render () {
        const services = this.state.services.map((service) =>
            <div className="serv-box-cont">
                <header className="serv-box-header">
                    <img src={require('../../../Images/serv-box-img.png')} alt=""/>
                </header>
                <div className="serv-box-details">
                    <div className="serv-box-title">
                        <h2>{service.company.companyName} <div className="serv-box-divider"/></h2>
                        <div className="serv-rating">
                            <p>[{service.serviceRating} out of 5]</p>
                            <p>[(100 Rtngs)]</p>
                        </div>
                    </div>
                    <div className="serv-box-desc">{service.serviceDescription}</div>
                    <div className="serv-box-price">
                        <div className="serv-box-company">
                            <img src={require('../../../Images/serv-box-company.png')} alt=""/>
                            <p>Cleaning Services Ltd</p>
                        </div>
                        <div className="serv-box-pricing">
                            <p>From:</p>
                            <div className="serv-box-price-cont">£{service.serviceCost}</div>
                        </div>
                    </div>
                </div>
            </div>
        )

        return (
            <div>
                <div className="services-back">
                    <div className="services-back-img">
                        <img src={require('./assets/services-backdrop.png')} alt="" />
                    </div>

                    <div className="services-title-section">
                        <div className="services-title-grid">
                            {/* Title Area */}
                            <div className="services-title-text">
                                <h1>Find The Perfect Business</h1>
                                <h1>For Your Business</h1>
                            </div>
                            {/* Search Bar */}
                            <div className="services-search-bar">
                                <input type="text" className="serv-search-input" placeholder="Type In Some Keywords..." />
                                <button className="serv-search-btn">§</button>
                            </div>
                            {/* Filters Area*/}
                            <div className="serv-filter-options">

                                {/* Category Dropdown*/}
                                <div className="serv-category-drop">
                                    <button className="serv-drop-btn">Category</button>
                                    <div className="serv-ctg-content">
                                        <a href="/" onClick={ () => this.CategoryFilter('Cleaning') }>Cleaning</a>
                                        <div className="serv-drop-divider"/>
                                        <a href="/" onClick={ () => this.CategoryFilter('Mechanic') }>Mechanical</a>
                                        <div className="serv-drop-divider"/>
                                        <a href="/">Category 3</a>
                                    </div>
                                </div>

                                {/* Area Dropdown */}
                                <div className="serv-area-drop">
                                    <button className="serv-drop-btn">Area</button>
                                    <div className="serv-area-content">
                                        <a href="/" onClick={ () => this.AreaFilter('Bristol') }>Bristol</a>
                                        <div className="serv-drop-divider"/>
                                        <a href="/" onClick={ () => this.AreaFilter('Cardiff') }>Cardiff</a>
                                        <div className="serv-drop-divider"/>
                                        <a href="/">Area 3</a>
                                    </div>
                                </div>

                                {/* Price Dropdown */}
                                <div className="serv-price-drop">
                                    <button className="serv-drop-btn">Price</button>
                                    <div className="serv-price-content">
                                        <a href="/" onClick={ () => this.PriceFilter('low') }>Low-end</a>
                                        <div className="serv-drop-divider"/>
                                        <a href="/" onClick={ () => this.PriceFilter('med') }>Medium</a>
                                        <div className="serv-drop-divider"/>
                                        <a href="/" onClick={ () => this.PriceFilter('high') }>High-end</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="services-main">
                        <header className="m-serv-header">
                            <div className="serv-type-btns">
                                <Link to="/" className="serv-popular-btn" onClick={ () => this.PopularFilter(this.state.services) }>MOST POPULAR</Link>
                                <Link to="/" className="serv-recent-btn" onClick={ () => this.MostRecentFilter(this.state.services) }>MOST RECENT</Link>
                                <Link to="/" className="serv-top-btn" onClick={ () => this.TopRatedFilter(this.state.services) }>TOP RATED</Link>
                            </div>
                            <div className="serv-sort-btn">
                                <p>Sorted By:</p>
                                <div className="serv-sort-drop">
                                    <button className="serv-sort-drop-btn">Default</button>
                                    <div className="serv-sort-content">
                                        <a href="/">Sort 1</a>
                                        <div className="serv-drop-divider"/>
                                        <a href="/">Sort 2</a>
                                        <div className="serv-drop-divider"/>
                                        <a href="/">Sort 3</a>
                                    </div>
                                </div>
                            </div>

                        </header>

                        {/* Service Box Container */}
                        <div className="services-grid-layout">
                            {services}
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default ServicesScreen;
