import React, {Component} from 'react';
import Chart from "chart.js";

let myPieChart;

export class PieChart extends Component {

    chartRef = React.createRef();

    componentDidMount () {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");

        const { data } = this.props;
        if(typeof myPieChart !== "undefined") myPieChart.destroy();

        myPieChart = new Chart(myChartRef, {
            type: "pie",
            data: {
                datasets: [{
                    label: "Time",
                    data: data,
                    fill: false,
                    borderColor: 'lightblue'
                }]
            },
            options: {}
        });
    }

    render () {
        return (
            <div className="pie-container">
                <canvas id="myPieChart" ref={this.chartRef}/>
            </div>
        );
    }
}

export default PieChart;
