// import React, {Component} from 'react';
// import PieChart from "./PieChart";
// import { completionTime } from "./MockData";
//
// export class PieDashboard extends Component {
//
//     state = {
//         data: completionTime
//     }
//
//     render () {
//         const { data } = this.state;
//         return (
//             <div>
//                 <PieChart data={data}/>
//             </div>
//         );
//     }
// }
//
// export default PieDashboard;

import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: [
        'On Time',
        'Early',
        'Late'
    ],
    datasets: [{
        data: [383, 96, 31],
        backgroundColor: [
            'lightgray',
            'darkgray',
            'white'
        ],
        border: 'transparent',
    }],
}

class PieDashboard extends Component {
    render () {
        return (
            <div>
                <Pie data={data}/>
            </div>
        );
    }
}

export default PieDashboard;
