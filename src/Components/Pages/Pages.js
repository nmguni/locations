import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { Image } from "../Image";
import { GridContainer, Cols } from "./PagesElements";

const Pages = () => {
  return (
    <>
      <GridContainer>
        <Cols>
          {" "}
          <Navbar />
          <Header />
        </Cols>
        <Cols>
          {" "}
          <Image />
        </Cols>
      </GridContainer>
    </>
  );
};

export default Pages;
