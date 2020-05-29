import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
//UUID (Universal Unique Identifier) is used to uniquely identify some object

// set team members value
const teamMembers = [
	{ id: uuid(), name: 'Mike', lastName: 'Judge', isBringing: 'is bringing ', foodType: 'wings' },
	{ id: uuid(), name: 'Buck', lastName: 'Strickland', isBringing: 'is bringing ', foodType: 'steak' },
	{ id: uuid(), name: 'Hank', lastName: 'Hill', isBringing: 'is bringing ', foodType: 'beer' },
	{ id: uuid(), name: 'Dale', lastName: 'Gribble', isBringing: 'is bringing ', foodType: 'cake' }
];
//setting state
function DummyData() {
	const [ members, setMembers ] = useState(teamMembers);
	const [ value, setValue ] = useState({
		name: '',
		lastName: '',
		isBringing: 'is bringing ',
		foodType: ''
	});

	const inputChange = (e) => {
		const changeName = e.target.name;
		const changeValue = e.target.value;

		setValue({ ...value, [changeName]: changeValue });
	};

	const formSubmit = (e) => {
		e.preventDefault(); //prevents pages from autorefreshing

		let newMember = {
			id: uuid(),
			name: value.name,
			lastName: value.lastName,
			isBringing: value.isBringing,
			foodType: value.foodType
		};

		//  The spread operator can be used to take an
		// existing array and add another element to it while still preserving the original array
		setMembers([ ...members, newMember ]);
	};

	/*this maps through the team member data and outputs it to the screen */
	return (
		<div className="container">
			<div className="list">
				<p>Feel free to share with other what you're bringing to your potluck!</p>
				<ul>
					{members.map((value) => (
						<ul key={value.id}>
							{value.name} {value.lastName} {value.isBringing}
							{value.foodType}
						</ul>
					))}
				</ul>
			</div>
	
				<form onSubmit={formSubmit}>
				<div className="formTwo">
				<label>
						First Name
						<input name="name" placeholder="" value={value.name} onChange={inputChange} required />
					</label>

					<br/>

					<label>
						Last Name
						<input name="lastName" placeholder="" value={value.lastName} onChange={inputChange} required />
					</label>
					<br/>

					<label>
					<br/>
					What are you bringing to your potluck?
					<br/>
						<textarea
							name="foodType"
							placeholder=""
							value={value.foodType}
							onChange={inputChange}
							required
						/>
						
					</label></div>
					

					<input className="button" type="submit" />
				</form>
			</div>
		
	);
}

export default DummyData;
