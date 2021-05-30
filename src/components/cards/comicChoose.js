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
    width: 40vw;
    height: 80vh;
    border-radius: 5px;
  }
  .descriptionComic {
    border: 1px solid red;
    width: 40vw;
    height: 80vh;
  }
  @media (max-width: 575.98px) {
    img {
      object-fit: contain;
      width: 80vw;
      height: 80vh;
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
        <p>Comic Details</p>
      </div>
    </ComicChooseStyle>
  );
};
export default ComicChoose;
