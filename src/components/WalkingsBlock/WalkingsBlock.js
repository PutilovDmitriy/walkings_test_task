import React, { useContext} from 'react';
import Walkings from './Walkings';
import Table from '../styled-components/Table';
import TitleWalkings from './TitleWalkings';
import WalkingAddButton from './WalkingAddButton';
import Element from '../styled-components/Element';
import Context from '../../context';
import WalkingContext from '../../context2';

function WalkingsBlock({ walkingsData, newWalkingDate, newWalkingDistance, validDate, validDistance, changeNewWalkingDate, changeNewWalkingDistance, changeValidDate ,changeValidDistance }) {
    const { addNewWalking} = useContext(Context);
    
    function submitAddForm(event) {
        event.preventDefault()        
        if (newWalkingDate.trim() && newWalkingDistance !== null && validDistance && validDate) {
            addNewWalking(newWalkingDate, Number(newWalkingDistance));
            changeNewWalkingDate("");
            changeNewWalkingDistance("");
            changeValidDate(null);
            changeValidDistance(false);
        }
    }

    return(
        <WalkingContext.Provider value={{ submitAddForm, newWalkingDate, newWalkingDistance, validDate, validDistance, changeNewWalkingDate, changeNewWalkingDistance, changeValidDate ,changeValidDistance }}>
            <Element marginLeft="7%" >
            <Table>
                <TitleWalkings/>
                <Walkings walkingsData={ walkingsData }/>
                <WalkingAddButton submitAddForm={submitAddForm} validDate={validDate} validDistance={validDistance}/>
            </Table>
            </Element>
        </WalkingContext.Provider>
    )    
}

export default WalkingsBlock;