import React from "react";
import ContainerCards from "../components/containerCards/containerCards";
import SearchBar from "../components/searchBar";
const PageHome = () => {
  return (
    <React.Fragment>
      <SearchBar></SearchBar>
      <ContainerCards></ContainerCards>
    </React.Fragment>
  );
};
export default PageHome;
