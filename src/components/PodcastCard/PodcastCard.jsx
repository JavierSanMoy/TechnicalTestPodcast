// PodcastCard.js
import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetailPodcast } from "../../slices/podcastsSlice";

const PodcastCard = ({ podcast }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setDetailPodcast(podcast));
    navigate(`/podcast/${podcast.id.attributes["im:id"]}`);
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          zIndex: 999,
          top: "25%",
          textAlign: "center",
        }}
      >
        <img
          className="imgCard pointer"
          src={podcast["im:image"][2].label}
          style={{ height: podcast["im:image"][2].attributes.height }}
          alt={podcast.title.label}
          onClick={handleClick}
        />
      </Box>
      <Card
        className="pointer"
        sx={{
          maxWidth: 250,
          margin: "auto",
        }}
        onClick={handleClick}
      >
        <Box sx={{ height: 100 }}></Box>
        <CardContent>
          <Typography textAlign={"center"} variant="h6" component="div">
            {podcast["im:name"].label}
          </Typography>
          <Typography
            textAlign={"center"}
            variant="body2"
            color="text.secondary"
          >
            Author: {podcast["im:artist"].label}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

PodcastCard.propTypes = {
  podcast: PropTypes.object,
};
export default PodcastCard;
