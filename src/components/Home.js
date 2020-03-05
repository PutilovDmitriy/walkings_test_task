import React, { useState, useEffect } from 'react';
import Wrapper from './styled-components/Wrapper'
import WalkingsBlock from './WalkingsBlock/WalkingsBlock';
import Context from '../context';
import ChartBlock from './ChartBlock/ChartBlock';
import Header from './styled-components/Header';

function Home() {
    const [walkingsData, setWalkingsData] = useState([]);
    const [sortDate, setSortDate] = useState(null);
    const [sortDistance, setSortDistance] = useState(null);
    const [walkingAddForm, setWalkingAddForm] = useState(false);

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
                if (sortDate) {
                    setWalkingsData(walkingsData.sort((a, b) => a.date > b.date ? 1 : -1));
                    setSortDate(false);
                }else {
                    setWalkingsData(walkingsData.sort((a, b) => a.date < b.date ? 1 : -1));
                    setSortDate(true);
                }
                setSortDistance(null);
                
            };

    function sortByDistance() {            
            if(sortDistance) {
                setWalkingsData(walkingsData.sort((a, b) => a.distance > b.distance ? 1 : -1));
                setSortDistance(false);
            } else {
                setWalkingsData(walkingsData.sort((a, b) => a.distance < b.distance ? 1 : -1));
                setSortDistance(true)
            } 
            setSortDate(null);
          };


    return (
        <Context.Provider value={{ walkingOpenForm, walkingCloseForm, walkingAddForm, addWalking, walkingsData, sortByDate, sortByDistance, sortDate, sortDistance }}>
        <Header marginBottom="0">Hello</Header>
        <Wrapper>
            <WalkingsBlock openForm={ walkingOpenForm } walkingsData={ walkingsData }/>
            <ChartBlock/>
        </Wrapper>
        </Context.Provider>  
    )
};
export default Home;