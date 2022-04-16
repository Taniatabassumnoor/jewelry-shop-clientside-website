// import { Grid } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { Box } from '@mui/system';
// import { Card, Col, Container, Row } from 'react-bootstrap';
// import Rating from 'react-rating';
// import useAuth from '../../../Hooks/useAuth';

// const AllReviews = () => {
//     const [allReview,setAllReview] = useState([])
//     const {user} = useAuth()
//     useEffect(()=>{
//         fetch(`https://shielded-caverns-45156.herokuapp.com/allreviews`)
//         .then(res=>res.json())
//         .then(data=>setAllReview(data))
//     },[])
//     return (
//         <Container>
//              <h1 style={{textAlign:"center",color:"#000"}}>All reviews</h1>

//              <Row md={4} lg={3} sm={1}>
//              {
//     allReview.map(review=>(
//         <>
// <div>
// <Col sm={12} md={4} className="mb-5 mt-5 ">
// <Card style={{ width: "18rem" }}>
// <Card.Img variant="top" src={user.imgUrl} />
// <Card.Body>
// <Card.Title className="logo" style={{ fontWeight: "bolder" }}>
//   {review.customerName}
// </Card.Title>
// <Card.Text> {review.customerReview}</Card.Text>
// <Rating
//   readonly
//   emptySymbol="fa fa-star-o "
//   fullSymbol="fa fa-star "
//   fractions={2}
//   initialRating={review.customerRating}
// ></Rating>
// </Card.Body>
// </Card>
// </Col>
// </div>
// </>

//     ))
// }
//         </Row>

//         </Container>
//     );
// };

// export default AllReviews;

import { Avatar, Box, Container, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import useAuth from "../../../Hooks/useAuth";

const AllReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,

    autoplaySpeed: 4000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [allReview, setAllReview] = useState([]);

  useEffect(() => {
    fetch(`https://shielded-caverns-45156.herokuapp.com/allreviews`)
      .then((res) => res.json())
      .then((data) => setAllReview(data));
  }, []);
  return (
    <Container sx={{ pb: 10 }}>
      <Typography
        sx={{
          textAlign: "center",
          mt: 2,
          mb: 8,
          color: "#0c4b65",
          fontStyle: "italic",
          fontSize: "44px",
          fontWeight: 600,
        }}
        variant="h6"
        gutterBottom
        component="div"
      >
        Client Feedback
      </Typography>
      <Slider {...settings} style={{ margin: "15px" }}>
        {allReview.map((dt) => (
          <Box key={dt._id}>
            <Box
              sx={{
                background: "#fff",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                m: "5px 20px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  src={dt?.imgUrl}
                  sx={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    mt: 4,
                    color: "#0c4b65",
                    fontSize: "24px",
                    fontWeight: 800,
                  }}
                  gutterBottom
                >
                  {dt?.customerName}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "#0c4b65",
                    fontSize: "14px",
                    fontWeight: 200,
                    mt: 3,
                  }}
                  gutterBottom
                >
                  {dt?.customerReview}
                </Typography>
                <Box
                  sx={{ textAlign: "center", mt: 3, pb: 3, color: "#faaf00" }}
                >
                  {" "}
                  <Rating
                    name="half-rating-read"
                    defaultValue={dt?.customerRating}
                    precision={0.5}
                    readOnly
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default AllReviews;
