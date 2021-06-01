import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardComics from "./cards/comics";
import { useParams } from "react-router-dom";
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
  const { characterId } = useParams();
  const [listComics, setListComics] = useState([]);
  const BASE_PATH = `http://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=53666d04ca6b65987f21c8e9a9deebcd&hash=ddd453cff5252b8060fc56d995faf28a`;
  // API CALL
  const GetComics = async () => {
    try {
      const data = await fetch(`${BASE_PATH}`);
      const allComics = await data.json();
      const items = allComics.data.results;
      setListComics(items);
      console.log(items);
    } catch {
      console.log("error API");
    }
  };

  // API CALL
  useEffect(() => {
    GetComics();
  }, []);

  const renderComics = listComics.map((comic) => {
    return (
      <CardComics
        name={comic.name}
        img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        key={comic.id}
      />
    );
  });
  return <ContainerComicsStyle>{renderComics}</ContainerComicsStyle>;
};
export default ContainerComics;
