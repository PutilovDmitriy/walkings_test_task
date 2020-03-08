import React, { useCallback, useEffect } from 'react';
import Wrapper from './styled-components/Wrapper'
import WalkingsBlock from './WalkingsBlock/WalkingsBlock';
import Context from '../context';
import ChartBlock from './ChartBlock/ChartBlock';
import Header from './Header';

function Home({ fetchWalkings, walkingsData, addWalking, deliteWalking, sortDate, sortDistance, changeSortDate, changeSortDistance, walkingAddForm, openWalkingForm, closeWalkingForm }) {
    
    const initFetch = useCallback(() => {
        fetchWalkings();
    },[fetchWalkings]);

    useEffect(() => { 
        initFetch();
    }, [initFetch]);
    
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
    function removeWalking(id) {
        deliteWalking(id);
        let url = 'http://localhost:3000/walking/' + id;
        fetch(url, {
            method: 'DELETE'
          });
    };

    const sortByDate = () => (sortDate ===  null) ? changeSortDate(true) : changeSortDate(!sortDate);
    const sortByDistance =  () => (sortDistance === null) ? changeSortDistance(true) : changeSortDistance(!sortDistance);
    
    return (
        <Context.Provider value={{ openWalkingForm, closeWalkingForm, walkingAddForm, addNewWalking, walkingsData, sortByDate,  sortDate, sortDistance, sortByDistance }}>
        <Header/>
        <Wrapper>
            <WalkingsBlock walkingsData={ walkingsData }/>
            <ChartBlock/>
        </Wrapper>
        </Context.Provider>  
    )
};
export default Home;