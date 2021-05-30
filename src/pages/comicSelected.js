import React from "react";
import ComicChoose from "../components/cards/comicChoose";
import SearchBar from "../components/searchBar";

const ComicSelected = () => {
  return (
    <React.Fragment>
      <SearchBar></SearchBar>
      <ComicChoose></ComicChoose>
    </React.Fragment>
  );
};
export default ComicSelected;
