import React from "react";
import "../../styles/Nav.css";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <h1>Aura Travel</h1>

      </header>
      <nav>
        <ul>
          <li> Login </li>
          <li> Home </li>
          <li> Profile </li>
          <li> Tools </li>
        </ul>
      </nav>
      <footer>Footer Content Here</footer>
    </>
  )
}

export default Nav;
