import React, { useContext } from 'react';
import { ComposedChart, Line, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Context from '../context';
import Element from './Element'


function ChartBlock() {
    const { walkingsData } = useContext(Context);      

    function renderTooltip() {
        return 
    }

    return (
    <Element float="right" >
    <ComposedChart width={600} height={300} data={ walkingsData } margin={{ top: 100, right: 20, bottom: 5, left: 0 }}>
    <CartesianGrid stroke="#ccc" vertical={false} />
        <Bar dataKey="distance" barSize={1} fill="#ccc" />
        <Line type="linear" dataKey="distance" stroke="#EC174F" strokeWidth={2} fill='#EC174F' dot={{ stroke: '#EC174F', strokeWidth: 10 }} activeDot={{ stroke: '#EC174F', strokeWidth: 12}} />
        <XAxis dataKey="date" interval={0} padding={{ left: 30, right: 30}} tick={{stroke: '#ccc', fontSize: '10px'}} margin={5} tickLine={false}
            tickFormatter={(tick) => { 
            let day = new Date(tick);
            let options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
              };
            return day.toLocaleString("ru", options)
        } } />
        <YAxis type="number" domain={['auto', 'dataMax + 100']} padding={{ buttom: 30, top: 0}} tick={{stroke: '#ccc', fontSize: '10px'}} margin={5} axisLine={false}  tickLine={false}  />
    <Tooltip cursor={false} content={renderTooltip} />
    </ComposedChart>
    </Element>
    )};

export default ChartBlock;