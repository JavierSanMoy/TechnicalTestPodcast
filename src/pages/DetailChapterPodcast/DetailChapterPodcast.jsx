import React from "react";
import PodcastDetailAudio from "../../components/PodcastDetailAudio/PodcastDetailAudio";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import TitleBar from "../../components/TitleBar/TitleBar";
import PodcastDetailCard from "../../components/PodcastDetailCard/PodcastDetailCard";

const DetailChapterPodcast = () => {
  const { episodeId } = useParams();
  console.log(episodeId);
  return (
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
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <PodcastDetailAudio />
      </Grid>
    </Grid>
  );
};

export default DetailChapterPodcast;
