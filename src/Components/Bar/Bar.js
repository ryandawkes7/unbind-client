import React, {Component} from 'react';
import Chart from "react-google-charts";

let myBarChart;

export class Bar extends Component {

    chartRef = React.createRef();

    componentDidMount () {
        this.buildChart();
    }

    componentDidUpdate () {
    this.buildChart();
    }

    buildChart = () => {

        const { data, labels } = this.props;
        if(typeof myBarChart !== "undefined") myBarChart.destroy();

        myBarChart = new Chart({
            chartType: "ColumnChart",
            data: {
                labels: labels,
                data: data,
                fill: '#9D0000',
                borderColor: 'black'
                }
            }
        )
    }

    render () {
        return (
            <div>
                <Chart id="myBarChart" data={myBarChart.data.data} ref={this.chartRef}/>
            </div>
        );
    }
}

export default Bar;
