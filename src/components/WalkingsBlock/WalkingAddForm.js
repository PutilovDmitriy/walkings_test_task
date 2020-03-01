import React, { useState, useContext } from "react";
import Button from '../Button';
import Context from '../../context';
import PropTypes from 'prop-types';


function WalkingAddForm({ onCreate }) {
    const [newWalkingDate, setNewWalkingDate] = useState("");
    const [newWalkingDistance, setNewWalkingDistance] = useState(null);

    function submitTest(event) {
        event.preventDefault()
        if (newWalkingDate.trim() && newWalkingDistance.trim()) {
            onCreate(newWalkingDate, newWalkingDistance)
            setNewWalkingDate(""); 
            setNewWalkingDistance(null);
        }
    }

    const { walkingCloseForm } = useContext(Context);
    
    return(
        <div> 
          <Button onClick={ walkingCloseForm }>Закрыть</Button>
          <form onSubmit={ submitTest }>
          <input type="date" value={ newWalkingDate } onChange={event => setNewWalkingDate(event.target.value)}/>
          <input type="number" value={ newWalkingDistance } onChange={event => setNewWalkingDistance(event.target.value)} />
          <Button type="submit">Добавить</Button>
          </form>
        </div>
    )
}

WalkingAddForm.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default WalkingAddForm;