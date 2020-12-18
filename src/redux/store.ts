import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducer";

export default configureStore({
  reducer: {
    city: cityReducer,
  },
  devTools: process.env.NODE_ENV !== "development" ? false : true,
});
