import React, {Component} from 'react';
import './orderCompletion.scss'
import DoughnutExample from '../../Examples/Donut/DonutDashboard';
import PieExample from '../../Examples/Pie/PieDashboard';

class OrderCompletion extends Component {

    render () {
        return (
            <div className="order-cmp-body">
                <div className="order-cmp-container">
                    <button className="order-cmp-btn rate"> {/* Revenue Button */}
                        <header> {/* Button Header/Title Section */}
                            <h4>Order Completion Rate</h4>
                        </header> {/* End of Button Header/Title Section */}
                        <div className="donut-rate">
                            <DoughnutExample />
                        </div>
                    </button> {/* End of Revenue Button */}
                    <button className="order-cmp-btn time"> {/* Revenue Button */}
                        <header> {/* Button Header/Title Section */}
                            <h4>Orders Complete On Time</h4>
                        </header> {/* End of Button Header/Title Section */}
                        <div className="pie-time"> {/* Button Body Section */}
                            <PieExample className="pie-time" />
                        </div> {/* End of Button Body Section */}
                    </button> {/* End of Revenue Button */}
                </div>
                <div className="stat-box"> {/* Stat Box */}
                    <div className="stat-grid-display"> {/* Grid Display Container */}
                        <div className="stat-area customers"> {/* Customers Stat */}
                            <img
                                src={require('./img/ionic-ios-people.png')}
                                style={{width: '56.54px', height: '36.74px',}}
                                alt=""
                            />
                            <h4> {/* Text Area */}
                                1,079 <br/>
                                Customers
                            </h4>
                        </div> {/* End of Customers Stat */}
                        <div className="stat-area orders"> {/* Customers Stat */}
                            <img
                                src={require('./img/ionic-shopping-bag.png')}
                                style={{width: '33.31px', height: '38.07px',}}
                                alt=""

                            />
                            <h4> {/* Text Area */}
                                985 <br/>
                                Orders
                            </h4>
                        </div> {/* End of Customers Stat */}
                        <div className="stat-area refunds"> {/* Customers Stat */}
                            <img
                                src={require('./img/ionic-settings-refresh.png')}
                                style={{width: '41.22px', height: '36.05px'}}
                                alt=""

                            />
                            <h4> {/* Text Area */}
                                172 <br/>
                                Refunds
                            </h4>
                        </div> {/* End of Customers Stat */}
                        <div className="stat-area reviews"> {/* Customers Stat */}
                            <img
                                src={require('./img/ionic-paragraphh.png')}
                                style={{width: '30.28px', height: '30.28px'}}
                                alt=""
                            />
                            <h4> {/* Text Area */}
                                336 <br/>
                                Reviews
                            </h4>
                        </div> {/* End of Customers Stat */}
                    </div>
                </div> {/* End of Stat Box */}
                <div className="date-box"> {/* Date Box */}
                    <img
                        src={require('./img/Icon metro-calendar.svg')}
                        style={{width: '32.31px', height: '34.46px'}}
                        alt=""
                    />
                    <h4>
                        From:
                        <select className="select-date from">
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        To:
                        <select className="select-date to">
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        <select className="select-date year">
                            <option>2019</option>
                            <option>2020</option>
                        </select>
                    </h4>
                </div> {/* End of Date Box */}
            </div>
        );
    }
}

export default OrderCompletion;
