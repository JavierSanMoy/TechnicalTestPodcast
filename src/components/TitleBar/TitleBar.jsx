import React from "react";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TitleBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Button variant="text" onClick={handleClick}>
        Podcaster
      </Button>
      <Divider />
    </>
  );
};

export default TitleBar;
