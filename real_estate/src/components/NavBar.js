import React from "react";

const NavBar = (props) => {
  return (
    <>
      <div className="Nav">Navbar Works!</div>
      {props.children}
    </>
  );
};

export default NavBar;
