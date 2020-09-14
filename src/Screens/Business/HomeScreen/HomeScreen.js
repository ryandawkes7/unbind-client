import React, {Component} from 'react';
import BusinessNavbar from "../../../Components/Navbar/BusinessNavbar";
import './homescreen.scss';
import BusinessMap from "../../../Components/BusinessComps/Map/businessMap";
import OrderCompletion from "../../../Components/BusinessComps/OrderCompletion/orderCompletion";
import BarChartTest from "../../../Components/ChartComponentTest/BarChartTest";

class HomeScreen extends Component {
    render () {
        return (
            <div>
                <BusinessNavbar/> {/* Business Navbar Section */}
                <div>
                    <div className="business-graph">{/* Statistical Review Section */}
                        <div className="business-title"> {/* Company Title Text */}
                            <h1>Company Name</h1>
                            <div/>
                        </div> {/* End of Company Title Text */}
                        <div> {/* Market Report Section */}
                            {/*<div className="chart-controls"> /!* Graph Controls Section *!/*/}
                            {/*    <button className="graph-btn revenue"> /!* Revenue Button *!/*/}
                            {/*        <header> /!* Button Header/Title Section *!/*/}
                            {/*            <h3>Revenue</h3>*/}
                            {/*        </header> /!* End of Button Header/Title Section *!/*/}
                            {/*        <div> /!* Button Body Section *!/*/}
                            {/*            <p>£50,000</p>*/}
                            {/*        </div> /!* End of Button Body Section *!/*/}
                            {/*    </button> /!* End of Revenue Button *!/*/}
                            {/*    <button className="graph-btn sales"> /!* Sales Button *!/*/}
                            {/*        <header> /!* Button Header/Title Section *!/*/}
                            {/*            <h3>Sales Made</h3>*/}
                            {/*        </header> /!* End of Button Header/Title Section *!/*/}
                            {/*        <div> /!* Button Body Section *!/*/}
                            {/*            <p>874</p>*/}
                            {/*        </div> /!* End of Button Body Section *!/*/}
                            {/*    </button> /!* End of Sales Button *!/*/}
                            {/*    <button className="graph-btn growth"> /!* Growth Button *!/*/}
                            {/*        <header> /!* Button Header/Title Section *!/*/}
                            {/*            <h3>Growth</h3>*/}
                            {/*        </header> /!* End of Button Header/Title Section *!/*/}
                            {/*        <div> /!* Button Body Section *!/*/}
                            {/*            <p>+2.0%</p>*/}
                            {/*        </div> /!* End of Button Body Section *!/*/}
                            {/*    </button> /!* End of Growth Button *!/*/}
                            {/*    <button className="graph-btn avg-order"> /!* Avg Order Button *!/*/}
                            {/*        <header> /!* Button Header/Title Section *!/*/}
                            {/*            <h3>Average Order</h3>*/}
                            {/*        </header> /!* End of Button Header/Title Section *!/*/}
                            {/*        <div> /!* Button Body Section *!/*/}
                            {/*            <p>£84.71</p>*/}
                            {/*        </div> /!* End of Button Body Section *!/*/}
                            {/*    </button> /!* End of Avg Order Button *!/*/}
                            {/*</div> /!* End of Graph Controls Section *!/*/}
                            <div className="chart-container"> {/* Primary Graph Section */}
                                <BarChartTest />
                            </div> {/* End of Primary Graph Section */}
                        </div> {/* End of Market Report Section */}
                    </div>{/* End of Statistical Review Section */}
                    <div className="business-map"> {/* Business Map Section */}
                        <OrderCompletion className="order-completion" /> {/* Order Completion Charts & Stat Section */}
                        <BusinessMap /> {/* World Map Component */}
                    </div> {/* End of Business Map Section */}
                </div>
            </div>
        );
    }
}

export default HomeScreen;
