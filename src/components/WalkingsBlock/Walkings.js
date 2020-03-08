import React, {useContext} from "react";
import Walking from './Walking';
import Table from "../styled-components/Table";
import Context from '../../context';
import CustomScrollbarsTable from "./CustomScrollbarsTable";
import WalkingAddForm from './WalkingAddForm';


function Walkings () {  

    const { walkingAddForm , walkingsData} = useContext(Context);
    let i = 0; 

    return (
      <CustomScrollbarsTable style={{ width: "335px" }}>
      <tr> 
        <th  style={{padding: 0}}>      
        <Table margin="0">
        { walkingsData.map( walking => {          
          i++;          
          return <Walking key={ i } id={ walking.id } colorId={ i } walking={walking} />;        
        }) }
        </Table>
        {walkingAddForm && <WalkingAddForm/>} 
        </th>
      </tr>
      </CustomScrollbarsTable>
    )
}

export default Walkings;