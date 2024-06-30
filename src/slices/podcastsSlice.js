// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const podcastsSlice = createSlice({
  name: "podcasts",
  initialState: {
    listPodcasts: [],
    listFilterPodcasts: [],
    detailPodcast: {},
    detailPodcastChapters: {},
  },
  reducers: {
    setListPodcast: (state, action) => {
      state.listPodcasts = action.payload;
    },
    setListFilterPodcast: (state, action) => {
      state.listFilterPodcasts = action.payload;
    },
    setDetailPodcast: (state, action) => {
      state.detailPodcast = action.payload;
    },
    setDetailPodcastChapters: (state, action) => {
      state.detailPodcastChapters = action.payload;
    },
  },
});

export const {
  setListPodcast,
  setListFilterPodcast,
  setDetailPodcast,
  setDetailPodcastChapters,
} = podcastsSlice.actions;

export default podcastsSlice.reducer;
