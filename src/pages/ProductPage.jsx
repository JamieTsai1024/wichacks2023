import { Box, Breadcrumbs, Typography } from "@mui/material";
import React from "react";

const makeImages = () => {
  const images = [];
  for (let i = 0; i < 4; i++) {
    images.push(
      <img
        src="/images/baby-clothes.jpg"
        alt="test"
        style={{
          width: "23%",
          height: "200px",
          objectFit: "cover",
        }}
      />
    );
  }
  return images;
};

const ProductPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Breadcrumbs>ProductPage</Breadcrumbs>
      <Box sx={{ display: "flex", width: "80%", my: "100px" }}>
        <img
          src="/images/baby-clothes.jpg"
          alt="test"
          style={{ width: "40%", objectFit: "cover" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "45%" }}>
              <Typography
                variant="h3"
                sx={{ wordWrap: "break-word" }}
                gutterBottom
              >
                Product Name
              </Typography>
              <Typography variant="h4" gutterBottom>
                Item Details
              </Typography>
              <Box sx={{ display: "flex", mb: "20px" }}>
                <Box>
                  <Typography variant="h6">Location</Typography>
                  <Typography variant="h6">Condition</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <Typography variant="h3" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ display: "flex", mb: "20px" }}>
                <Box>
                  <Typography variant="h6">Phone Number</Typography>
                  <Typography variant="h6">Email</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography variant="h4" gutterBottom>
            Description
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ornare tincidunt nunc et efficitur. Maecenas rhoncus, mi a faucibus
            mattis, arcu arcu ornare dui, a cursus nulla nunc porta augue.
            Maecenas scelerisque mauris eget odio elementum feugiat. Vivamus
            cursus ligula arcu. Donec interdum pretium ante. Vivamus
            sollicitudin arcu at massa varius, a volutpat ante tristique.
            Integer bibendum
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "80%" }}>
        <Typography variant="h4" gutterBottom>
          Continue Browsing
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {makeImages()}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
