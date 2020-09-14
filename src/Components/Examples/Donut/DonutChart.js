import React, {Component} from 'react';
import Chart from "chart.js";

let myDonutChart;

export class DonutChart extends Component {

    chartRef = React.createRef();

    componentDidMount () {
        this.buildChart();
    }

    componentDidUpdate () {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");

        const { data, average, labels } = this.props;
        if(typeof myDonutChart !== "undefined") myDonutChart.destroy();

        myDonutChart = new Chart(myChartRef, {
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [{
                    label: "Rate",
                    data: data,
                    fill: 'lightgray',
                    backgroundColor: 'lightgray',
                    borderColor: 'lightgray'
                }]
            },
            options: {}
        });
    }

    render () {
        return (
            <div className="donut-container">
                <canvas id="myDonutChart" ref={this.chartRef}/>
            </div>
        );
    }
}

export default DonutChart;
