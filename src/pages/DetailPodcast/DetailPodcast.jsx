import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setDetailPodcastChapters } from "../../slices/podcastsSlice";
import { fetchDetailPodcastChapters } from "../../services/podcastsFetch";
import { Grid } from "@mui/material";
import TitleBar from "../../components/TitleBar/TitleBar";
import { useNavigate, useParams } from "react-router-dom";
import PodcastDetailCard from "../../components/PodcastDetailCard/PodcastDetailCard";
import PodcastDetailHeader from "../../components/PodcastDetailHeader/PodcastDetailHeader";
import PodcastDetailTable from "../../components/PodcastDetailTable/PodcastDetailTable";
import {
  getDataSessionStorage,
  saveDataSessionStorage,
} from "../../common/utils/utils";

const DetailPodcast = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcasts);
  const { detailPodcastChapters } = podcasts;
  const { podcastId } = useParams();
  const { isLoading, refetch } = useQuery(
    ["fetchDetailPodcastChapters", podcastId],
    () => fetchDetailPodcastChapters(podcastId),
    {
      enabled: false,
      onSuccess: (data) => {
        saveDataSessionStorage("listDetailChapters", data);
        dispatch(setDetailPodcastChapters(data));
      },
      onError: (error) => {
        console.log(error);
      },
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    const listDetailChapters = getDataSessionStorage("listDetailChapters");
    if (
      !listDetailChapters ||
      listDetailChapters.results[0].collectionId !== Number(podcastId)
    ) {
      refetch();
    } else {
      dispatch(setDetailPodcastChapters(listDetailChapters));
    }
  }, []);

  const handleClick = (episodeId) => {
    navigate(`/podcast/${podcastId}/episode/${episodeId}`);
  };
  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <Grid
          container
          className="paddingContainer"
          justifyContent={"space-between"}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TitleBar />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <PodcastDetailCard />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <PodcastDetailHeader
                text={"Episodes: " + detailPodcastChapters.resultCount}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <PodcastDetailTable handleClick={handleClick} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default DetailPodcast;
