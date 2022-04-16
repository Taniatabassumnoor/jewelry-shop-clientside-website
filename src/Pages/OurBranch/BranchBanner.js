import React from "react";
import { Box, Container, Typography } from "@mui/material";
const BranchBanner = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
        },
        height: {
          xs: "60vh",
          sm: "60vh",
          md: "60vh",
        },
        backgroundImage:
          "url(https://i.ibb.co/2YbvRVP/pexels-arif-khan-4595717.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container sx={{ py: 15 }}>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: "500",
            color: "#3B4757",
            textAlign: "center",

            fontSize: {
              xs: "30px",
              sm: "40px",
              md: "50px",
            },
            pt: {
              xs: "10%",
              sm: "10%",
              md: "10%",
            },
          }}
        >
          Our Branches
        </Typography>
      </Container>
    </Box>
  );
};

export default BranchBanner;
