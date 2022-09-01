import { fetchFromAPI } from "@/utils/fetchFromApi";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const [open, setOpen] = useState(false);
  const { searchTerm } = useParams();
  let msg = "";

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((err) => {
        msg = err.msg;
        setOpen(true);
      });
  }, [searchTerm]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      p={2}
      minHeight="95vh"
      sx={{
        backgroundColor: "#000",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {videos && <Videos videos={videos} />}
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {msg || "网络错误"}, 请稍后重试
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SearchFeed;
