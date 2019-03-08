import React, { Component } from 'react';
import {
    PieChart, Pie, Sector, Cell, Legend
} from 'recharts';
import Typography from '@material-ui/core/Typography';
import styles from './styles.css'

//var cloudant = require('../Cloudant/index');

const dis = 700;
const indis = 300;

const data = [{ name: 'Ocupado', value: indis }, { name: 'Disponible', value: dis  }];
const COLORS = ['#F01313', '#2669EE'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class OcupationGraph extends Component {
    render() {
        return (
            <PieChart width={300} height={308} onMouseEnter={this.onPieEnter}>
              <Legend verticalAlign="top" height={36}/>
                <Pie
                    data={data}
                    cx={130}
                    cy={120}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                >
                    {
                        data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
        );
    }
}

export default OcupationGraph;