import React, {useState, useContext} from "react";
import Tr from "../styled-components/Tr";
import Th from "../styled-components/Th";
import P from '../styled-components/P';
import ButtonAdd from '../styled-components/ButtonAdd';
import Context from "../../context";
import WalkingContext from '../../context2';


function WalkingAdd(props) {
    const { walkingAddForm, walkingOpenForm} = useContext(Context);
    const { submitTest } = useContext(WalkingContext);


    let [color, setColor] = useState("#FFFFFF");
    const setUp = () => setColor("#FFFFFF");
    const setDown = () => setColor("#1C2025");

    return(
        <Tr bgColor={walkingAddForm ? "rebeccapurple" :"#EC174F"} textAlign="center">
            <ButtonAdd onClick={walkingAddForm ? submitTest : walkingOpenForm} onMouseDown={setDown} onMouseUp={setUp}>
                <Th marginLeft="0px" textAlign="center"><P fontSize="18px" fontHeight="23px" color={color}>Добавить запись</P></Th>
            </ButtonAdd>
        </Tr>

    )
}

export default WalkingAdd;