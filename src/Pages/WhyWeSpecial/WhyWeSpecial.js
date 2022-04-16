import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import countbg from "../../Images/wave-pink.svg";
import cloud from "../../Images/cloud.svg";
const WhyWeSpecial = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${countbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "20px",
        py: 20,
      }}
    >
      <Container>
        <Typography
          sx={{
            fontSize: "45px",
            color: "#0c4b65",
            letterSpacing: 1.5,
            textAlign: "center",

            fontWeight: 300,

            fontStyle: "italic",

            pb: 10,
          }}
        >
          Why We Special
        </Typography>
        <Grid container spacing={2}>
          {/* box-1 */}
          <Grid item xs={12} sm={12} md={3}>
            <Box
              sx={{
                background: "#fff",
                w: "25%",
                maxWidth: "194px",
                minHeight: "170px",
                p: "25px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mb: "30px",
                transform: "rotate(10deg)",
              }}
            >
              <Box style={{ position: "relative" }}>
                <img src={cloud} alt="" />
                <Typography
                  style={{ position: "absolute", top: "-15%", left: "20%" }}
                  sx={{ color: "#46AADC", fontSize: "60px", lineHeight: 2 }}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  01
                </Typography>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                  mb: 0,
                  py: 3,
                }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                National Awarded
              </Typography>
            </Box>
          </Grid>
          {/* box-2 */}
          <Grid item xs={12} sm={12} md={3}>
            <Box
              sx={{
                background: "#fff",
                w: "25%",
                maxWidth: "194px",
                minHeight: "170px",
                p: "25px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mb: "30px",
                transform: "rotate(2deg)",
              }}
            >
              <Box style={{ position: "relative" }}>
                <img src={cloud} alt="" />
                <Typography
                  style={{ position: "absolute", top: "-15%", left: "20%" }}
                  sx={{ color: "#FFAF60", fontSize: "60px", lineHeight: 2 }}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  30
                </Typography>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                  mb: 0,
                  py: 3,
                }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                Total Branch
              </Typography>
            </Box>
          </Grid>
          {/* box-3 */}
          <Grid item xs={12} sm={12} md={3}>
            <Box
              sx={{
                background: "#fff",
                w: "25%",
                maxWidth: "194px",
                minHeight: "170px",
                p: "25px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mb: "30px",
                transform: "rotate(-5deg)",
              }}
            >
              <Box style={{ position: "relative" }}>
                <img src={cloud} alt="" />
                <Typography
                  style={{ position: "absolute", top: "-15%", left: "20%" }}
                  sx={{ color: "#76BEBA", fontSize: "60px", lineHeight: 2 }}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  96
                </Typography>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                  mb: 0,
                  py: 3,
                }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                Total Employee
              </Typography>
            </Box>
          </Grid>
          {/* box-4 */}
          <Grid item xs={12} sm={12} md={3}>
            <Box
              sx={{
                background: "#fff",
                w: "25%",
                maxWidth: "194px",
                minHeight: "170px",
                p: "25px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mb: "30px",
                transform: "rotate(7deg)",
              }}
            >
              <Box style={{ position: "relative" }}>
                <img src={cloud} alt="" />
                <Typography
                  style={{ position: "absolute", top: "-15%", left: "20%" }}
                  sx={{ color: "#7192BD", fontSize: "60px", lineHeight: 2 }}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  12
                </Typography>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                  mb: 0,
                  py: 3,
                }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                Years of experience
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyWeSpecial;
