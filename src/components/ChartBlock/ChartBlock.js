import React, { useContext, useState} from 'react';
import { ComposedChart, LineChart, Line, Bar, Brush, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Context from '../../context';
import Element from '../styled-components/Element'
import Header from '../styled-components/Header';
import Footer from '../styled-components/FooterChart';
import P from '../styled-components/P';
import Div from '../styled-components/StatistickElem';


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

    let min = 0;
    let max = 0;
    let average = 0;
   if (typeof(walkingsDataTotal[startIndex]) !== 'undefined' && typeof(walkingsDataTotal[endIndex]) !== 'undefined') {
    min = 0;
    max = 0;
    average = 0;   
    let myArray = walkingsDataTotal.slice(startIndex, endIndex + 1);
    if (typeof(myArray[0]) !== 'undefined') {
        min = myArray[0]["distance"];
        max = min;
        average = myArray[0]["distance"];
        for (let i = 1; i < myArray.length; ++i) {
        if (myArray[i]["distance"] > max) max = myArray[i]["distance"];
        if (myArray[i]["distance"] < min) min = myArray[i]["distance"];        
        }  
        for (let i = 1; i < myArray.length; ++i) {        
            average = average + myArray[i]["distance"];
        }  
   }
}

   function showDistance(i , isKm) {    
    if (i >= 10 && i <=  20) {
        return i +  (isKm ? " километров " : " метров");
    }else {
        switch (i % 10) {
        case 0:
            if(i === 0){
                return (isKm ? "" : i + " метров");
            }else {
                return i + (isKm ? " километров " : " метров");
            }
        case 1:
            return i + (isKm ? " километр " : " метр");
        case 2:
        case 3:
        case 4:
            return i + (isKm ? " километра " :" метра");           
         default:
            return i + (isKm ? " километров " : " метров");

        }
    }};

    function calculateDistance(dist, transfer, text) {
    let metrs = dist % 1000;
    let km = (dist - metrs) / 1000;
    let label = text;
    let kmText = showDistance(km, true);
    let metrsText = showDistance(metrs, false);

    return <P fontWeight="bold" fontSize="18px" fontHeight="23px">{label}{ kmText && kmText }{transfer && <br/>}{ metrsText && metrsText } </P>;
    };

    function showDays(number, titles){
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    }
   
    
    return (
    <Element marginRight="7%">
    <Header invert={true}>Суммарная активность</Header>
    <ComposedChart width={800} height={400} data={ walkingsDataTotal } margin={{ top: 10, right: 20, bottom: 10 , left: 0 }}>
    <CartesianGrid stroke="#ccc" vertical={false} />
        <Bar dataKey="distance" barSize={1} fill="#ccc" />
        <Line type="linear" dataKey="distance" stroke="#EC174F" strokeWidth={2} fill='#EC174F' dot={{ stroke: '#EC174F', strokeWidth: 10 }} activeDot={{ stroke: '#EC174F', strokeWidth: 12}} />
        <XAxis dataKey="date" interval={0} padding={{ left: 30, right: 30}} tick={{stroke: '#ccc', fontSize: '10px'}} margin={5} tickLine={false}
            tickFormatter={tickFormatter} />
        <YAxis type="number" domain={['auto', 'dataMax + 100']} padding={{ buttom: 30, top: 0}} tick={{stroke: '#ccc', fontSize: '10px'}} margin={5} axisLine={false}  tickLine={false}  />
    <Tooltip cursor={false} />
    <Brush
        dataKey="date"
        height={40}
        stroke="blue"
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
    <Footer>
        <Div marginLeft="20px">{calculateDistance(min, true , "Минимум: ")}</Div>
        <Div marginRight="20px" marginLeft="20px">{calculateDistance(max, true, "Максимум: ")}</Div>
        <Div textAlign="right" marginRight="20px"><P fontWeight="bold" fontSize="18px" fontHeight="23px">Суммарно за {(endIndex-startIndex + 1)} {showDays((endIndex-startIndex + 1), ["день", "дня", "дней"] )}:</P>{calculateDistance(average)}</Div>
    </Footer>
    </Element>
    )};

export default ChartBlock;