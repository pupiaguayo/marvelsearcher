import React from "react";
import ContainerComics from "../components/containerComics";
import SearchBar from "../components/searchBar";
const HeroDetails = () => {
  return (
    <React.Fragment>
      <SearchBar></SearchBar>
      <ContainerComics></ContainerComics>
    </React.Fragment>
  );
};
export default HeroDetails;
