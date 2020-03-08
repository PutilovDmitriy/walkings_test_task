import React from 'react';
import HeaderStyle from '../components/styled-components/Header';
import P from '../components/styled-components/P';

function Header() {
    return( 
        <HeaderStyle padding="0 20px">
            <P fontSize="24px" fontHeight="31px">Шагомер</P>
        </HeaderStyle>
    )
}

export default Header;