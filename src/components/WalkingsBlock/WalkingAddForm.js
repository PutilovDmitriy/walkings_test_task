import React, { useContext } from "react";
import Button from '../styled-components/Button';
import Context from '../../context';
import WalkingContext from '../../context2';
import Form from '../styled-components/FormAdd';

function WalkingAddForm() {
    const {walkingCloseForm} = useContext(Context);
    const {newWalkingDate, setNewWalkingDate, setNewWalkingDistance ,newWalkingDistance} = useContext(WalkingContext);
    return(
        <Form>
            <Button onClick={ walkingCloseForm }>Закрыть</Button>
            <form>
            <input type="date" value={ newWalkingDate } onChange={event => setNewWalkingDate(event.target.value)}/>
            <input type="number" min={0} value={ newWalkingDistance } onChange={event => setNewWalkingDistance(event.target.value)} />
            </form>
        </Form> 
    )
}

export default WalkingAddForm;