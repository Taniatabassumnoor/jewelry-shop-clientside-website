// import React from "react";
// import { Card } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import Roll from "react-reveal/Roll";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, Container, Grid } from "@mui/material";
// import { Box } from "@mui/system";
// import { useGetAllPostQuery } from "../../../redux/post";

// const Explore = () => {
//   const responseInfo = useGetAllPostQuery();
//   console.log("Response Infomation:", responseInfo.data);
//   return (
//     <Box sx={{ flexGrow: 1, mt: 25, mb: 15 }}>
//       <Container>
//         <Typography
//           sx={{ fontWeight: 600, m: "5%", color: "#000" }}
//           variant="h4"
//           component="div"
//         >
//           Explore Our Product
//         </Typography>
//         <Grid
//           container
//           spacing={{ xs: 2, md: 3 }}
//           columns={{ xs: 4, sm: 8, md: 12 }}
//         >
//           {responseInfo?.data?.map((single) => (
//             <Grid item xs={12} sm={6} md={4}>
//               <Roll left>
//                 <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
//                   <CardMedia
//                     component="img"
//                     style={{ width: "100%", height: "350px", margin: "0 auto" }}
//                     image={single.img}
//                     alt=""
//                   />
//                   <CardContent sx={{ p: 3 }}>
//                     <Typography sx={{ p: 1 }} variant="h5" component="div">
//                       Product Name: {single.name}
//                     </Typography>
//                     <Typography
//                       sx={{ p: 1, color: "gray", fontSize: "17px" }}
//                       variant="h6"
//                       component="div"
//                     >
//                       Description: {single.description}
//                     </Typography>
//                     <Typography sx={{ p: 1 }} variant="h6" component="div">
//                       Price: $ {single.price}
//                     </Typography>
//                     <NavLink
//                       style={{ textDecoration: "none" }}
//                       to={`/products/${single._id}`}
//                     >
//                       <Button
//                         style={{ backgroundColor: "#000" }}
//                         variant="contained"
//                       >
//                         Order Now
//                       </Button>
//                     </NavLink>
//                   </CardContent>
//                 </Card>
//               </Roll>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Explore;

// // import React, { useEffect, useState } from 'react';
// // import { Row } from 'react-bootstrap';
// // import { Link, NavLink } from 'react-router-dom';
// // import ExploreProduct from '../ExploreProduct/ExploreProduct';

// // const Explore = () => {
// //     const [products, setProducts] = useState([]);
// //     useEffect(() => {
// //       fetch(" https://shielded-caverns-45156.herokuapp.com/allproducts")
// //         .then((res) => res.json())
// //         .then((data) => setProducts(data));
// //     }, []);
// //     return (
// //         <div>
// //       <h2>Explore Products{products.length}</h2>
// //       <div className="container">
// //         <Row lg={3} sm={1}>
// //           {products.map((product) => (
// //             <ExploreProduct
// //               key={product._id}
// //               product={product}
// //             ></ExploreProduct>
// //           ))}
// //         </Row>
// //       </div>
// //     </div>
// //     );
// // };

// // export default Explore;

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGetAllPostQuery } from "../../../redux/post";
import Aos from "aos";

const Explore = () => {
  const responseInfo = useGetAllPostQuery();
  console.log("Response Infomation:", responseInfo.data);
  useEffect(() => {
    Aos.init({
      duration: 4000,
    });
  }, []);
  return (
    <Box data-aos="fade-up" data-aos-duration="2000">
      <Container
        data-aos="fade-up"
        data-aos-duration="2000"
        sx={{
          py: 3,
          mt: 10,
        }}
      >
        {responseInfo?.data?.length === 0 ? (
          "Loading..."
        ) : (
          <Grid
            container
            spacing={{ xs: 2, md: 12 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {responseInfo?.data?.map((dt) => (
              <Grid key={dt?.id} item xs={4} sm={4} md={4}>
                <Card
                  sx={{
                    background: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                    borderRadius: "12px",
                  }}
                >
                  <CardActionArea>
                    <Box
                      sx={{
                        transition: "transform .5s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          height: "200px",

                          verticalAlign: "top",
                          borderRadius: "10px",
                          margin: "auto",
                          aspectRatio: "auto 1200 / 1200",
                        }}
                        image={dt?.img}
                        alt="green iguana"
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        sx={{
                          color: "#3B4757",
                          textAlign: "center",
                          fontSize: "20px",
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {dt?.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#3B4757",
                          textAlign: "center",
                          fontSize: "14px",
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {dt?.description}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#3B4757",
                          textAlign: "center",
                          fontSize: "14px",
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Price: {dt?.price}$
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 2,
                        }}
                      >
                        <NavLink
                          to={`/products/${dt?._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            sx={{
                              color: "#fff",
                              flexBasis: "initial",
                              minHeight: "40px",
                              fontFamily: "Sans-serif",
                              fontSize: "15px",
                              textTransform: "capitalize",
                              letterSpacing: 1.5,
                              backgroundColor: "#efcf4f",
                              borderStyle: "solid",
                              borderWidth: "1px 1px 1px 1px",
                              borderColor: "#01479b",
                              paddingTop: 0,
                              paddingBottom: 0,
                              border: "none",
                              padding: "12px 24px",
                              display: "inlineBlock",
                              lineHeight: 1,
                              borderRadius: "5px",
                              fill: "#FFFFFF",
                              textAlign: "center",
                              fontWeight: 700,
                              whiteSpace: "nowrap",

                              width: "auto",
                              mb: 2,
                              overflow: "visible",
                              "&:hover": {
                                backgroundColor: "#000",
                                color: "#fff",
                              },
                            }}
                            variant="outlined"
                          >
                            Details
                          </Button>
                        </NavLink>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Explore;
