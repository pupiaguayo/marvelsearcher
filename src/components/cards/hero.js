import React from "react";
import styled from "styled-components";
// styles Cards Hero
export const CardStyle = styled.div`
  width: 246px;
  height: 370px;
  grid-column: 1 / span 1;
  background-color: #fafafa;
  box-shadow: 0 2px 5px grey;
  margin: 15px;
  display: flex;
  align-items: flex-end;
  img {
    object-fit: cover;
    width: 246px;
    height: 370px;
  }
  h2 {
    position: absolute;
    padding: 20px;
    font-size: 1.2em;
    color: white;
    background-color: rgba(46, 49, 49, 0.7);
    width: 206px;
    height: 25px;
  }
  button {
    position: absolute;
    background-color: transparent;
    border: none;
    height: 20px;
    width: 20px;
    margin-bottom: 340px;
    margin-left: 220px;
    i {
      color: #ffffff;
    }
  }

  :hover {
    box-shadow: 5px 8px 5px black;
  }
`;
// styles Cards Hero

const CardHero = (hero) => {
  return (
    <CardStyle>
      <img src={hero.img} alt="Img Hero" />
      <h2>{hero.name}</h2>
      <button>{hero.button}</button>
    </CardStyle>
  );
};
export default CardHero;
