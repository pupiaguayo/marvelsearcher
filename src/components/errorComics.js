import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// styles error
export const ErrorComicStyle = styled.div`
  margin-top: 6vh;
  color: red;
  text-decoration: none;
  height: 10vh;
  border-radius: 8px;
  margin-bottom: 1.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  h2 {
    text-transform: uppercase;
    width: 100%;
  }
  p {
    margin-top: 2vh;
  }
  .anotherSearch {
    font-weight: bold;
  }
`;
// styles Loading
const ErrorComics = () => {
  return (
    <ErrorComicsStyle>
      <h2>Resultado no encontrado</h2>
      <p className="anotherSearch">Comics no disponibles</p>
    </ErrorComicsStyle>
  );
};
export default ErrorComics;
