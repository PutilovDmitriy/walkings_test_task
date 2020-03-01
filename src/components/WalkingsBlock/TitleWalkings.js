import React, { useContext, useState } from 'react';
import Context from '../../context';
import Thead from '../Thead'
import Tr from '../Tr';
import Th from '../Th';
import P from '../P';



function TitleWalkings() {

    const { sortByDate, sortByDistance, sortDate, sortDistance } = useContext(Context);

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