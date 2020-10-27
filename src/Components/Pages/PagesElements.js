import styled from "styled-components";
import monkey from "../../images/monkey.jpg";
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  height: 100vh;
`;

export const Cols = styled.div``;

export const ImageContainer = styled.div`
  background-image: url(${monkey});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
