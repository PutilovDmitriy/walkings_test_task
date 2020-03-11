import React, { useContext} from 'react';
import Context from '../../context';
import Thead from '../styled-components/Thead'
import Tr from '../styled-components/Tr';
import Th from '../styled-components/Th';
import P from '../styled-components/P';
import ImgSort from '../styled-components/ImgSort';
import SortImg from '../../img/sort.png';


function TitleWalkings() {

    const { sortByDate, sortByDistance, sortDate, sortDistance} = useContext(Context);

    return(
      <Thead>
        <Tr bgColor="#1C2025">
            <Th marginLeft="16px" margin="13px 0" onClick={ sortByDate }>
            <P display="inline-block" fontSize="14px" color="#FFFFFF">Дата</P>
            <ImgSort src={ SortImg } transform={sortDate} opacity={sortDate} alt=""/>
            </Th>
            <Th margin="13px 0" onClick={ sortByDistance }>
            <P display="inline-block" fontSize="14px" color="#FFFFFF">Дистанция</P>
            <ImgSort src={ SortImg } transform={sortDistance} opacity={sortDistance} alt=""/>
            </Th>
        </Tr>
      </Thead>
    )     
};

export default TitleWalkings;