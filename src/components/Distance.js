import React from "react";
import P from './P';

let kmText = "";
let metrsText = "";


function calculationDistance(dist) {
    let metrs = dist % 1000;
    let km = (dist - metrs) / 1000;

    if (km >= 10 && km <=  20) {
        kmText = km + " километров ";
    }else {
        switch (km % 10) {
        case 0:
            if(km === 0){
                break;
            }else {
                kmText = km + " километров ";
                break;
            }
        case 1:
            kmText = km + " километр "; 
            break; 
        case 2:
        case 3:
        case 4:
            kmText = km + " километра ";
            break;           
         default:
             kmText = km + " километров "

    }};

    if (metrs >= 10 && metrs <=  20) {
        metrsText = metrs + " метров";
    }else {
        switch (metrs % 10) {
        case 0:
            if(metrs === 0){
                break;
            }else {
                metrsText = metrs + " метров";
                break;
            }
        case 1:
            metrsText = metrs + " метров"; 
            break; 
        case 2:
        case 3:
        case 4:
            metrsText = metrs + " метра";
            break;           
         default:
            metrsText = metrs + " метров"

    }};
}

function Distance(props) {
    calculationDistance(props.distance)
    return(
        <P fontSize="12px">{ kmText && kmText}{ metrsText && metrsText }</P>
)};

export default Distance