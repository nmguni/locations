import React from "react";
import {
  HeaderContainer,
  HeaderlargeText,
  HeadersmallText,
  GridContainer,
  Column,
  BoldText,
} from "./HeaderElements";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        {/* vertival line *** */}
        <HeaderlargeText>
          jigokudani <br /> monkey
        </HeaderlargeText>
        <HeadersmallText>
          The Jigokudani monkey park, covered with snow almost one-third of the
          year, is home to Japan’s famous hot-spring-bathing snow monkeys and
          has become a major attraction. You can take the best pictures in
          winter, but the monkeys bathe all year round, and the area is quite
          beautiful in summer and autumn.
        </HeadersmallText>
        <GridContainer>
          <Column>
            Jigokudani Snow <BoldText> Monkey Park </BoldText>
          </Column>

          <Column>
            {" "}
            Hirao, Yamanochi, <BoldText>Nagano, Japan</BoldText>
          </Column>

          <Column
            style={{
              display: "flex",
              alignItems: " center",
              // justifyContent: " flex-end",
            }}
          >
            ---
          </Column>
        </GridContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
