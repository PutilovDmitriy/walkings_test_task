import React, {useContext} from "react";
import CustomScrollbars from '../CustomScrollbars';
import Walking from './Walking';
import Table from "../Table";
import Context from '../../context';


function Walkings () {  

    const { walkingsData } = useContext(Context);
    let i = 0;

    return (
      <CustomScrollbars style={{ width: "335px" }}>
      <tr> 
        <th  style={{padding: 0}}>
        <Table margin="0">
        { walkingsData.map( walking => {
          i++;
          return <Walking key={ i } id={ i } walking={walking} />;        
        }) }
        </Table>
        </th>
      </tr>
      </CustomScrollbars>
    )
}

export default Walkings;