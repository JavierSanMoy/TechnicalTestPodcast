// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import podcastsSlice from "../slices/podcastsSlice";

export const store = configureStore({
  reducer: {
    podcasts: podcastsSlice,
  },
});

export default store;
