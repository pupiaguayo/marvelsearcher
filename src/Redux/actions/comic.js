import { createAction } from "@reduxjs/toolkit";
export const START_FETCH_COMICS = "START_FETCH_COMICS";
export const ERROR_FETCH_COMICS = "ERROR_FETCH_COMICS";
export const SUCCESS_FETCH_COMICS = "SUCCESS_FETCH_COMICS";

export const startFetchComics = createAction(START_FETCH_COMICS);
export const errorFetchComics = createAction(ERROR_FETCH_COMICS);
export const sucessFetchComics = createAction(SUCCESS_FETCH_COMICS);

// CALL API CHARACTERS COMICS
export const fetchComics = (id) => async (dispatch) => {
  const characterId = id;
  const COMIC_PATH = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?orderBy=onsaleDate&ts=1&apikey=53666d04ca6b65987f21c8e9a9deebcd&hash=ddd453cff5252b8060fc56d995faf28a`;
  try {
    dispatch(startFetchComics());
    const data = await fetch(`${COMIC_PATH}`);
    const elementos = await data.json();
    dispatch(sucessFetchComics(elementos.data.results));
  } catch (error) {
    dispatch(errorFetchComics(error));
  }
};
// CALL API CHARACTERS COMICS
