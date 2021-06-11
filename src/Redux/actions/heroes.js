import { createAction } from "@reduxjs/toolkit";

export const START_FETCH_HEROES = "START_FETCH_HEROES";
export const ERROR_FETCH_HEROES = "ERROR_FETCH_HEROES";
export const SUCCESS_FETCH_HEROES = "SUCCESS_FETCH_HEROES";
export const SUCCESS_FETCH_RANDOMHERO = "SUCCESS_FETCH_RANDOMHERO";

export const startFetchHeroes = createAction(START_FETCH_HEROES);
export const errorFetchHeroes = createAction(ERROR_FETCH_HEROES);
export const sucessFetchHeroes = createAction(SUCCESS_FETCH_HEROES);
export const sucessFetchRandomHero = createAction(SUCCESS_FETCH_RANDOMHERO);

// CALL API CHARACTERS
export const fetchHeroes = (name, randomCharacter) => async (dispatch) => {
  const BASE_PATH = "http://gateway.marvel.com/v1/public/";
  const randomHero = randomCharacter;
  let URL;
  if (name.trim() !== "") {
    URL = `${BASE_PATH}characters?nameStartsWith=${name}&orderBy=name&limit=96&ts=1&apikey=53666d04ca6b65987f21c8e9a9deebcd&hash=ddd453cff5252b8060fc56d995faf28a`;
  } else {
    URL = `${BASE_PATH}characters?&orderBy=name&limit=96&ts=1&apikey=53666d04ca6b65987f21c8e9a9deebcd&hash=ddd453cff5252b8060fc56d995faf28a`;
  }
  try {
    dispatch(startFetchHeroes());
    const data = await fetch(`${URL}`);
    const elementos = await data.json();
    dispatch(sucessFetchRandomHero(elementos.data.results[randomHero]));
    dispatch(sucessFetchHeroes(elementos.data.results));
  } catch (error) {
    dispatch(errorFetchHeroes(error));
  }
};
// CALL API CHARACTERS
