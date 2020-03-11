import React, {useState, useContext} from "react";
import Tr from "../styled-components/Tr";
import Th from "../styled-components/Th";
import P from '../styled-components/P';
import ButtonAdd from '../styled-components/ButtonAdd';
import Context from "../../context";
import WalkingContext from '../../context2';


function WalkingAdd() {
    const { walkingAddForm, openWalkingForm} = useContext(Context);
    const { submitAddForm, validDate, validDistance } = useContext(WalkingContext);


    let [color, setColor] = useState("#FFFFFF");
    const setUp = () => setColor("#FFFFFF");
    const setDown = () => setColor("#1C2025");
    
    function guideColor() {
        if(!walkingAddForm) {
            return "#EC174F";
        }
        if(walkingAddForm){
            if(validDate && validDistance){
                return "#EC174F";
            }else return "#AAAAAA";
        }
    }
    
    return(
        <Tr bgColor={ guideColor } textAlign="center">
            <ButtonAdd onClick={walkingAddForm ? submitAddForm : openWalkingForm } onMouseDown={setDown} onMouseUp={setUp}>
                <Th marginLeft="0px" justify="center"><P fontSize="18px" fontHeight="23px" color={color}>{walkingAddForm ? "Подтвердить" : "Добавить запись"} </P></Th>
            </ButtonAdd>
        </Tr>

    )
}

export default WalkingAdd;