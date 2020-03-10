import React, { useState } from "react";
import WalkingContent from './WalkingContent';
import WalkingEdit from './WalkingEdit';



function Walking( {key, id, listId, walking} ) {    
    const [isEdit, setIsEdit] = useState(false);

    const updateEdit = () => setIsEdit(!isEdit);

    function primeriDetect(id){    
        return (id % 2 !== 0) ? "#FFFFFF" : "#EFEFF0" ;
    }

    return ( 
        isEdit ? 
            <WalkingEdit 
                updateEdit={ updateEdit } 
                key={ key } 
                id={ id } 
                listId={ listId }
                bgColor={ primeriDetect(listId) }
                walking={ walking }
            /> 
            : 
            <WalkingContent 
                updateEdit={ updateEdit } 
                key={ key } id={ id } 
                bgColor={ primeriDetect(listId) } 
                walking={ walking }
            />
        );
}

export default Walking;
