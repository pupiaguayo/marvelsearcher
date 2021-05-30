import React from "react";
import styled from "styled-components";
import CardHero from "../cards/hero";
// styles Container Cards Comic
export const ContainerStyle = styled.header`
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 4vh auto;
  padding: 15px;
`;
// styles Container Cards Comic

const ContainerCards = () => {
  return (
    <ContainerStyle>
      <CardHero></CardHero>
      <CardHero></CardHero>
      <CardHero></CardHero>
      <CardHero></CardHero>
    </ContainerStyle>
  );
};
export default ContainerCards;
