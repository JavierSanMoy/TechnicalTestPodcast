import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

const PodcastDetailHeader = ({ text }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{text}</Typography>
      </CardContent>
    </Card>
  );
};

PodcastDetailHeader.propTypes = {
  text: PropTypes.string,
};

export default PodcastDetailHeader;
