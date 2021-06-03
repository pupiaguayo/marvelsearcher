import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardHero from "./cards/hero";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [name, setName] = useState(location.pathname.substr(1));
  // API CALL
  const GetHeros = async () => {
    let URL;
    if (name.trim() !== "") {
      URL = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&orderBy=name&limit=96&ts=1&apikey=53666d04ca6b65987f21c8e9a9deebcd&hash=ddd453cff5252b8060fc56d995faf28a`;
    } else {
      URL = `http://gateway.marvel.com/v1/public/characters?&orderBy=name&limit=96&ts=1&apikey=53666d04ca6b65987f21c8e9a9deebcd&hash=ddd453cff5252b8060fc56d995faf28a`;
    }
    try {
      const data = await fetch(`${URL}`);
      const elementos = await data.json();
      setListHero(elementos.data.results);
      setName("");
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
      <Link to={`/HeroDetails/${h.id}`} style={{ textDecoration: "none" }}>
        <CardHero
          name={h.name}
          img={`${h.thumbnail.path}.${h.thumbnail.extension}`}
          key={h.id}
        />
      </Link>
    );
  });
  return <ContainerStyle>{HerosData}</ContainerStyle>;
};
export default ContainerCards;
