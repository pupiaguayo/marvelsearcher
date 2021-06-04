import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardHero from "./cards/hero";
import { Link, useLocation } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHeroesSel } from "../Redux/reducers/selector";
import { fetchHeroes } from "../Redux/actions/heroes";
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
  const dispatch = useDispatch();
  const listHero = useSelector(fetchHeroesSel, shallowEqual);
  // const [listHero, setListHero] = useState([]);
  const location = useLocation();
  const [name, setName] = useState(location.pathname.substr(1));
  console.log(listHero);
  useEffect(() => {
    dispatch(fetchHeroes(name));
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
