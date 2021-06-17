import React, { useEffect } from "react";
import styled from "styled-components";
import CardComics from "./cards/comics";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ComicsSel, isFetchComicsSel } from "../Redux/reducers/selector";
import { fetchComics } from "../Redux/actions/comic";
import Loading from "./loading";
import ErrorComics from "./errorComics";

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

  // DISPATCH ACTION COMICS TO REDUX
  useEffect(() => {
    dispatch(fetchComics(characterId));
  }, [dispatch]);

  const renderComics = listComics.map((comic, i) => {
    return (
      <Link
        to={`/comicChoose/${comic.id}`}
        style={{ textDecoration: "none" }}
        key={i}
      >
        <CardComics
          name={comic.title}
          img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          details={comic.description}
        />
      </Link>
    );
  });
  return (
    <ContainerComicsStyle>
      {" "}
      {isFetchComics && <Loading></Loading>}
      {renderComics}
      {!isFetchComics && !listComics?.length && <ErrorComics></ErrorComics>}
    </ContainerComicsStyle>
  );
};
export default ContainerComics;
