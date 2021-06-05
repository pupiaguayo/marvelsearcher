import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "./reducers/heroes";
import comicsReducer from "./reducers/comic";

// SET STORE
export default configureStore({
  reducer: {
    heroesReducer,
    comicsReducer,
  },
});
