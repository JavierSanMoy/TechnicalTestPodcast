import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PodcastDetailAudio = () => {
  const podcasts = useSelector((state) => state.podcasts);
  const { episodeId } = useParams();
  const { detailPodcastChapters } = podcasts;
  const episode = detailPodcastChapters.results?.find(
    (chapter) => chapter.trackId === Number(episodeId)
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{episode?.trackName}</Typography>
        <Typography variant="body1" className="textDescription">
          {parse(episode?.description)}
        </Typography>
        <audio controls style={{ width: "100%", marginTop: "24px" }}>
          <source src={episode?.episodeUrl} />
          Your browser does not support the audio element.
        </audio>
      </CardContent>
    </Card>
  );
};

export default PodcastDetailAudio;
