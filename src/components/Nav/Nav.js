import React from "react";

const Nav = props => (
  <nav className="navbar navbar-dark bg-success text-white">
    <a className="navbar-brand">
      Clicky Game
    </a>
    <span className="navbar-text float-right">
      Score: {props.score}
    </span>
  </nav>
);

export default Nav;
