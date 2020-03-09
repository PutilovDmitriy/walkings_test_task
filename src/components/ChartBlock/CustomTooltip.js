import React from 'react';
import WalkingDate from '../Date';
import Distance from '../Distance';

function CustomTooltip({ active, payload, label }) {      
    if (active) {
      return (
        <div>
          <WalkingDate date={label} />
          <Distance distance={payload[0].value}/>
        </div>
      );
    }
    return null;
}

export default CustomTooltip;