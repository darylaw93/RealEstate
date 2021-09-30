import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <div className="Nav">
        <span className="NavContent">
          <Link to="/">Home</Link>
        </span>
        <span className="NavContent">
          <Link to="/about">About</Link>
        </span>
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default NavBar;
