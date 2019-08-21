import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    let Nav = styled.nav`
        display:flex;
        align-items:center;
        justify-content:center;
    `
    return (
        <Nav>
            <h1>TEAM BUILDER</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/form">Add Member</NavLink>
            </div>
        </Nav>
    );
}

export default NavBar;