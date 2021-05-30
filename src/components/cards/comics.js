import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// styles Cards Comics
export const CardComicStyle = styled.div`
  margin-top: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  height: 16vh;
  width: 60vw;
  background-color: #fafafa;
  box-shadow: 0 2px 5px grey;
  display: flex;
  img {
    object-fit: cover;
    width: 9.375em;
    height: 16vh;
    border-radius: 5px;
  }
  .detailsComic {
    padding: 15px;
  }
  .detailsComic p {
    color: black;
    margin-top: 15px;
  }
  @media (max-width: 575.98px) {
    width: 80vw;
  }
`;
// styles Cards Comics

const CardComics = () => {
  return (
    <Link to="/comicChoose" style={{ textDecoration: "none" }}>
      <CardComicStyle>
        <img
          src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt=""
        />
        <div className="detailsComic">
          <h2>Comic Name</h2>
          <p>Comic Details</p>
        </div>
      </CardComicStyle>
    </Link>
  );
};
export default CardComics;
