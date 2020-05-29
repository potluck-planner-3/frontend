import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { UserContext } from "./context/UserContext";
import { ItemContext } from './context/ItemContext';
// import { PotluckContext } from './context/PotluckContext';

import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import CreatePotluck from "./components/CreatePotluck"

import PrivateRoute from "./utils/PrivateRoute";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  //user state
  const [user, setUser] = useLocalStorage({
    username: "",
    password: "",
  });

  //potluck state
  const [potlucks, setPotlucks] = useState([]);

  const [editPotlucks, setEditPotlucks] = useState({
    title: "",
    where: "",
    date: "",
    items: [],
  });

  //item state
  const [item, setItem] = useState([]);

  const [editItem, setEditItem] = useState({
    item: "",
    guest: "",
  });

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          {/* <PotluckContext.Provider
            value={{ potlucks, setPotlucks, editPotlucks, setEditPotlucks }}
          > */}
            <ItemContext.Provider
              value={{ item, setItem, editItem, setEditItem }}
            >
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/create-potluck" component={CreatePotluck}/>
            </ItemContext.Provider>
          {/* </PotluckContext.Provider> */}
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
