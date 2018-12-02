import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Sign In</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/fetchdata">API Consumption</NavLink>
      </li>
      <li>
        <NavLink to="/fetchdatatwo">API Consumption Two</NavLink>
      </li>
      <li>
        <NavLink to="/webshop">Webshop</NavLink>
      </li>
    </ul>

  );
};

export default SignedOutLinks;
