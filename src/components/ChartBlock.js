import React, { useContext, useState } from 'react';
import { ComposedChart, LineChart, Line, Bar, Brush, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Context from '../context';
import Element from './Element'
import Header from './Header';


function ChartBlock() {
    const { walkingsData } = useContext(Context);      
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(10);
    const [interval, setInterval] = useState(0);

    function renderTooltip() {
        return 
    }

    const tickFormatter = (tick) => { 
        let day = new Date(tick);
            let options = {
                year: '2-digit',
                month: 'numeric',
                day: 'numeric'
              };
            return day.toLocaleString("ru", options)
        }
    
    return (
    <Element marginRight="8%">
    <Header>LOL</Header>
    <ComposedChart width={800} height={400} data={ walkingsData } margin={{ top: 10, right: 20, bottom: 10 , left: 0 }}>
    <CartesianGrid stroke="#ccc" vertical={false} />
        <Bar dataKey="distance" barSize={1} fill="#ccc" />
        <Line type="linear" dataKey="distance" stroke="#EC174F" strokeWidth={2} fill='#EC174F' dot={{ stroke: '#EC174F', strokeWidth: 10 }} activeDot={{ stroke: '#EC174F', strokeWidth: 12}} />
        <XAxis dataKey="date" interval={interval} padding={{ left: 30, right: 30}} tick={{stroke: '#ccc', fontSize: '10px'}} margin={5} tickLine={false}
            tickFormatter={tickFormatter} />
        <YAxis type="number" domain={['auto', 'dataMax + 100']} padding={{ buttom: 30, top: 0}} tick={{stroke: '#ccc', fontSize: '10px'}} margin={5} axisLine={false}  tickLine={false}  />
    <Tooltip cursor={false} content={renderTooltip} />
    <Brush
        dataKey="date"
        height={40}
        stroke="blue"
        y={360}
        startIndex={ startIndex }
        endIndex={ endIndex }
        tickFormatter={tickFormatter} 
          >
        <LineChart>
              <Line type="linear" dataKey="distance" stroke="#EC174F" fill="#EC174F" dot={{ stroke: '#EC174F', strokeWidth: 1 }} />
        </LineChart>
    </Brush>
    </ComposedChart>
    </Element>
    )};

export default ChartBlock;