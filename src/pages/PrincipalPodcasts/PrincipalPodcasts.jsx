import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchListPodcasts } from "../../services/podcastsFetch";
import { CircularProgress, Grid } from "@mui/material";
import PodcastCard from "../../components/PodcastCard/PodcastCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setListFilterPodcast,
  setListPodcast,
} from "../../slices/podcastsSlice";
import TitleBar from "../../components/TitleBar/TitleBar";
import PodcastSearch from "../../components/PodcastSearch/PodcastSearch";
import {
  getDataSessionStorage,
  saveDataSessionStorage,
} from "../../common/utils/utils";

const PrincipalPodcasts = () => {
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcasts);
  const { listFilterPodcasts } = podcasts;
  const { isLoading, refetch } = useQuery(
    "fetchListPodcasts",
    fetchListPodcasts,
    {
      enabled: false,
      onSuccess: (data) => {
        dispatch(setListPodcast(data.feed?.entry));
        dispatch(setListFilterPodcast(data.feed?.entry));
        saveDataSessionStorage("listPodcasts", data.feed?.entry);
      },
      onError: (error) => {
        console.log(error);
      },
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    const listPodcasts = getDataSessionStorage("listPodcasts");
    if (!listPodcasts) {
      refetch();
    } else {
      dispatch(setListPodcast(listPodcasts));
      dispatch(setListFilterPodcast(listPodcasts));
    }
  }, []);
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
            {listFilterPodcasts.length > 0 &&
              listFilterPodcasts.map((podcast) => (
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
