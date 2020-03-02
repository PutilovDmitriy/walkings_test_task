import React, {useContext} from "react";
import Walking from './Walking';
import Table from "../Table";
import Context from '../../context';
import CustomScrollbarsTable from "./CustomScrollbarsTable";


function Walkings () {  

    const { walkingsData } = useContext(Context);
    let i = 0;

    return (
      <CustomScrollbarsTable style={{ width: "335px" }}>
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
      </CustomScrollbarsTable>
    )
}

export default Walkings;