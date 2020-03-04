import React, { useState, useContext } from "react";
import Button from '../styled-components/Button';
import Context from '../../context';
import Form from '../styled-components/FormAdd';

function WalkingAddForm({ onCreate }) {
    const [newWalkingDate, setNewWalkingDate] = useState("");
    const [newWalkingDistance, setNewWalkingDistance] = useState(null);
    const { addWalking, walkingCloseForm } = useContext(Context);

    function submitTest(event) {
        event.preventDefault()
        if (newWalkingDate.trim() && newWalkingDistance.trim()) {
            addWalking(newWalkingDate, newWalkingDistance);
            setNewWalkingDate(""); 
            setNewWalkingDistance("null");
        }
    }
    
    return(
        <Form>
            <Button onClick={ walkingCloseForm }>Закрыть</Button>
            <form onSubmit={ submitTest }>
            <input type="date" value={ newWalkingDate } onChange={event => setNewWalkingDate(event.target.value)}/>
            <input type="number" min={0} value={ newWalkingDistance } onChange={event => setNewWalkingDistance(event.target.value)} />
            <Button type="submit">Добавить</Button>
            </form>
        </Form> 
    )
}

export default WalkingAddForm;