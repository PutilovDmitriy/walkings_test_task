import React, {useState} from "react";
import Tr from "../Tr";
import Th from "../Th";
import P from '../P';
import ButtonAdd from '../ButtonAdd';


function WalkingAdd(props) {
    let [color, setColor] = useState(0);

    const setUp = () => setColor(0);
    const setDown = () => setColor(1);

    let textColor = color === 1 ? "#1C2025" : "#FFFFFF";

    return(
        <Tr bgColor="#EC174F" textAlign="center">
            <ButtonAdd onClick={props.openForm} onMouseDown={setDown} onMouseUp={setUp}>
                <Th marginLeft="0px" textAlign="center"><P fontSize="18px" fontHeight="23px" color={textColor}>Добавить запись</P></Th>
            </ButtonAdd>
        </Tr>

    )
}

export default WalkingAdd;