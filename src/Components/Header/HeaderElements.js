import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

export const HeaderContainer = styled.nav`
  padding: 0 0 0 15%;
`;
export const HeaderlargeText = styled.nav`
  font-weight: 900;
  color: #454545;
  font-size: 8.5rem;
  text-transform: capitalize;
  letter-spacing: 0.8rem;
  position: absolute;
`;
export const HeadersmallText = styled.nav`
    color: #c0bcbc;
    position: absolute;
    bottom: 30%;
    width: 35%;
    line-height: 1.5rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 55%;
  height: 130px;
  background-color: #fddcdd9e;
  color: #454545;
`;

export const Column = styled.nav`
  display: flex;
  ${"" /* align-items: center; */}
  flex-direction: column;
  justify-content: center;
  padding-left: 25%;
`;
export const BoldText = styled.nav`
  font-weight: 900;
`;
export const RegText = styled.nav``;

export const ArrowIcon = styled(BsArrowRight)`
  color: #454545;
  font-size: 45px;
`;
