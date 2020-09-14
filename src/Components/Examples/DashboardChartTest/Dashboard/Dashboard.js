import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraphTest from "../LineGraph/LineGraphTest";
import axios from 'axios';
import {
    managerYearData,
    nationalAverageYearData,
    yearLabels,
    managerQuarterData,
    nationalAverageQuarterData,
    quarterLabels,
    managerMonthData,
    managerWeekData,
    monthLabels,
    weekLabels,
    nationalAverageMonthData,
    nationalAverageWeekData,
} from "../MockData/MockData";

export default class Dashboard extends Component {
    // Initial state upon loading page. Data called from 'MockData.js'
    state = {
        // data: managerYearData,
        data: [],
        average: nationalAverageYearData,
        labels: yearLabels
    }

    componentDidMount() {
        axios({
            url: 'api/business/revenue/annual',
            method: 'GET'
        })
        .then((response) => {
            console.log(response.data)
            this.setState({ data: response.data })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    // Function for when a filter button is pressed
    handleButtonClick = e => {
        
        const { value } = e.target; // Variable for storing event target
        const isAnnual = value === "annual"; // Variable where the event target (i.e. the time scale) is initially set to equal 'annual'
        const isQuarter = value === "quarter";
        const isMonth = value === "month";
        const isWeek = value === "week";

        // Target's value (annual, quarter, month, week)
        const getData = async () => {
            try {
                return await axios.get(`api/business/revenue/${value}`)//
            } catch (error) {
                console.log(error)
            }
        }
        getData()
            .then(response => {
                console.log(response.data)
                // Variables for updating (and passing) quarterly data
                // If data has a value of annual, it passes the year data. If not, it passes quarter data etc.
                // const newData = isAnnual ? managerYearData : isQuarter ? managerQuarterData: isMonth ? managerMonthData : isWeek ? managerWeekData : null;
                const newLabels = isAnnual ? yearLabels : isQuarter ? quarterLabels: isMonth ? monthLabels : isWeek ? weekLabels : null;
                const newAverage = isAnnual ? nationalAverageYearData : isQuarter ? nationalAverageQuarterData : isMonth ? nationalAverageMonthData : isWeek ? nationalAverageWeekData : null;
                // const newData = getData()
                // Parameter that, once called, passes in the new data
                this.setState({
                    data: response.data,
                    average: newAverage,
                    labels: newLabels
                })
            })
    }

    render() {
        const { data, average, labels } = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.buttonContainer}>
                    <h6>Product Sales</h6>
                    <select onChange={this.handleButtonClick}>
                        <option value="annual">Year</option>
                        <option value="quarter">Quarter</option>
                        <option value="month">Month</option>
                        <option value="week">Week</option>
                    </select>
                </div>
                <LineGraphTest data={data} average={average} labels={labels} />
            </div>
        )
    }
}
