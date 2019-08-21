import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <p>TEAM BUILDER</p>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/form">Add Member</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;