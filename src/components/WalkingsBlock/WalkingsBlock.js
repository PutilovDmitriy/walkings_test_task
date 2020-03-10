import React, {useState, useContext} from 'react';
import Walkings from './Walkings';
import Table from '../styled-components/Table';
import TitleWalkings from './TitleWalkings';
import WalkingAddButton from './WalkingAddButton';
import Element from '../styled-components/Element';
import Context from '../../context';
import WalkingContext from '../../context2';

function WalkingsBlock(props) {
    const [newWalkingDate, setNewWalkingDate] = useState("");
    const [newWalkingDistance, setNewWalkingDistance] = useState(null);
    const [validDate, setValidDate] = useState(null);
    const { addNewWalking} = useContext(Context);
    
    function submitAddForm(event) {
        event.preventDefault()        
        if (newWalkingDate.trim() && newWalkingDistance !== null && validDate) {
            addNewWalking(newWalkingDate, Number(newWalkingDistance));
            setNewWalkingDistance("");
            setNewWalkingDate("");
        }
    }

    return(
        <WalkingContext.Provider value={{ submitAddForm, setNewWalkingDate, newWalkingDate, setNewWalkingDistance,  newWalkingDistance, validDate, setValidDate }}>
            <Element marginLeft="7%" >
            <Table>
                <TitleWalkings/>
                <Walkings/>
                <WalkingAddButton/>
            </Table>
            </Element>
        </WalkingContext.Provider>
    )    
}

export default WalkingsBlock;