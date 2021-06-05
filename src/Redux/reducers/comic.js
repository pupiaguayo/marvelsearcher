import { createReducer } from "@reduxjs/toolkit";
import {
  START_FETCH_COMICS,
  SUCCESS_FETCH_COMICS,
  ERROR_FETCH_COMICS,
} from "../actions/comic";
const initialState = {
  isFetchComics: false,
  error: undefined,
  comics: [],
};
// REDUCER CASE COMICS
const comicsReducer = createReducer(initialState, (builder) => {
  builder.addCase(START_FETCH_COMICS, (state, action) => {
    return {
      ...state,
      isFetchComics: true,
    };
  });
  builder.addCase(SUCCESS_FETCH_COMICS, (state, action) => {
    return {
      ...state,
      isFetchComics: false,
      comics: action.payload,
    };
  });

  builder.addCase(ERROR_FETCH_COMICS, (state, action) => {
    return {
      ...state,
      isFetchComics: false,
      comics: [],
      error: action.payload.error,
    };
  });
  builder.addDefaultCase((state, action) => {
    return state;
  });
});

export default comicsReducer;
