import React from "react";
import styled from "styled-components";

// styles Loading
export const ErrorStyle = styled.div`
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
const ErrorCards = () => {
  return (
    <ErrorStyle>
      <h2>Resultado no encontrado</h2>
      <p className="anotherSearch">Por favor intente con otra busqueda</p>
      <p>Por ejemplo: Spider-Man</p>
    </ErrorStyle>
  );
};
export default ErrorCards;
