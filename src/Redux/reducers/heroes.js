import { createReducer } from "@reduxjs/toolkit";
import {
  START_FETCH_HEROES,
  SUCCESS_FETCH_HEROES,
  ERROR_FETCH_HEROES,
} from "../actions/heroes";
const initialState = {
  isFetchHeroes: false,
  error: undefined,
  heroes: [],
};
const heroesReducer = createReducer(initialState, (builder) => {
  builder.addCase(START_FETCH_HEROES, (state, action) => {
    return {
      ...state,
    };
  });
  builder.addCase(SUCCESS_FETCH_HEROES, (state, action) => {
    return {
      ...state,
      heroes: action.payload,
    };
  });

  builder.addCase(ERROR_FETCH_HEROES, (state, action) => {
    return {
      ...state,
    };
  });
});

export default heroesReducer;
