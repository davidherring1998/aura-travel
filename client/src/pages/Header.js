import React from "react";
import logo from "./client/public/Aura-black.png";

console.log(logo);

function Header() {
    return <img src={logo} alt="Logo" />;
}

export default Header;