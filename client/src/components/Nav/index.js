import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { BsGithub } from 'react-icons/bs';
import "../../styles/Nav.css";

function Nav() {
  return (
    <>
      <header>
        <h1>AURA travel</h1>
      </header>
      <nav>
        <ul>
          <Link to="/login" className="buttonNav">
            Login
          </Link>
          <Link to="/" className="buttonNav">
            Home
          </Link>
          <Link to="/profile" className="buttonNav">
            Profile
          </Link>
          <Link to="/tools" className="buttonNav">
            Tools{" "}
          </Link>
        </ul>
      </nav>
      <footer>
        {/* <p> &copy; Made with love...&hearts;</p> */}
        <div className="icon">
        <a href="https://github.com/jswearingen18" target='blank' className="icon"> <BsGithub /> </a>
        <a href="https://github.com/shelbybridwell" target='blank' className="icon"> <BsGithub /> </a>
        <a href="https://github.com/davidherring1998" target='blank' className="icon"> <BsGithub /> </a>
        <a href="https://github.com/baelindsay" target='blank' className="icon"> <BsGithub /> </a>
        </div>
        <p> &copy; Made with love...&hearts;</p>
      </footer>
    </>
  );
}

export default Nav;
