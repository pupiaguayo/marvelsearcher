import { createReducer } from "@reduxjs/toolkit";
import {
  START_FETCH_HEROES,
  START_FETCH_RANDOMHERO,
  SUCCESS_FETCH_RANDOMHERO,
  SUCCESS_FETCH_HEROES,
  ERROR_FETCH_HEROES,
} from "../actions/heroes";
const initialState = {
  isFetchHeroes: false,
  error: undefined,
  heroes: [],
  randomHero: [],
};

// REDUCER CASE HEROES
const heroesReducer = createReducer(initialState, (builder) => {
  builder.addCase(START_FETCH_HEROES, (state, action) => {
    return {
      ...state,
      isFetchHeroes: true,
    };
  });
  builder.addCase(SUCCESS_FETCH_RANDOMHERO, (state, action) => {
    return {
      ...state,
      isFetchRandomHero: false,
      randomHero: action.payload,
    };
  });
  builder.addCase(SUCCESS_FETCH_HEROES, (state, action) => {
    return {
      ...state,
      isFetchHeroes: false,
      heroes: action.payload,
    };
  });

  builder.addCase(ERROR_FETCH_HEROES, (state, action) => {
    return {
      ...state,
      isFetchHeroes: false,
      heroes: [],
      error: action.payload.error,
    };
  });
  builder.addDefaultCase((state, action) => {
    return state;
  });
});

export default heroesReducer;
