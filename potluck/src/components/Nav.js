import React from "react";

const Nav = props => {
  return (
    <div>
      <h2>Welcome, {props.user} </h2>
      <button> sign out </button>
    </div>
  );
};

export default Nav;