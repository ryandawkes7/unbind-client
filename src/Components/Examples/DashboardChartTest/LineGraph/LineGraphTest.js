import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--ChartEx Style Options--//
// Font Style
Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif"
// Hides Legend
Chart.defaults.global.legend.display = false;
//--ChartEx Style Options--//

export default class LineGraphTest extends Component {
    // Allow access to DOM nodes/React elements in Render() method
    chartRef = React.createRef();

    // Builds and mounts chart based on the current state
    componentDidMount() {
        this.buildChart();
    }

    // Updates chart based on new data passed in - specifically for changing filters.
    componentDidUpdate() {
        this.buildChart();
    }


    buildChart = () => { // Function for building chart
        const myChartRef = this.chartRef.current.getContext("2d"); // Variable for chart to be drawn on a 2D canvas

        // Pull data from 'MockData.js'
        // 'data' = 'managerData' | 'average' = 'nationalAverageData' | 'labels' = 'yearLabels'
        const { data, average, labels } = this.props;
        if (typeof myLineChart !== "undefined") myLineChart.destroy(); // Check if chart was previously built - if so, destroy chart


        myLineChart = new Chart(myChartRef, { // Create new chart based on myChartRef (canvas drawing)
            type: "line", // Create line chart
            data: {
                //Bring in data
                labels: labels, // Pulls labels from MockData.js
                datasets: [
                    {
                        // Information displayed when user hovers over points
                        label: "Sales", // Title
                        data: data, // Data pulled from MockData.js ('managerData')
                        fill: false, // No fill
                        borderColor: "#9D0000" // Set border colour
                    },
                    {
                        // Repeat with new information
                        label: "National Average",
                        data: average,
                        fill: false,
                        borderColor: "#E0E0E0"
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });

    }

    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
