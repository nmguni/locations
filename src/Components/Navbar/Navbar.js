import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavLogo, LogoLink, NavLinks, Links } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo>
          <LogoLink to="/">japan</LogoLink>
        </NavLogo>
        <NavLinks>
          <Links to="/">places</Links>
          <Links to="/">about</Links>
        </NavLinks>
      </Nav>
    </>
  );
};

export default Navbar;
