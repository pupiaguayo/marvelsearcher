import React from "react";
import styled from "styled-components";
import CardComics from "../cards/comics";
// styles Container Cards
export const ContainerComicsStyle = styled.header`
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 4vh auto;
  padding: 15px;
`;
// styles Container Cards

const ContainerComics = () => {
  return (
    <ContainerComicsStyle>
      <CardComics></CardComics>
      <CardComics></CardComics>
      <CardComics></CardComics>
      <CardComics></CardComics>
    </ContainerComicsStyle>
  );
};
export default ContainerComics;
