import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Warning = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/home");
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography variant="h2" display="inline-block">
          访问前，请确保拥有科学上网环境！
        </Typography>
        <Typography variant="subtitle1">
          （单击任意位置以继续访问）
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default Warning;
