import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchListPodcasts } from "../../services/podcastsFetch";
import { CircularProgress, Grid } from "@mui/material";
import PodcastCard from "../../components/PodcastCard/PodcastCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setLastDateFetchListPodcast,
  setListFilterPodcast,
  setListPodcast,
} from "../../slices/podcastsSlice";
import TitleBar from "../../components/TitleBar/TitleBar";
import PodcastSearch from "../../components/PodcastSearch/PodcastSearch";

const PrincipalPodcasts = () => {
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcasts);
  const { listFilterPodcasts, lastDateFetchListPodcast } = podcasts;
  const { isLoading, refetch } = useQuery(
    "fetchListPodcasts",
    fetchListPodcasts,
    {
      onSuccess: (data) => {
        dispatch(setLastDateFetchListPodcast(new Date().getTime()));
        dispatch(setListPodcast(data.feed?.entry));
        dispatch(setListFilterPodcast(data.feed?.entry));
      },
      onError: (error) => {
        console.log(error);
      },
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    if (
      !lastDateFetchListPodcast ||
      new Date().getTime() - lastDateFetchListPodcast > 24 * 60 * 60 * 1000
    ) {
      refetch();
    }
  }, [lastDateFetchListPodcast]);

  return (
    <>
      {isLoading ? (
        <CircularProgress size={"4rem"} />
      ) : (
        <Grid container className="paddingContainer">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TitleBar />
          </Grid>
          <PodcastSearch />
          <Grid container>
            {listFilterPodcasts?.map((podcast) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={podcast.id.attributes["im:id"]}
              >
                <PodcastCard podcast={podcast} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default PrincipalPodcasts;
