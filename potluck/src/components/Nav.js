import React from "react";

const Nav = props => {
  return (
    <div>
        <h1>Potluck Planner</h1>
      <h2>Welcome, {props.user} </h2>
   {/* link marketing page here */}
      <button>Learn More! </button>
      <button> sign out </button>
    </div>
  );
};

export default Nav;