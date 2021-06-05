import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardComics from "./cards/comics";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  ComicsSel,
  ComicsErrorSel,
  isFetchComicsSel,
} from "../Redux/reducers/selector";
import { fetchComics } from "../Redux/actions/comic";
import Loading from "./loading";
import ErrorCards from "./error";

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
  const dispatch = useDispatch();
  const isFetchComics = useSelector(isFetchComicsSel, shallowEqual);
  const listComics = useSelector(ComicsSel, shallowEqual);
  const errorComics = useSelector(ComicsErrorSel, shallowEqual);

  // DISPATCH ACTION COMICS TO REDUX
  useEffect(() => {
    dispatch(fetchComics(characterId));
  }, []);

  const renderComics = listComics.map((comic, i) => {
    return (
      <Link to={`/comicChoose/${comic.id}`} style={{ textDecoration: "none" }}>
        <CardComics
          name={comic.title}
          img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          details={comic.description}
          key={i}
        />
      </Link>
    );
  });
  return (
    <ContainerComicsStyle>
      {" "}
      {isFetchComics && <Loading></Loading>}
      {renderComics}
      {!isFetchComics && !listComics?.length && <ErrorCards></ErrorCards>}
    </ContainerComicsStyle>
  );
};
export default ContainerComics;
