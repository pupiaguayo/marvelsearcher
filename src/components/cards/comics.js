import React from "react";
import styled from "styled-components";
// styles Cards Comics
export const CardComicStyle = styled.div`
  margin-top: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  height: auto;
  width: 60vw;
  background-color: #fafafa;
  box-shadow: 0 2px 5px grey;
  display: flex;
  img {
    object-fit: cover;
    width: 8em;
    border-radius: 5px;
  }
  .detailsComic {
    padding: 15px;
  }
  .detailsComic h2 {
    font-size: 1.5em;
    color: #505050;
    font-weight: bold;
  }
  .detailsComic p {
    color: black;
    margin-top: 15px;
  }
  @media (max-width: 575.98px) {
    .detailsComic h2 {
      font-size: 1em;
    }
  }
`;
// styles Cards Comics

const CardComics = (Comic) => {
  return (
    <CardComicStyle>
      <img src={Comic.img} alt="" />
      <div className="detailsComic">
        <h2>{Comic.name}</h2>
        <p>{Comic.details}</p>
      </div>
    </CardComicStyle>
  );
};
export default CardComics;
