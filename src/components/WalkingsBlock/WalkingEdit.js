import React, { useState, useContext } from "react";
import Tr from '../styled-components/Tr';
import Th from '../styled-components/Th';
import ImgDoneDlt from '../styled-components/ImgDoneDlt';
import DoneImg from '../../img/done.png';
import DltImg from '../../img/dlt.png';
import Input from '../styled-components/InputForEdit';
import Context from "../../context";
import P from '../styled-components/P';



function WalkingEdit( {id, listId, updateEdit,  bgColor, walking} ) {  
    const [date, setDate] = useState(walking.date);
    const [distance, setDistance] = useState(walking.distance);
    const [validDate, setValidDate] = useState(true);
    const [validDistance, setValidDistance] = useState(true);
    const { removeWalking, changeWalking } = useContext(Context)
    
    function assemblyForUpdateWalking() {    
        if(validDate && validDistance) {
        let i = listId-1;
        changeWalking(id, i ,{date: date, distance: Number(distance) })        
        updateEdit()
        }
    };

    function assemblyForDeliteWalking() {
        removeWalking(id)
        updateEdit()
    };

    function validatyDate() {
        let dateFormat = require('dateformat');
        let regex = /^\d{4}.\d{2}.\d{2}$/;
        
        if(date !== "") {
        if(date > dateFormat(new Date(), 'yyyy-mm-dd') || date.match(regex) === null ) {
            setValidDate(false);            
        }
        if(date < dateFormat(new Date(), 'yyyy-mm-dd') && date.match(regex) !== null){
            setValidDate(true)            
        }
        }else setValidDate(null);
    }
    
    function validatyDistance() {
       if(distance !== "" && distance >= 0) {
        setValidDistance(true)
       }else setValidDistance(false);
    }

    return (
     <Tr bgColor={ bgColor }>
        <Th marginLeft="16px">
            <div style={{ maxWidth: "130px" }}>
                <Input color={ validDate ? '' : "#EC174F" }  type="date" value={ date } onChange={event => setDate(event.target.value)} onBlur={ validatyDate } onKeyUp={ validatyDate }/>
                {!validDate && <P fontSize="10px" fontHeight="14px" color="#EC174F" margin="0 0 0 15px">Дата из будущего!</P>}
            </div>
        </Th>
        <Th minWidth="130px">
            <div style={{ maxWidth: "130px" }}>
                <Input color={ validDistance ? '' : "#EC174F" } type="number" min="0" value={ distance } onChange={event => setDistance(event.target.value)} onKeyUp={ validatyDistance }/>
            </div>
        </Th>
        <ImgDoneDlt onClick={ assemblyForUpdateWalking } src={ DoneImg }/>
        <ImgDoneDlt onClick={ assemblyForDeliteWalking } src={ DltImg }/>
    </Tr>
)}

export default WalkingEdit;