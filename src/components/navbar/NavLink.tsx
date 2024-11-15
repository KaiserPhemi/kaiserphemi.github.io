// react libraries
import React, { useState, useEffect } from "react";

import { NavLinkProps } from "./NavBar.interface";

/**
 * 
 * @param param0 
 * @returns 
 */
 const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className="nav-link">
    {children}
  </a>
);

export default NavLink;
