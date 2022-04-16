import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import img1 from "../../Images/Gallery/1.jpg";
import img2 from "../../Images/Gallery/2.jpg";
import img3 from "../../Images/Gallery/3.jpg";
import img4 from "../../Images/Gallery/4.jpg";
import img5 from "../../Images/Gallery/5.jpg";
import img6 from "../../Images/Gallery/6.jpg";
import img7 from "../../Images/Gallery/7.jpg";
import img8 from "../../Images/Gallery/8.jpg";
import img9 from "../../Images/Gallery/9.jpg";
import img10 from "../../Images/Gallery/10.jpg";
import img11 from "../../Images/Gallery/11.jpg";
import gray_wave from "../../Images/gray_wave.svg";

const galleryImgs = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
  { id: 10, image: img10 },
  { id: 11, image: img11 },
];

const Gallery = () => {
  return (
    <Box
      id="gallery"
      sx={{
        backgroundImage: `url(${gray_wave})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        py: 15,
        my: 15,
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              fontStyle: "italic",
              fontFamily: "Georgia",
            }}
          >
            Checkout our Instagram feed
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ fontWeight: "300", color: "#3B4757", letterSpacing: 1.5 }}
          >
            <span
              style={{
                color: "#0c4b65",
                fontStyle: "italic",
                letterSpacing: 1.5,
                fontWeight: "600",
              }}
            >
              Twinkle Stone
            </span>{" "}
            Photo Gallery
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ alignItems: "center" }}
          >
            {galleryImgs.map(
              (singleImage) =>
                singleImage.id < 7 && (
                  <Grid key={singleImage.id} item xs={12} sm={6} md={3}>
                    <Box sx={{}}>
                      <img
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        style={{
                          width: "100%",
                          borderRadius: 15,
                        }}
                        src={singleImage.image}
                        alt=""
                      />
                    </Box>
                  </Grid>
                )
            )}
            <Grid item xs={12} sm={6} md={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ alignItems: "center" }}
              >
                {galleryImgs.map(
                  (singleImage) =>
                    singleImage.id > 6 &&
                    singleImage.id < 11 && (
                      <Grid key={singleImage.id} item xs={6}>
                        <img
                          data-aos="flip-right"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="2000"
                          style={{
                            width: "100%",
                            borderRadius: 15,
                          }}
                          src={singleImage.image}
                          alt=""
                        />
                      </Grid>
                    )
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <img
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  style={{
                    width: "100%",
                    borderRadius: 15,
                  }}
                  src={img11}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
