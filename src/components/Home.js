import React, { useState, useEffect } from 'react';
import Wrapper from './styled-components/Wrapper'
import WalkingsBlock from './WalkingsBlock/WalkingsBlock';
import Context from '../context';
import ChartBlock from './ChartBlock/ChartBlock';
import Header from './styled-components/Header';

function Home({ walkingsData, addWalking, updateWalkings, sortDate, sortDistance, changeSortDate, changeSortDistance }) {
    // const [walkingsData, setWalkingsData] = useState([]);
    // const walkingsData = props.walkingsData
    // console.log(props);
    // console.log(sortDate + " " + sortDistance);

    const [walkingAddForm, setWalkingAddForm] = useState(false);

    const walkingOpenForm = () => setWalkingAddForm(true);
    const walkingCloseForm = () => setWalkingAddForm(false);

    useEffect(() => {
        fetch("http://localhost:3000/walking")
            .then(response => response.json())
            .then(data => {
                addWalking(data);
            });
    }, []);

    function addNewWalking(date, distance) {
        addWalking([
            {
            id: walkingsData.length,
            date: date,
            distance: distance
            }
        ]); 
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
                    updateWalkings(walkingsData.sort((a, b) => a.date > b.date ? 1 : -1));
                    changeSortDate(false);
                }else {
                    updateWalkings(walkingsData.sort((a, b) => a.date < b.date ? 1 : -1));
                    changeSortDate(true);
                }                
            };

    function sortByDistance() {            
            if(sortDistance) {
                updateWalkings(walkingsData.sort((a, b) => a.distance > b.distance ? 1 : -1));
                changeSortDistance(false);
            } else {
                updateWalkings(walkingsData.sort((a, b) => a.distance < b.distance ? 1 : -1));
                changeSortDistance(true)
            }
          };


    return (
        <Context.Provider value={{ walkingOpenForm, walkingCloseForm, walkingAddForm, addNewWalking, walkingsData, sortByDate,  sortDate, sortDistance, sortByDistance }}>
        <Header marginBottom="0">Hello</Header>
        <Wrapper>
            <WalkingsBlock openForm={ walkingOpenForm } walkingsData={ walkingsData }/>
            <ChartBlock/>
        </Wrapper>
        </Context.Provider>  
    )
};
export default Home;