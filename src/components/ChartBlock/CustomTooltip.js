import React from 'react';
import WalkingDate from '../Date';
import Distance from '../Distance';
import Tooltip from '../styled-components/Tooltip';

function CustomTooltip({ active, payload, label }) {      
    if (active) {
      return (
        <Tooltip>
          <WalkingDate date={label} fontSize="14px" color="#1C2025"/>
          <Distance distance={payload[0].value} fontSize="16px" fontHeight="20px"/>
        </Tooltip>
      );
    }
    return null;
}

export default CustomTooltip;