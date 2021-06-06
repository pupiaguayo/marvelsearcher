import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  ComicChooseSel,
  ComicChooseErrorSel,
  isFetchComicChooseSel,
} from "../../Redux/reducers/selector";
import { fetchComicChoose } from "../../Redux/actions/comicChoose";
import Loading from "../loading";
import ErrorComics from "../error";
// styles Comic Choose
export const ComicChooseStyle = styled.div`
  grid-column: 1/-1;
  .detailsComic {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 100px;
    width: 100vw;
  }
  img {
    object-fit: contain;
    width: 30vw;
    height: auto;
    padding: 15px;
    border-radius: 5px;
  }
  .detailsComic h2 {
    color: #3e3e3e;
    font-weight: bold;
    font-size: 2em;
  }
  .infoComic {
    padding: 15px;
    width: 40vw;
  }
  .comicDates {
    color: #3e3e3e;
    font-weight: bold;
    padding-top: 40px;
  }
  .comicDetails {
    color: #3e3e3e;
    padding-top: 40px;
  }
  @media (max-width: 575.98px) {
    img {
      object-fit: contain;
      width: 80vw;
    }
    .detailsComic {
      flex-direction: column;
      margin: 10px auto;
    }
    .infoComic,
    img {
      margin: auto;
      width: 80vw;
    }
  }
`;
// styles comic Choose

const ComicChoose = () => {
  const { comicId } = useParams();
  const dispatch = useDispatch();
  const isFetchComicChoose = useSelector(isFetchComicChooseSel, shallowEqual);
  const comic = useSelector(ComicChooseSel, shallowEqual);

  useEffect(() => {
    dispatch(fetchComicChoose(comicId));
  }, [dispatch]);

  const comicPage = comic.map((item, i) => {
    return (
      <div className="detailsComic">
        <img
          src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          alt="Image Comic"
        />
        <div className="infoComic">
          <h2>{item.title}</h2>
          <p className="comicDates">
            {new Date(item.dates[i].date).toLocaleDateString()}
          </p>
          <p className="comicDetails">{item.description}</p>
        </div>
      </div>
    );
  });
  return (
    <ComicChooseStyle>
      {" "}
      {isFetchComicChoose && <Loading></Loading>}
      {comicPage}
      {!isFetchComicChoose && !comic?.length && <ErrorComics></ErrorComics>}
    </ComicChooseStyle>
  );
};
export default ComicChoose;
