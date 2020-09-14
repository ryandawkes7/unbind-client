import React, { Component } from 'react';
import './barChart.css';
import Dashboard from "../DashboardChartTest/Dashboard/Dashboard";

class BarChart extends Component {

    //Builds chart from current chart data
    constructor(props){
        super(props);
        this.state = {
            chartData:{},
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        // this.setState({value: event.target.value});
        console.log(event.target.value);
        event.preventDefault(); // Prevents full page refresh
    }

    componentWillMount(){
    }

    // Data for the revenue chart
    // getRevenueData(year) {
    //     axios({
    //         url: `api/business/revenue/${ year }`,
    //         method: 'GET'
    //     })
    //         .then(res => {
    //             //***
    //             this.setState({
    //                 bananas: 'green',
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //
    //     // this.setState({
    //     //     revenueData: {
    //     //         dailyChart: {
    //     //             name: 'Daily',
    //     //             id: '1',
    //     //             labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    //     //             datasets: [
    //     //                 {
    //     //                     label: 'Daily Revenue',
    //     //                     data: [
    //     //                         40,
    //     //                         120,
    //     //                         390,
    //     //                         240,
    //     //                         180,
    //     //                         290,
    //     //                         10
    //     //                     ],
    //     //                     backgroundColor: '#9D0000'
    //     //                 }
    //     //             ]
    //     //         },
    //     //         weeklyChart: {
    //     //             name: 'Weekly',
    //     //             id: '2',
    //     //             labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    //     //             datasets: [
    //     //                 {
    //     //                     label: 'Weekly Revenue',
    //     //                     data: [
    //     //                         500,
    //     //                         3400,
    //     //                         2400,
    //     //                         1900
    //     //                     ],
    //     //                     backgroundColor: '#9D0000'
    //     //                 }
    //     //             ]
    //     //         },
    //     //         monthlyChart: {
    //     //             name: 'Monthly',
    //     //             id: '3',
    //     //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    //     //             datasets: [
    //     //                 {
    //     //                     label: 'Monthly Revenue',
    //     //                     data: [
    //     //                         8000,
    //     //                         3000,
    //     //                         5000,
    //     //                         -2000,
    //     //                         5000,
    //     //                         8000,
    //     //                         2000,
    //     //                         -9000,
    //     //                         9000,
    //     //                         -3000,
    //     //                         9000,
    //     //                         9000
    //     //                     ],
    //     //                     backgroundColor: '#9D0000'
    //     //                 }
    //     //             ]
    //     //         },
    //     //         yearlyChart: {
    //     //             name: 'Yearly',
    //     //             id: '4',
    //     //             labels: ['2017', '2018', '2019', '2020'],
    //     //             datasets: [
    //     //                 {
    //     //                     label: 'Yearly Revenue',
    //     //                     data: [
    //     //                         33000,
    //     //                         45000,
    //     //                         29000,
    //     //                         81000,
    //     //                         103000
    //     //                     ],
    //     //                     backgroundColor: '#9D0000'
    //     //                 }
    //     //             ]
    //     //         },
    //     //     }
    //     //
    //     // });
    // }

    render() {
        return(
            <div>
                <Dashboard />
            </div>
        )
    }
}

export default BarChart;
