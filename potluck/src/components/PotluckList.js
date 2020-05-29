import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components'

import PotluckCard from './PotluckCard';
// import { PotluckContext } from '../context/PotluckContext';


const PotluckList = () => {

    const [potlucks, setPotlucks] = useState([]);

// const [editPotlucks, setEditPotlucks] = useState({
//   title: "",
//   where: "",
//   date: "",
//   items: [],
// });

    // const {setPotlucks, potlucks} = useContext(PotluckContext)
    

    useEffect(() => {
        axiosWithAuth()
        .get(`/api/potlucks`)
        .then(response => {
            console.log('response', response.data)
            setPotlucks(response.data);
            console.log('set potlucks', potlucks)
            // console.log(JSON.stringify(response.data))
        })
        .catch(error => {
            console.log('uhoh, error fetching potlucks', error)
        })
    }, []);

    return (
        <div className='potlucks-list'>
            <Link to='/add-potlucks'> <CreateButton className='addPotluckButton'>Create New Potluck</CreateButton> </Link>
       
            <List>
            
            {/* {potlucks.map(potluck => (
             
            //    <PotluckCard
            //         key={potluck.id}
            //         id={potluck.id}
            //         title={potluck.name}
            //         location={potluck.where}
            //         date={potluck.date}
            //         category={potluck.category}
            //     /> */}
            {/* ))}   */}
            </List>      
        </div>
    )
}

const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-content: center;
opacity: 90%;
`

const CreateButton  = styled.button`
color: tan;
background-color: #914d20;
border-radius: 10px;
border: 1px solid tan;
padding: 10px;
margin: 10px 10px`
export default PotluckList;