// import React, {Component} from 'react';
// import {Bar} from 'react-chartjs-2';
// import './barChart.css'
//
// export class Chart extends Component{
//     // Constructs state of chart based on data passed through props
//     constructor(props){
//         super(props);
//         this.state = {
//             chartData:props.chartData
//         }
//     }
//
//     // Default/initial props for chart
//     static defaultProps = {
//         displayTitle:true,
//         displayLegend: true,
//         legendPosition:'right',
//         view:'Category'
//     }
//
//     render(){
//         return (
//             <div className="chart">
//                 <Bar
//                     data={this.state.chartData}
//                     options={{
//                         title:{
//                             display:this.props.displayTitle,
//                             text: this.props.view,
//                             fontSize:25
//                         }
//                     }}
//                 />
//             </div>
//         )
//     }
// }
//
// export default Chart;

import React, {Component} from 'react';
import Chart from "chart.js";
import './barChart.css'
import classes from '../Examples/DashboardChartTest/LineGraph/LineGraph.module.css';

let myBarChart;

// Font Style
Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif"
// Hides Legend
Chart.defaults.global.legend.display = false;
//--ChartEx Style Options--//

export default class ExampleChart extends Component{

    chartRef = React.createRef();

    componentDidMount () {
        this.buildChart();
    }

    componentDidUpdate () {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { title, data, labels, barColours } = this.props;
        if (typeof myBarChart !== "undefined") myBarChart.destroy();

        myBarChart = new Chart(myChartRef, {
            type: "bar",
            title: title,
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Sales",
                        data: data,
                        fill: true,
                        backgroundColor: barColours
                    }
                ]
            },
            options: {

            }
        });
    }

    render() {
        return(
            <div className={classes.graphContainer}>
                <canvas id="myChart" ref={this.chartRef} />
            </div>
        )
    }
}
