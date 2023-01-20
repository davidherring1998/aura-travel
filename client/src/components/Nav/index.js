import React from "react";
import "../../styles/Nav.css";

import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <h1>Aura Travel</h1>
      </header>
      <nav>
        <ul>
          <button className="buttonNav">
            <li> Login </li>
          </button>
          <button className="buttonNav">
            <li> Home </li>
          </button>
          <button className="buttonNav">
            <li> Profile </li>
          </button>
          <button className="buttonNav">
            <li> Tools </li>
          </button>
        </ul>
      </nav>
      <footer>
        <a
          href="https://github.com/jswearingen18"
          className="fa fa-github icons"
        >
          Github
        </a>
      </footer>
    </>
  );
}

export default Nav;
