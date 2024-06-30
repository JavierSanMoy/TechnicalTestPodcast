import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PodcastDetailCard = () => {
  const navigate = useNavigate();
  const detailPodcast = useSelector((state) => state.podcasts.detailPodcast);

  const handleClick = () => {
    navigate(`/podcast/${detailPodcast.id.attributes["im:id"]}`);
  };
  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <div className="justifyContent">
            <img
              style={{
                borderRadius: "3px",
                height:
                  detailPodcast["im:image"] &&
                  detailPodcast["im:image"][2].attributes.height,
              }}
              src={
                detailPodcast["im:image"] && detailPodcast["im:image"][2].label
              }
              alt={detailPodcast["im:name"]?.label}
            />
          </div>
          <Divider sx={{ margin: "12px 0" }} />
          <Typography gutterBottom variant="h5" component="div">
            {detailPodcast["im:name"]?.label}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="textDescription"
          >
            by {detailPodcast["im:artist"]?.label}
          </Typography>
          <Divider sx={{ margin: "12px 0" }} />
          <Typography
            variant="body2"
            color="text.secondary"
            className="textDescription"
          >
            {detailPodcast.summary?.label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PodcastDetailCard;
