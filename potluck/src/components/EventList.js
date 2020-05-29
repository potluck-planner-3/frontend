// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import EventCard from './EventCard';



// const PotluckList = () => {
// 	const [ potluck, setPotlucks ] = useState([]);

// 	useEffect(() => {
// 		axios
// 			.get('https://reqres.in/api/users?page=2')
// 			.then((response) => setPotlucks(response.data.results))
// 			.catch((error) => console.log('ERROR', error));
// 	}, []);

// 	return (
// 		<div className="PotluckCard">
			
// 			<div className="potluck-container">
// 				{potluck.map((potluck) => (
// 					<EventCard
// 						id={potluck.id}
// 						first_name={potluck.first_name}
// 						last_name={potluck.last_name}
// 						avatar={potluck.avatar}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default PotluckList;
