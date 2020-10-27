import React from "react";
import {
  Nav,
  LogoColor,
  NavLogo,
  LogoLink,
  NavLinks,
  Links,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo>
          <LogoLink to="/">
            japa<LogoColor>n</LogoColor>
          </LogoLink>
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
