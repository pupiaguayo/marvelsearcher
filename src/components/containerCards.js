import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardHero from "./cards/hero";
import { Link, useLocation } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  HeroesSel,
  HeroesErrorSel,
  isFetchHeroesSel,
} from "../Redux/reducers/selector";
import { fetchHeroes } from "../Redux/actions/heroes";
import Loading from "./loading";
import ErrorCards from "./error";
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
  const isFetchHeroes = useSelector(isFetchHeroesSel, shallowEqual);
  const listHero = useSelector(HeroesSel, shallowEqual);
  const errorHeroes = useSelector(HeroesErrorSel, shallowEqual);
  const location = useLocation();
  const [name, setName] = useState(location.pathname.substr(1));

  // DISPATCH ACTION HEROES TO REDUX
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
  const HerosError = () => {
    return <ErrorCards></ErrorCards>;
  };
  return (
    <ContainerStyle>
      {isFetchHeroes && <Loading></Loading>}
      {HerosData}
      {!isFetchHeroes && !listHero?.length && <ErrorCards></ErrorCards>}
    </ContainerStyle>
  );
};
export default ContainerCards;
