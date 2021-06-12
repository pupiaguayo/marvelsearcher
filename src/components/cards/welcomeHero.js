import React from "react";
import styled from "styled-components";

// styles Cards Hero
export const CardWelcomeStyle = styled.div`
  width: 80vw;
  height: 50vh;
  grid-column: 1 / -1;
  background-color: #fafafa;
  box-shadow: 0 2px 5px grey;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    object-position: center;
    width: 80vw;
    height: 50vh;
    filter: contrast(200%) brightness(30%);
  }
  h2 {
    text-transform: uppercase;
    position: absolute;
    color: #f40911;
    font: 0.5em;
    margin: auto;
  }
  h3 {
    text-transform: uppercase;
    position: absolute;
    color: white;
    font: 0.8em;
    margin-top: 10vh;
    letter-spacing: 3px;
  }
  button {
    position: absolute;
    margin-top: 25vh;
    width: 100px;
    height: 40px;
  }
  :hover {
    box-shadow: 5px 8px 5px black;
  }
`;
// styles Cards Hero

const CardWelcome = (hero) => {
  return (
    <CardWelcomeStyle>
      <img src={hero.img} alt="Img Hero" />
      <h2>{hero.name} </h2>
      <h3>TE DA LA BIENVENIDA</h3>
    </CardWelcomeStyle>
  );
};
export default CardWelcome;
