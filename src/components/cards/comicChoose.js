import React from "react";
import styled from "styled-components";
// styles Comic Choose
export const ComicChooseStyle = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  img {
    object-fit: contain;
    width: 28vw;
    padding: 15px;
    border-radius: 5px;
  }
  .detailsComic {
    padding: 15px;
    width: 40vw;
  }
  .detailsComic h2 {
    color: #3e3e3e;
    font-weight: bold;
    font-size: 2.1875em;
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
  }
`;
// styles comic Choose

const ComicChoose = () => {
  return (
    <ComicChooseStyle>
      <img
        src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt=""
      />
      <div className="detailsComic">
        <h2>Comic Name</h2>
        <p className="comicDates">Comic Dates</p>
        <p className="comicDetails">Comic Details</p>
      </div>
    </ComicChooseStyle>
  );
};
export default ComicChoose;
