import React from "react";
import axios from "axios";
import './order.css';

class OrderScreen extends React.Component {

    state = {
        orders: []
    }

    componentDidMount() {
        axios({
            url: "/api/orders",
            method: "GET"
        })
        .then(response => {
            console.log(response.data)
            this.setState({ orders: response.data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const orders = this.state.orders.map((order) =>
            <div className="order-box">
                {/*Box Header*/}
                <header className="o-box-header">
                    <div className="o-item-id">
                        Order ID: <div className="o-id-number">{order._id}</div>
                    </div>
                    <div className="o-status-level">
                        {order.orderStatus}
                    </div>
                </header>
                {/*Service Name & Details Section*/}
                <div className="o-service-name">
                    <div><h4>{order.service.serviceName}</h4></div>
                    <div><p>{order.service.serviceDescription}</p></div>
                </div>
                {/*Company Image & Name Section*/}
                <div className="o-company">
                    <img src="" alt=""/>
                    <div><p>{order.company.companyName}</p></div>
                </div>
                {/*Order Details Section*/}
                <div className="o-status">
                    <div className="o-required">
                        <div><p>Require by</p></div>
                        <div><h4>{order.requiredBy}</h4></div>
                    </div>
                    <div className="o-status-display">
                        <h4>Order Status</h4>
                        <p>{order.orderStatus}</p>
                        <div className="o-status-boxes">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        )

        return(
            <div>
                {/*Header components*/}
                <div className="order-headers">
                    <div className="o-head-title">
                        <h3>Your Orders</h3>
                    </div>
                    <div className="o-header-btns">
                        <h4>All</h4>
                        <h4>In Progress</h4>
                        <h4>Completed</h4>
                    </div>
                </div>

                {/*Order Box Container*/}
                <div className="order-box-container">
                    {orders}
                </div>
            </div>

        )
    }
}

export default OrderScreen;
