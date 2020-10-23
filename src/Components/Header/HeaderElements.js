import styled from "styled-components";

export const HeaderContainer = styled.nav`
  padding: 0 0 0 15%;
`;
export const HeaderlargeText = styled.nav`
  font-weight: 900;
  font-size: 8.5rem;
  text-transform: capitalize;
  letter-spacing: 0.8rem;
  position: absolute;
`;
export const HeadersmallText = styled.nav`
    color: #c0bcbc;
    position: absolute;
    bottom: 20%;
    width: 34%;
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
  background-color: #fddcdd;
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
