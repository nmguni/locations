import styled from "styled-components";

export const Nav = styled.nav`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  font-weight: bold;
`;

export const NavLogo = styled.div`
  font-weight: 900;
`;
export const LogoLink = styled.div`
  color: #454545;
  font-weight: 900;
`;

export const LogoColor = styled.span`
  color: #a30505;
`;
export const NavLinks = styled.div`
  display: flex;
`;

export const Links = styled.div`
  text-decoration: none;
  padding: 0 0.8rem;
  color: #454545;
  font-weight: 700;
  &:nth-child(2) {
    color: #c4c4c4;
  }
`;
