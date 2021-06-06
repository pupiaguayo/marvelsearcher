import { createAction } from "@reduxjs/toolkit";
export const START_FETCH_COMICCHOOSE = "START_FETCH_COMICCHOOSE";
export const ERROR_FETCH_COMICCHOOSE = "ERROR_FETCH_COMICCHOOSE";
export const SUCCESS_FETCH_COMICCHOOSE = "SUCCESS_FETCH_COMICCHOOSE";

export const startFetchComicChoose = createAction(START_FETCH_COMICCHOOSE);
export const errorFetchComicChoose = createAction(ERROR_FETCH_COMICCHOOSE);
export const sucessFetchComicChoose = createAction(SUCCESS_FETCH_COMICCHOOSE);

// CALL API COMIC
export const fetchComicChoose = (id) => async (dispatch) => {
  const comicId = id;
  const COMIC_PATH = `http://gateway.marvel.com/v1/public/comics/${comicId}?&ts=1&apikey=53666d04ca6b65987f21c8e9a9deebcd&hash=ddd453cff5252b8060fc56d995faf28a`;
  try {
    dispatch(startFetchComicChoose());
    const data = await fetch(`${COMIC_PATH}`);
    const elementos = await data.json();
    dispatch(sucessFetchComicChoose(elementos.data.results));
  } catch (error) {
    dispatch(errorFetchComicChoose(error));
  }
};
// CALL API COMIC
