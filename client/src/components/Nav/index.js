import React from "react";
import "../../styles/Nav.css";

import Auth from "../../utils/auth";
 import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
      </header>
      <nav>
        <ul>
          <li> Login </li>
          <li> Home </li>
          <li> Profile </li>
          <li> Tools </li>
        </ul>
      </nav>
      <footer>
        <a
          href="https://github.com/jswearingen18"
          className="fa fa-github icons"
        ></a>
      </footer>
    </>
  );
}

export default Nav;
