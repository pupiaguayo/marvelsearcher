import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "./reducers/heroes";
export default configureStore({
  reducer: {
    heroesReducer,
  },
});
