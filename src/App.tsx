import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Backdrop, Box } from "@mui/material";
import {
  ChannelDetail,
  Feed,
  NavBar,
  SearchFeed,
  VideoDetail,
  Warning,
} from "./components";
import { useState } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", height: "100vh" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Warning />} />
          <Route path="/home" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
