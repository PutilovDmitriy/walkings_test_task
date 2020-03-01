import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Context from '../context';
import Element from './Element'


function ChartBlock() {
    const { walkingsData } = useContext(Context);
    
    const renderCustomAxisTick = ({ payload }) => {
        let day = new Date(payload.value);

        let options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          };
        console.log(day.toLocaleString("ru", options));     
        return (<g>
                 <text>{ lable }</text>
                </g>
        ) ;
         
    };

    return (
    <Element float="right">
    <LineChart width={600} height={300} data={ walkingsData } margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="distance" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" interval={0} tick={ renderCustomAxisTick } />
        <YAxis />
    <Tooltip />
    </LineChart>
    </Element>
    )};

export default ChartBlock;