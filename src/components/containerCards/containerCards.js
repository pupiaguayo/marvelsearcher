import React, { useState, useEffect } from "react";
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
  const [listHero, setListHero] = useState([]);
  // API CALL
  const GetHeros = async () => {
    try {
      const data = await fetch(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=53666d04ca6b65987f21c8e9a9deebcd&hash=ddd453cff5252b8060fc56d995faf28a`
      );
      const elementos = await data.json();
      setListHero(elementos.data.results);
      console.log(elementos.data.results);
    } catch {
      console.log("error API");
    }
  };

  // API CALL
  useEffect(() => {
    GetHeros();
  }, []);

  const HerosData = listHero.map((h) => {
    return (
      <CardHero
        name={h.name}
        img={`${h.thumbnail.path}.${h.thumbnail.extension}`}
        key={h.id}
      />
    );
  });
  return <ContainerStyle>{HerosData}</ContainerStyle>;
};
export default ContainerCards;
