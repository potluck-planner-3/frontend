import React from 'react';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SimpleSlider from './components/Photo'
import CreatePotluckForm from './components/CreatePotluckForm'
import './css/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import EventList from './components/EventList';

function App() {
	return (
		<Router>
			<div className="App" />
			<Nav />
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/CreatePotluckForm" component={CreatePotluckForm} />
			</Switch>
		<SimpleSlider/>
			<Footer />
		</Router>
	);
}

export default App;
