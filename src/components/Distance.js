import React from "react";
import P from './styled-components/P';





function Distance(props) {
    let kmText = "";
    let metrsText = "";

    function showDistance(i , isKm) {    
        if (i >= 10 && i <=  20) {
            return i +  (isKm ? " километров " : " метров");
        }else {
            switch (i % 10) {
            case 0:
                if(i === 0){
                    return "";
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
    
    function calculateDistance(dist) {
        let metrs = dist % 1000;
        let km = (dist - metrs) / 1000;
        
        kmText = showDistance(km, true);
        metrsText = showDistance(metrs, false);
        
        };

    calculateDistance(props.distance)

    return(
        <P fontSize="12px">{ kmText && kmText}{ metrsText && metrsText }</P>
)};

export default Distance;