import React from "react";
import Tr from '../styled-components/Tr';
import Th from '../styled-components/Th';
import Distance from '../Distance'
import WalkingDate from '../Date';
import ImgEdit from '../styled-components/ImgEdit';
import EditImg from '../../img/edit.png'


function WalkingContent( props ) {    
    return (
     <Tr bgColor={ props.bgColor }>
        <Th marginLeft="16px"><WalkingDate date={ props.walking.date } fontSize="12px"/></Th>
        <Th minWidth="143px"><Distance distance={ props.walking.distance } fontSize="12px"/></Th>
        <ImgEdit onClick={ props.updateEdit } src={ EditImg }/>
    </Tr>
)}

export default WalkingContent;