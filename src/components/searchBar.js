import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// styles SearchBar
export const SearchBarStyle = styled.header`
  grid-column: 1/-1;
  background-color: #fafafa;
  box-shadow: 0 2px 5px grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 1vw;
  .LogoAndInput {
    display: flex;
    align-items: center;
  }
  .search {
    margin-left: 3vw;
    font-size: 18px;
    opacity: 0.4;
  }
  .search input {
    margin-left: 0.8vw;
    background-color: #fafafa;
    outline: none;
    border: none;
  }
  .search:hover {
    opacity: 1;
    i {
      display: none;
    }
  }
  .LogoAndInput img {
    color: #20273e;
    height: 3.5vh;
    font-family: "Roboto Mono", monospace;
  }
  .favourites {
    margin-right: 5vw;
    opacity: 0.4;
  }
`;
// styles SearchBar

const SearchBar = () => {
  return (
    <SearchBarStyle>
      <div className="LogoAndInput">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="https://i.ibb.co/w7H3zKQ/marvel-logo-4.png"
            alt="Logo Marvel"
          ></img>
        </Link>
        <div className="search">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Buscar" />
        </div>
      </div>
      <i class="far fa-star favourites"></i>
    </SearchBarStyle>
  );
};
export default SearchBar;
