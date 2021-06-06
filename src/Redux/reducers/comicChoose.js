import { createReducer } from "@reduxjs/toolkit";
import {
  START_FETCH_COMICCHOOSE,
  SUCCESS_FETCH_COMICCHOOSE,
  ERROR_FETCH_COMICCHOOSE,
} from "../actions/comicChoose";
const initialState = {
  isFetchComicChoose: false,
  error: undefined,
  comicChoose: [],
};

// REDUCER CASE COMIC CHOOSE
const comicChooseReducer = createReducer(initialState, (builder) => {
  builder.addCase(START_FETCH_COMICCHOOSE, (state, action) => {
    return {
      ...state,
      isFetchComicChoose: true,
    };
  });
  builder.addCase(SUCCESS_FETCH_COMICCHOOSE, (state, action) => {
    return {
      ...state,
      isFetchComicChoose: false,
      comicChoose: action.payload,
    };
  });

  builder.addCase(ERROR_FETCH_COMICCHOOSE, (state, action) => {
    return {
      ...state,
      isFetchComicChoose: false,
      comicChoose: [],
      error: action.payload.error,
    };
  });
  builder.addDefaultCase((state, action) => {
    return state;
  });
});

export default comicChooseReducer;
