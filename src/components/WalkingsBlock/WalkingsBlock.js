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
    const { addWalking } = useContext(Context);

    function submitTest(event) {
        event.preventDefault()
        if (newWalkingDate.trim() && newWalkingDistance.trim()) {
            addWalking(newWalkingDate, newWalkingDistance);
            setNewWalkingDate(""); 
            setNewWalkingDistance("null");
        }
    }

    return(
        <WalkingContext.Provider value={{ submitTest, setNewWalkingDate, newWalkingDate, setNewWalkingDistance,  newWalkingDistance }}>
            <Element marginLeft="7%" >
            <Table>
                <TitleWalkings/>
                <Walkings walkingsData={ props.walkingsData}/>
                <WalkingAddButton openForm={ props.openForm }/>
            </Table>
            </Element>
        </WalkingContext.Provider>
    )    
}

export default WalkingsBlock;