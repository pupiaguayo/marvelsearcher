import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

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
      opacity: 1;
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
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();
  const searchHero = (e) => {
    setInputValue(e.target.value);
  };
  const submitHero = () => {
    history.push("/" + inputValue);
    setInputValue("");
  };
  return (
    <SearchBarStyle>
      <div className="LogoAndInput">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="https://i.ibb.co/w7H3zKQ/marvel-logo-4.png"
            alt="Logo Marvel"
          ></img>
        </Link>
        <form className="search" onSubmit={submitHero}>
          <i class="fas fa-search"></i>
          <input
            type="text"
            placeholder="Buscar"
            value={inputValue}
            onChange={searchHero}
          />
        </form>
      </div>
      <i class="far fa-star favourites"></i>
    </SearchBarStyle>
  );
};
export default SearchBar;
