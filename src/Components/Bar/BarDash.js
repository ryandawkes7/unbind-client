import React, {Component} from 'react';
import Bar from './Bar';
import { revData, monthLabels} from './MockData';

export class BarDash extends Component {

    state = {
        data: revData,
        labels: monthLabels
    }

    render () {
        const {data} = this.state
        return (
            <div>
                <Bar data={ data } />
            </div>
        );
    }
}

export default BarDash;
