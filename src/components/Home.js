import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper'
import WalkingsBlock from './WalkingsBlock/WalkingsBlock';
import WalkingAddForm from './WalkingsBlock/WalkingAddForm';
import Context from '../context';
import ChartBlock from './ChartBlock';
import Header from './Header';

function Home() {
    let [walkingsData, setWalkingsData] = useState([]);
    let [sortDate, setSortDate] = useState(false);
    let [sortDistance, setSortDistance] = useState(false);
    let [walkingAddForm, setWalkingAddForm] = useState(false);

    const walkingOpenForm = () => setWalkingAddForm(true);
    const walkingCloseForm = () => setWalkingAddForm(false);

    useEffect(() => {
        fetch("http://localhost:3000/walking")
            .then(response => response.json())
            .then(data => {
                setWalkingsData(data);
            });
    }, []);

    function addWalking(date, distance) {
        setWalkingsData(walkingsData.concat([
            {
            date: date,
            distance: distance
            }
        ]));
        fetch('http://localhost:3000/walking/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ date: date, distance: parseFloat(distance) })
          });       
    };

    function sortByDate() {
                sortDate ? setWalkingsData(walkingsData.sort((a, b) => a.date < b.date ? 1 : -1))
                : setWalkingsData(walkingsData.sort((a, b) => a.date > b.date ? 1 : -1));
                setSortDate(!sortDate);
            };

    function sortByDistance() {            
            sortDistance ? setWalkingsData(walkingsData.sort((a, b) => a.distance < b.distance ? 1 : -1))
                : setWalkingsData(walkingsData.sort((a, b) => a.distance > b.distance ? 1 : -1));
            setSortDistance(!sortDistance);
          };


    return (
        <Context.Provider value={{ walkingOpenForm, walkingCloseForm, walkingsData, sortByDate, sortByDistance, sortDate, sortDistance }}>
        <Header>Hello</Header>
        <Wrapper>
            <WalkingsBlock openForm={ walkingOpenForm } walkingsData={ walkingsData }/>
            {walkingAddForm && <WalkingAddForm onCreate={ addWalking }/>}
            <ChartBlock/>
        </Wrapper>
        </Context.Provider>  
    )
};
export default Home;