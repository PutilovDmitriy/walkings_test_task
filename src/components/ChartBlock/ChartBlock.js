import React, { useContext, useState} from 'react';
import { ComposedChart, LineChart, Line, Bar, LabelList, Brush, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Context from '../../context';
import Element from '../styled-components/Element'
import Header from '../styled-components/Header';
import Footer from './Footer';
import P from '../styled-components/P';
import CustomTooltip from './CustomTooltip';


function ChartBlock() {
    const { walkingsData } = useContext(Context);
    const [startIndex,setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(4);

    const walkingsDataTotal = countTotalActivity(walkingsData);

    function countTotalActivity(walkings) {
        let methods = walkings.reduce(function(walking, value) {
            let date = value.date.substr(0, 10);
            walking[date] = walking[date] ? walking[date] + value.distance 
            : value.distance;
            return walking;
          }, {});          
          let i = 0;
          let walks = Object.keys(methods).map(function(date) {
            ++i;
            return { id: i,
                     date: date, 
                     distance: methods[date] };
          });
          return walks;
    };

    let timerId = 0;
    function changedIndex({startIndex, endIndex}){       
        if(timerId!==0){
            clearTimeout(timerId);
        } 
        timerId = setTimeout(() => {           
            setStartIndex(startIndex);
            setEndIndex(endIndex);
        }, 500)
    };


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
    <Element marginRight="7%">
    <Header invert={true} margin="20px 40px" ><P fontSize="36px" fontHeight="47px">Суммарная активность</P></Header>
    <ComposedChart width={800} height={400} data={ walkingsDataTotal } margin={{ top: 10, right: 20, bottom: 10 , left: 0 }}>
    <CartesianGrid stroke="#ccc" vertical={false} />
        <Bar dataKey="distance" barSize={1} fill="#ccc" />
        <Line type="linear" dataKey="distance" stroke="#EC174F" strokeWidth={2} fill='#EC174F' dot={{ stroke: '#EC174F', strokeWidth: 10 }} activeDot={{ stroke: '#EC174F', strokeWidth: 12}} >
        <LabelList dataKey="distance" fill="#EC174F" position="top" offset="10" formatter={(label) => { return (label + " м") } }/>
        </Line>
        <XAxis dataKey="date" interval={0} padding={{ left: 30, right: 30}} tick={{stroke: '#ccc', fontSize: '10px'}} margin={5} tickLine={false}
            tickFormatter={tickFormatter} />
        <YAxis type="number" domain={['auto', 'dataMax + 100']} padding={{ buttom: 30, top: 0}} tick={{stroke: '#ccc', fontSize: '10px'}} margin={5} axisLine={false}  tickLine={false}  />
    <Tooltip cursor={false} content={ <CustomTooltip/> } />
    <Brush
        dataKey="date"
        height={40}
        stroke="#1C2025"
        y={360}
        startIndex={ startIndex }
        endIndex={ endIndex }
        tickFormatter={tickFormatter}
        onChange={changedIndex}
          >
        <LineChart>
              <Line type="linear" dataKey="distance" stroke="#EC174F" fill="#EC174F" dot={false} />
        </LineChart>
    </Brush>
    </ComposedChart>
    <Footer walkingsDataTotal={ walkingsDataTotal }
            startIndex={ startIndex }
            endIndex={ endIndex }            
            />
    </Element>
    )};

export default ChartBlock;