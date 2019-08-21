import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <h1>TEAM BUILDER</h1>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/form">Add Member</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;