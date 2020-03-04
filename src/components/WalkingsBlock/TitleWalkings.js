import React, { useContext} from 'react';
import Context from '../../context';
import Thead from '../styled-components/Thead'
import Tr from '../styled-components/Tr';
import Th from '../styled-components/Th';
import P from '../styled-components/P';



function TitleWalkings() {

    const { sortByDate, sortByDistance} = useContext(Context);

    return(
      <Thead>
        <Tr bgColor="#1C2025">
            <Th marginLeft="16px"><P onClick={ sortByDate } fontSize="14px" fontHeight="18px" color="#FFFFFF">Дата</P></Th>
            <Th><P onClick={ sortByDistance } fontSize="14px" fontHeight="18px" color="#FFFFFF">Дистанция</P></Th>
        </Tr>
      </Thead>
    )     
};

export default TitleWalkings;