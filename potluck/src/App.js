import React, { createContext } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { UserContext } from './context/UserContext';

import './App.css';

import Login from "./components/Login";
import Header from './components/Header';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import PrivateRoute from "./utils/PrivateRoute";
import useLocalStorage from './hooks/useLocalStorage';


function App() {

  const [user, setUser] = useLocalStorage({
    username: '',
    password: '',
  })

return (
  <Router>
  <div className="App">
    <Header />
    <UserContext.Provider value={{user, setUser}}>
    
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard}/>
   
    </UserContext.Provider>
  </div>
</Router>
  );
}

export default App;
