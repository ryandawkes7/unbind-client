import React, {Component} from 'react';
import Chart from "react-google-charts";

class ChartEx extends Component {

    // Constructs chart with data imported via chartData
    constructor (props) {
        super(props);
        this.state={
            chartData: props.chartData
        }
    }

    // Default props for chart object
    static defaultProps = {
        displayTitle: true,
        title: 'Chart Title',
        type: "ColumnChart",
        xTitle: 'X Axis Title',
        yTitle: 'Y Axis Title',
        minValue: 0
    }

    render () {
        return (
            <div className="chart">
                <Chart
                    chartType={this.props.displayTitle}
                    loader={<div>Loading Chart</div>}
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: this.props.title,
                            fontSize: 25,
                            fontFamily: 'Montserrat'
                        },
                        hAxis: {
                            title: {
                                text: this.props.xTitle
                            },
                            minValue: this.props.minValue
                        },
                        vAxis: {
                            title: {
                                text: this.props.yTitle
                            },
                        },
                    }}
                    legendToggle
                    />
            </div>
        );
    }
}

export default ChartEx;

// import React, {Component} from 'react';
// import {Bar} from 'react-chartjs-2';
//
// class ChartEx extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             chartData:props.chartData
//         }
//     }
//
//     // Default props for object
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
// export default ChartEx;
