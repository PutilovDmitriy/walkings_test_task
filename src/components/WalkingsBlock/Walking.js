import React from "react";
import Tr from '../styled-components/Tr';
import Th from '../styled-components/Th';
import Distance from './Distance'
import WalkingDate from "./Date";

function primeriDetect(id){    
    if (id % 2 !== 0){
        return "#FFFFFF";

    }
}

function Walking( props ) {    
    console.log(props.id);    
    return (
     <Tr bgColor={ primeriDetect(props.colorId) }>
        <Th marginLeft="16px"><WalkingDate date={ props.walking.date }/></Th>
        <Th><Distance distance={ props.walking.distance }/></Th> 
    </Tr>
)}
export default Walking;
