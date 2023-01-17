import React from "react";
import { NavLink } from "react-router-dom";

// Add basic styling for NavLinks
const LinkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
    return(
      <div>
        {/* <h1>Navigation Bar</h1> */}
        <NavLink
          exact // only set active style when the route is deeply equal to th
          to="/"
          style={LinkStyles}
          activeStyle={{ background: "darkblue" }}
        >
          Home
        </NavLink>
  
        <NavLink
          exact // only set active style when the route is deeply equal to th
          to="/about"
          style={LinkStyles}
          activeStyle={{ background: "darkblue" }}
        >
          About
        </NavLink>
  
        <NavLink
          exact // only set active style when the route is deeply equal to th
          to="/login"
          style={LinkStyles}
          activeStyle={{ background: "darkblue" }}
        >
          Login
        </NavLink>
  
        <NavLink
          exact // only set active style when the route is deeply equal to th
          to="/signup"
          style={LinkStyles}
          activeStyle={{ background: "darkblue" }}
        >
          SignUp
        </NavLink>
  
        <NavLink
          exact // only set active style when the route is deeply equal to th
          to="/messages"
          style={LinkStyles}
          activeStyle={{ background: "darkblue" }}
        >
          Messages
        </NavLink>
      </div>
    )
}
  

export default NavBar;