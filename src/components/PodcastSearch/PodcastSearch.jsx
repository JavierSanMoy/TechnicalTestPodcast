import { Chip, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListFilterPodcast } from "../../slices/podcastsSlice";

const PodcastSearch = () => {
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcasts);
  const { listPodcasts, listFilterPodcasts } = podcasts;

  const handleChange = (e) => {
    const value = e.target.value;
    const filtered = listPodcasts.filter(
      (podcast) =>
        podcast["im:artist"].label
          .toLowerCase()
          .includes(value.toLowerCase().trim()) ||
        podcast["im:name"].label
          .toLowerCase()
          .includes(value.toLowerCase().trim())
    );
    dispatch(setListFilterPodcast(filtered));
  };
  return (
    <Grid container className="pt-24" justifyContent={"right"}>
      <Grid item xs={1} sm={1} md={1} lg={1}>
        <Chip
          className="chipList"
          label={listFilterPodcasts.length}
          color="primary"
          sx={{ fontWeight: "bold" }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Filter podcasts..."
          variant="outlined"
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default PodcastSearch;
