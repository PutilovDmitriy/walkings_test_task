import React from "react";
import P from './styled-components/P';

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
}

function weekdayN(d) {
    let newD = new Date(d);
    
    let options = {
        weekday: 'long',
      };
    
    return newD.toLocaleString("ru", options);
}
function dayN(d) {
    let newD = new Date(d);
    
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
    
    return newD.toLocaleString("ru", options);
};

function WalkingDate(props) {
    let day = dayN(props.date);
    let weekday = weekdayN(props.date);
    
    return (
        <div>
            <P>{ ucFirst(weekday) }</P>
            <P fontSize={ props.fontSize } color={ props.color} fontHeight={ props.fontHeight }> {day} </P>
        </div>
)}

export default WalkingDate;