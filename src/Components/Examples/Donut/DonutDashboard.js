// import React, {Component} from 'react';
// import DonutChart from "./DonutChart";
// import {completionRate, incompleteRate} from "./MockData";
//
// export class DonutDashboard extends Component {
//     state = {
//         data: completionRate
//     }
//
//     render () {
//         const {data} = this.state;
//         return (
//             <div>
//                 <DonutChart data={ data }/>
//             </div>
//         );
//     }
// }
//
// export default DonutDashboard;

import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Complete',
        'Incomplete',
    ],
    datasets: [{
        data: [63, 37],
        backgroundColor: [
            'lightgray',
            'darkgray'
        ],
        border: 'transparent',
    }],
};

class DonutDashboard extends Component {

    render () {
        return (
            <div>
                <Doughnut data={data}/>
            </div>
        );
    }
}

export default DonutDashboard;
