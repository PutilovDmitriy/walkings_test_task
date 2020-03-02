import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends Component {    

  render() {
    return (
      <Scrollbars
        style={{width: "335px"}}
        autoWidth 
        autoWidthMin = {"100%"} 
        autoWidthMax = {  }
        renderTrackVertical={props => <div {...props} style={{ background: "#1C2025" ,position: "absolute", width: "6px", right: "2px", bottom: "2px", top: "2px", borderRadius: "3px" }}/>}
        renderThumbVertical={props => <div {...props} style={{ background: "#EC174F" }}/>}>
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default CustomScrollbars;