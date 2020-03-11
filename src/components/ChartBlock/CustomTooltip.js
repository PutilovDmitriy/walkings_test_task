import React from 'react';
import WalkingDate from '../Date';
import P from '../styled-components/P';
import Tooltip from '../styled-components/Tooltip';

function CustomTooltip({ active, payload, label }) { 
    if (active) {
      return (
        <Tooltip>
          <WalkingDate date={label} fontSizeWeekday="10px" fontSizeDate="14px" fontHeight="16px" color="rgba(28, 32, 37, 0.4)"/>
          <P fontSize="24px" fontHeight="31px" margin="0 0 0 15px">{payload ? payload[0].value : null}м.</P>
        </Tooltip>
      );
    }
    return null;
}

export default CustomTooltip;