import React, { useState, useContext } from "react";
import Tr from '../styled-components/Tr';
import Th from '../styled-components/Th';
import ImgDoneDlt from '../styled-components/ImgDoneDlt';
import DoneImg from '../../img/done.png';
import DltImg from '../../img/dlt.png';
import Input from '../styled-components/Input';
import Context from "../../context";



function WalkingEdit( {id, listId, updateEdit,  bgColor, walking} ) {  
    const [date, setDate] = useState(walking.date);
    const [distance, setDistance] = useState(walking.distance);
    const { removeWalking, changeWalking } = useContext(Context)
    
    function assemblyForUpdateWalking() {    
        let i = listId-1;
        changeWalking(id, i ,{date: date, distance: Number(distance) })        
        updateEdit()
    };

    function assemblyForDeliteWalking() {
        removeWalking(id)
        updateEdit()
    };

    return (
     <Tr bgColor={ bgColor }>
        <Th marginLeft="16px">
            <div style={{ maxWidth: "130px" }}>
                <Input type="date" value={ date } onChange={event => setDate(event.target.value)}/>
            </div>
        </Th>
        <Th minWidth="130px">
            <div style={{ maxWidth: "130px" }}>
                <Input type="number" min="0" value={ distance } onChange={event => setDistance(event.target.value)}/>
            </div>
        </Th>
        <ImgDoneDlt onClick={ assemblyForUpdateWalking } src={ DoneImg }/>
        <ImgDoneDlt onClick={ assemblyForDeliteWalking } src={ DltImg }/>
    </Tr>
)}

export default WalkingEdit;