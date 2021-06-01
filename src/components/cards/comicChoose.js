import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
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
  const [comic, setComic] = useState([]);
  // API CALL
  const ComicSelect = async () => {
    try {
      const data = await fetch(
        `http://gateway.marvel.com/v1/public/comics/${comicId}?&ts=1&apikey=53666d04ca6b65987f21c8e9a9deebcd&hash=ddd453cff5252b8060fc56d995faf28a`
      );
      const comicData = await data.json();
      const comicItem = comicData.data.results;
      setComic(comicItem);
      console.log(comicItem);
    } catch {
      console.log("error API");
    }
  };
  useEffect(() => {
    ComicSelect();
  }, []);
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
  return <ComicChooseStyle>{comicPage}</ComicChooseStyle>;
};
export default ComicChoose;
