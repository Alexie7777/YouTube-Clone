import { RootObject as item } from "@/types/searchResult";
import { Box, Stack } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Loader from "./Loader";

type AppProps = {
  videos: item[];
  direction?: "column" | "row";
};

const Videos = (
  { videos, direction }: AppProps,
) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
