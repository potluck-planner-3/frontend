import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// This is the navigation for the home & form page
export default function Nav() {
	return (
		<div className="navBar">
			

			<ul>
				<Link to={'/'}> Home </Link>
			</ul>
			<ul>
				<Link to={'/CreatePotluckForm'}> Create Potluck </Link>
			</ul>
		</div>
	);
}
