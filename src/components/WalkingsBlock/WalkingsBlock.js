import React from 'react';
import Walkings from './Walkings';
import Table from '../styled-components/Table';
import TitleWalkings from './TitleWalkings';
import WalkingAddButton from './WalkingAddButton';
import Element from '../styled-components/Element';

function WalkingsBlock(props) {
    return(
        <Element marginLeft="7%" >
        <Table>
            <TitleWalkings/>
            <Walkings walkingsData={ props.walkingsData}/>
            <WalkingAddButton openForm={ props.openForm }/>
        </Table>
        </Element>
    )    
}

export default WalkingsBlock;