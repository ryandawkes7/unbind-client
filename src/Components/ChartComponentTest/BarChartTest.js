// import React, {Component} from 'react';
// import axios from 'axios';
// import Chart from "./Chart";
// import './barChart.css';
//
// class BarChartTest extends Component {
//     // Constructs props based on state
//     constructor(props) {
//         super(props);
//         this.state = {
//             chartData: {
//                 labels:[],
//                 datasets:[{
//                     label: '',
//                     data: null,
//                     backgroundColor: ''
//                 }]
//             },
//         }
//     }
//
//     revenueCall(){
//         axios
//             .get(`api/business/revenue/2020`)
//             .then(response => {
//                 console.log(response) // Logs response as data tree
//                 const dataStat = response.data;
//
//                 this.setState({
//                     chartData:{
//                         labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//                         datasets: [
//                             {
//                                 label: 'Revenue',
//                                 data: dataStat,
//                                 backgroundColor: '#9D0000',
//                             }
//                         ]
//                     }
//                 }); // End of setState
//             })
//             .catch(error => this.setState({error, isLoading: false}));
//     }
//
//     // Post-render operation for the backend API call for data.
//     componentDidMount () {
//         this.revenueCall()
//     }
//
//     render () {
//         if(!this.state.chartData.datasets[0].data){return null}
//         else {
//             return (
//                 <div>
//                     {/*<h1>{ this.state.chartData.datasets[0].data[1] }</h1>*/}
//                     <Chart chartData={ this.state.chartData } />
//                 </div>
//             );
//         }
//     }
// }
//
// export default BarChartTest;

import React, {Component} from 'react';
import classes from'../Examples/DashboardChartTest/Dashboard/Dashboard.module.css';
import axios from 'axios';
import Chart from "./Chart";
import './barChart.css';
import ExampleChart from "./Chart";
import '../../Screens/Business/HomeScreen/homescreen.scss';
import {
    revenueYearData,
    salesMadeYearData,
    growthYearData,
    avgOrderYearData,
    yearLabels, quarterLabels,
} from "./MockData"

class BarChartTest extends Component {
    // Constructs props based on state
        state = {
            // chartData: {
            //     title: "",
            //     labels:[],
            //     datasets:[{
            //         label: "",
            //         data: null,
            //         backgroundColor: ''
            //     }]
            // },
            data: revenueYearData,
            title: "Revenue",
            labels: yearLabels,
            barColours: '#9D0000'
        }

    handleButtonClick = e => {
        const { value } = e.target;
        const isRevenue = value === "revenue";
        const isSales = value === "sales";
        const isGrowth = value === "growth";
        const isAvgOrder = value === "avgOrder";

        const isYear = value === "yearly";
        const isQuarter = value === "quarterly";

        // const newData =
        //     isYear ?
        //         isRevenue ? this.revenueCall()
        //         : isSales ? salesMadeYearData
        //         : isGrowth ? growthYearData
        //         : isAvgOrder ? avgOrderYearData
        //         : null
        //     : isQuarter ?
        //         isRevenue ? this.revenueCall()
        //         : isSales ? salesMadeQuarterData
        //         : isGrowth ? growthQuarterData
        //         : isAvgOrder ? avgOrderQuarterData
        //         : null
        //     :null

        const newData =
            isRevenue ? revenueYearData
            : isSales ? salesMadeYearData
            : isGrowth ? growthYearData
            : isAvgOrder ? avgOrderYearData
            : null;

        const newLabel = isYear ? yearLabels : isQuarter ? quarterLabels : null;
        const newColor = isRevenue ? "#9D0000" : isSales ? "#79E7F3" : isGrowth ? "#79F38C" : isAvgOrder ? "#A3A6A3" : null
        const newTitle = isRevenue ? "Revenue" : isSales ? "Sales" : isGrowth ? "Growth" : isAvgOrder ? "Average Order" : null;


        this.setState({
            data: newData,
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            title: newTitle,
            barColours: newColor
        })
    }

    revenueCall(){
        axios
            .get(`api/business/revenue/2020`)
            .then(response => {
                console.log(response) // Logs response as data tree
                const dataStat = response.data;

                this.setState({
                    chartData:{
                        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        datasets: [
                            {
                                label: 'Revenue',
                                data: dataStat,
                                backgroundColor: '#9D0000',
                            }
                        ]
                    }
                }); // End of setState
            })
            .catch(error => this.setState({error, isLoading: false}));
    }

    render () {
        const { title, data, labels, barColours } = this.state;

            return (
                <div className={classes.container}>
                    <div className={classes.buttonContainer}>
                        <div className="chart-controls"> {/* Graph Controls Section */}
                            <button
                                className="graph-btn revenue"
                                onClick={this.handleButtonClick}
                                value="revenue"
                            > {/* Revenue Button */}
                                Revenue
                            </button> {/* End of Revenue Button */}
                            <button
                                className="graph-btn sales"
                                onClick={this.handleButtonClick}
                                value="sales"
                            > {/* Sales Button */}
                                Sales Made
                            </button> {/* End of Sales Button */}
                            <button
                                className="graph-btn growth"
                                onClick={this.handleButtonClick}
                                value="growth"
                            > {/* Growth Button */}
                                Growth
                            </button> {/* End of Growth Button */}
                            <button
                                className="graph-btn avg-order"
                                onClick={this.handleButtonClick}
                                value="avgOrder"
                            > {/* Avg Order Button */}
                                Average Order
                            </button> {/* End of Avg Order Button */}
                        </div> {/* End of Graph Controls Section */}
                    </div>
                    <h3>{title}</h3>
                    <ExampleChart title={title} data={data} labels={labels} barColours={barColours}/>
                </div>
            );
    }
}

export default BarChartTest;
