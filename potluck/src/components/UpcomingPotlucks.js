import react, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from 'styled-components';
import PotluckCard from './PotluckCard';


const data = [
  {
    host: "ranim",
    id: "1",
    location: "address",
    date: "date",
    food: [
      {
        guest: "rob",
        itemName: "potato salad",
        category: "side",
        id: "1",
      },
    ],
  },
];

const UpcomingPotlucks = () =>  {
    const [potlucks, setPotlucks] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('api/potlucks')
        .then(res => {
            console.log('res here!', res)
            setPotlucks(res.data);
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    return(
        <div className="potluck-list">
             <Link to='/add-potluck'> <AddButton className='addPotluck'>Add Potluck</AddButton> </Link>

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

const AddButton  = styled.button`
color: blue;
background-color: yellow;
border-radius: 10px;
border: 1px solid green;
padding: 10px;
margin: 10px 10px`

export default UpcomingPotlucks;