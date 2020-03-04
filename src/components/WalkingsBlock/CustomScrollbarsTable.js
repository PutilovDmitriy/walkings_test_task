import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbarsTable extends Component {    

  render() {
    return (
      <Scrollbars
        style={{width: "335px"}}
        autoHeight 
        autoHeightMin = { 480 } 
        autoHeightMax = { 480 }
        renderTrackVertical={props => <div {...props} style={{ background: "#1C2025" ,position: "absolute", width: "6px", right: "2px", bottom: "2px", top: "2px", borderRadius: "3px" }}/>}
        renderThumbVertical={props => <div {...props} style={{ background: "#EC174F" }}/>}>
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default CustomScrollbarsTable;