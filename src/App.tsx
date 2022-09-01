import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  ChannelDetail,
  Feed,
  NavBar,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ cackgroundColor: "#000" }}>
        <NavBar />
      </Box>

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
