import React, { useContext} from "react";
import Context from '../../context';
import WalkingContext from '../../context2';
import Form from '../styled-components/FormAdd';
import Input from '../styled-components/InputForAddForm';
import ImgClose from '../styled-components/ImgClose';
import CloseImg from '../../img/close.png';
import Wrapper from '../styled-components/WrapperInputForForm';
import P from '../styled-components/P';

function WalkingAddForm({marginTop}) {
    const { closeWalkingForm } = useContext(Context);
    const { submitAddForm , newWalkingDate, newWalkingDistance, validDate, changeNewWalkingDate, changeNewWalkingDistance, changeValidDate ,changeValidDistance } = useContext(WalkingContext);

    function validatyDate() {
        let dateFormat = require('dateformat');
        let regex = /^\d{4}.\d{2}.\d{2}$/;
        
        if(newWalkingDate !== "") {
        if(newWalkingDate > dateFormat(new Date(), 'yyyy-mm-dd') || newWalkingDate.match(regex) === null ) {
            changeValidDate(false);            
        }
        if(newWalkingDate < dateFormat(new Date(), 'yyyy-mm-dd') && newWalkingDate.match(regex) !== null){
            changeValidDate(true)            
        }
        }else changeValidDate(null);
    }
    
    function validatyDistance() {
       if(newWalkingDistance !== "" && newWalkingDistance >= 0) {
        changeValidDistance(true)
       }else changeValidDistance(false);
    }


    return(
        <Form marginTop={ marginTop }>
            <ImgClose src={ CloseImg } onClick={ closeWalkingForm } />
            <form onSubmit={ submitAddForm }>
            <P fontSize="14px" fontрHeight="16px" fontWeight="bold">Новая пробежка</P>
            <Wrapper>
                <P fontSize="12px">Дата пробежки:</P>
                <Input type="date" value={ newWalkingDate } onChange={event => changeNewWalkingDate(event.target.value)} onBlur={ validatyDate } onKeyUp={ validatyDate } />
            </Wrapper>
            {!validDate && validDate !== null && <P margin="0 0 0 75px" fontSize="12px" color="#EC174F">Дата не может быть в будущем!</P> }
            <Wrapper marginTop={ !validDate && validDate !== null && "10px" }>  
                <P fontHeight="14px" fontSize="12px">Дистанция:</P>
                <Input type="number" placeholder="Дистанция в метрах" min={0} value={ newWalkingDistance } onChange={event => { changeNewWalkingDistance(event.target.value) }} onKeyUp={ validatyDistance } />
            </Wrapper>
            </form>
        </Form> 
    )
}

export default WalkingAddForm;