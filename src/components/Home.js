import React, { useCallback, useEffect } from 'react';
import Wrapper from './styled-components/Wrapper'
import WalkingsBlock from '../containers/WalkingsBlock';
import Context from '../context';
import ChartBlock from '../containers/ChartBlock';
import Header from './Header';

function Home({ fetchWalkings, walkingsData, addWalking, updateWalking, deliteWalking, sortDate, sortDistance, changeSortDate, changeSortDistance, walkingAddForm, openWalkingForm, closeWalkingForm }) {
    
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
        fetch('https://my-json-server.typicode.com/PutilovDmitriy/json-server/walking/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ date: date, distance: parseFloat(distance) })
          });       
    };

    function changeWalking(id, i, walking) {
        updateWalking(i, walking)
        let url = 'https://my-json-server.typicode.com/PutilovDmitriy/json-server/walking/' + id;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify({ date: walking.date, distance: parseFloat(walking.distance) })
          });
    };
    
    function removeWalking(id) {
        deliteWalking(id);
        let url = 'https://my-json-server.typicode.com/PutilovDmitriy/json-server/walking/' + id;
        fetch(url, {
            method: 'DELETE'
          });
    };

    const sortByDate = () => (sortDate ===  null) ? changeSortDate(true) : changeSortDate(!sortDate);
    const sortByDistance =  () => (sortDistance === null) ? changeSortDistance(true) : changeSortDistance(!sortDistance);
    
    return (
        <Context.Provider value={{ openWalkingForm, closeWalkingForm, walkingAddForm, addNewWalking, changeWalking, removeWalking , walkingsData, sortByDate,  sortDate, sortDistance, sortByDistance }}>
        <Header/>
        <Wrapper>
            <WalkingsBlock walkingsData={ walkingsData }/>
            <ChartBlock walkingsData={ walkingsData } />
        </Wrapper>
        </Context.Provider>  
    )
};
export default Home;