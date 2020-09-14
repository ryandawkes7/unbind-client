import React, {Component} from "react";
import {Link} from "react-router-dom";
import './businessNavbar.css';

class BusinessNavbar extends Component{
    render(){
        return(
            <div>
            {/* Business navbar header */}
                <header className="business-hdr">
                    <div>
                        <Link to="/bsn/products" className="business-hdr-link">Products</Link>
                    </div>
                    <div>
                        <Link to="/business/customer-orders" className="business-hdr-link">Customer Orders</Link>
                    </div>
                    <div>
                        <Link to="/business/reviews" className="business-hdr-link">Testimonials & Reviews</Link>
                    </div>
                    <div>
                        <Link to="/business/profile" className="business-hdr-link">Profile</Link>
                    </div>
                    <div>
                        <Link to="/business/help-center" className="business-hdr-link">Help Center</Link>
                    </div>
                    <div>
                        <Link to="/business/settings" className="business-hdr-link">Settings</Link>
                    </div>
                </header>
            {/* End of business navbar header */}
            </div>
        );
    }
}

export default BusinessNavbar;
