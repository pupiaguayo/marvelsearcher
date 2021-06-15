import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardHero from "./cards/hero";
import CardWelcome from "./cards/welcomeHero";
import { Link, useLocation } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  HeroesSel,
  isFetchHeroesSel,
  RandomHeroSel,
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
  const initHero = useSelector(RandomHeroSel, shallowEqual);
  const location = useLocation();
  const [name] = useState(location.pathname.substr(1));
  const randomNumber = Math.floor(Math.random() * (96 - 0)) + 0;
  // DISPATCH ACTION HEROES TO REDUX
  useEffect(() => {
    dispatch(fetchHeroes(name, randomNumber));
  }, [dispatch]);
  const HerosData = listHero.map((h) => {
    return (
      <Link to={`/HeroDetails/${h.id}`} style={{ textDecoration: "none" }}>
        <CardHero
          name={h.name}
          img={`${h.thumbnail.path}.${h.thumbnail.extension}`}
          button={<i class="far fa-star favourites"></i>}
          key={h.id}
        />
      </Link>
    );
  });
  const heroInit = initHero.map((heroWelcome) => {
    return (
      <CardWelcome
        name={heroWelcome?.name}
        img={`${heroWelcome?.thumbnail?.path}.${heroWelcome?.thumbnail?.extension}`}
        welcome="te da la bienvenida"
        key={heroWelcome?.id}
      />
    );
  });

  return (
    <ContainerStyle>
      {isFetchHeroes && <Loading></Loading>}
      {initHero[0] ? (
        <>
          {" "}
          {heroInit}
          {HerosData}
        </>
      ) : (
        <>{HerosData}</>
      )}
      {!isFetchHeroes && !listHero?.length && <ErrorCards></ErrorCards>}
    </ContainerStyle>
  );
};
export default ContainerCards;
