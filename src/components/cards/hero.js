import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    font-size: 1em;
    color: white;
  }
  :hover {
    box-shadow: 0 8px 5px grey;
  }
`;
// styles Cards Hero

const CardHero = (hero) => {
  return (
    <Link to="/heroDetails" style={{ textDecoration: "none" }}>
      <CardStyle>
        <img src={hero.img} alt="" />
        <h2>{hero.name}</h2>
      </CardStyle>
    </Link>
  );
};
export default CardHero;
