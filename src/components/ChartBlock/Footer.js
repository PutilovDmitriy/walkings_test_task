import React from 'react';
import FooterChart from '../styled-components/FooterChart';
import Div from '../styled-components/StatistickElem';
import P from '../styled-components/P';

function Footer({ walkingsDataTotal, startIndex, endIndex }) {

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
                return (isKm ? "" : "");
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

    function calculateDistance(dist, transfer, label) {
    let metrs = dist % 1000;
    let km = (dist - metrs) / 1000;
    let kmText = showDistance(km, true);
    let metrsText = showDistance(metrs, false);

    return <P fontWeight="bold" fontSize="18px" fontHeight="23px">{label}{ kmText && kmText }{transfer && <br/>}{ metrsText && metrsText } </P>;
    };

    function showDays(number, titles){
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    }

    return (
        <FooterChart>
            <Div marginLeft="20px">{calculateDistance(min, true , "Минимум: ")}</Div>
            <Div marginRight="20px" marginLeft="20px">{calculateDistance(max, true, "Максимум: ")}</Div>
            <Div textAlign="right" marginRight="20px"><P fontWeight="bold" fontSize="18px" fontHeight="23px">Суммарно за {(endIndex-startIndex + 1)} {showDays((endIndex-startIndex + 1), ["день", "дня", "дней"] )}:</P>{calculateDistance(average)}</Div>
        </FooterChart>
    )
}

export default Footer;