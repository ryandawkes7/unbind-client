import React from "react"
import axios from "axios"
import './basket.css';

class BasketScreen extends React.Component {
    state = {
        basket: []
    }

    componentDidMount() {
        axios({
            url: "/api/basket",
            method: "GET"
        })
        .then(response => {
            console.log(response.data)
            this.setState({ basket: response.data.services })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const services = this.state.basket.map((service) =>
            <div className="reg-box-container">
                {/*Service Name & Details Section*/}
                <div className="r-company-name">
                    <div><h4>{service.serviceName}</h4></div>
                </div>
                <div className="r-basket-container">
                    <div className="r-basket-img">
                        <img src={require('../../../Images/basket-icon.png')} alt=""/>
                    </div>
                    <div className="r-basket-details">
                        <div><h4>Service Name</h4></div>
                        <div><p>{service.serviceDescription}</p></div>
                    </div>
                    <div className="r-basket-buttons">
                        <div>
                            <button className="r-basket-edit-btn">Edit</button>
                        </div>
                        <div>
                            <button className="r-basket-remove-btn">Remove</button>
                        </div>
                    </div>
                    <div className="r-basket-item-price">
                        <div>£123</div>
                    </div>
                </div>
            </div>
        )

        return(
            <div className="shop-cart-box">
                <header className="r-box-header">
                    <div className="o-item-id">
                        Your Basket
                    </div>
                </header>
                {/*Box Header*/}
                {services}
            </div>
        )
    }
}

export default BasketScreen
