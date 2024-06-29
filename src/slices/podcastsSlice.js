// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const podcastsSlice = createSlice({
  name: "podcasts",
  initialState: {
    lastDateFetchListPodcast: null,
    listPodcasts: {},
    listFilterPodcasts: {},
    detailPodcast: {},
  },
  reducers: {
    setLastDateFetchListPodcast: (state, action) => {
      state.lastDateFetchListPodcast = action.payload;
    },
    setListPodcast: (state, action) => {
      state.listPodcasts = action.payload;
    },
    setListFilterPodcast: (state, action) => {
      state.listFilterPodcasts = action.payload;
    },
    setDetailPodcast: (state, action) => {
      state.detailPodcast = action.payload;
    },
  },
});

export const {
  setLastDateFetchListPodcast,
  setListPodcast,
  setListFilterPodcast,
  setDetailPodcast,
} = podcastsSlice.actions;

export default podcastsSlice.reducer;
