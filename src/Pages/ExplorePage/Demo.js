import React from 'react';
import { useGetAllPostQuery } from '../../redux/post';
import { Card, Col } from "react-bootstrap";
import { Link,NavLink  } from "react-router-dom";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';

const Demo = () => {
    const responseInfo = useGetAllPostQuery()
    console.log('Response Infomation:', responseInfo.data)
    return (
      <Box sx={{ flexGrow: 1,mt:25,mb:15 }}>
      <Container>
          <Typography sx={{ fontWeight: 600, m:'5%',color:'skyblue' }} variant="h4" component="div">
              Explore Our Product
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                  responseInfo?.data?.map(single => <Grid item xs={12} sm={6} md={4}>
                      <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
                          <CardMedia
                              component="img"
                              style={{ width: '100%', height: '350px', margin: '0 auto' }}
                              image={single.img
                              }
                              alt="green iguana"
                          />
                          <CardContent sx={{p:3}} >
                              <Typography sx={{p:1}} variant="h5" component="div">
                              Product Name: {single.name}
                              </Typography>
                              <Typography sx={{p:1,color:'gray',fontSize:'17px'}} variant="h6" component="div">
                               Description: {single.description}
                              </Typography>
                              <Typography sx={{p:1}} variant="h6" component="div">
                              Price: $ {single.price}
                              </Typography>
                              <NavLink style={{textDecoration:'none'}} to={`/products/${single._id}`}>
                <Button  variant="contained">Order Now</Button>
              </NavLink>
                          </CardContent>
                      </Card>
                  </Grid>)
              }
          </Grid>
      </Container>
  </Box> 
    );
};

export default Demo;

{/* <Box sx={{ flexGrow: 1,mt:25,mb:15 }}>
        <Container>
            <Typography sx={{ fontWeight: 600, m:'5%',color:'skyblue' }} variant="h4" component="div">
                Explore Our Product
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    explore.map(single => <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
                            <CardMedia
                                component="img"
                                style={{ width: '100%', height: '350px', margin: '0 auto' }}
                                image={single.imageUrl
                                }
                                alt="green iguana"
                            />
                            <CardContent sx={{p:3}} >
                                <Typography sx={{p:1}} variant="h5" component="div">
                                Product Name: {single.productName}
                                </Typography>
                                <Typography sx={{p:1,color:'gray',fontSize:'17px'}} variant="h6" component="div">
                                 Description: {single.productDescription}
                                </Typography>
                                <Typography sx={{p:1}} variant="h6" component="div">
                                Price: $ {single.productPrice}
                                </Typography>
                                <NavLink style={{textDecoration:'none'}} to={`/booking/${single._id}`}>
                  <Button  variant="contained">Order Now</Button>
                </NavLink>
                            </CardContent>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Container>
    </Box> */}


{/* <h1>Demo Redux {responseInfo?.data && responseInfo?.data[0].name}</h1> */}


{/* <Col sm={12} className="mb-5 mt-5">
      //   <Card style={{  height: "650px" }}>
      //     <Card.Img variant="top" src={pd.img} style={{ height: "300px" }} />
      //     <Card.Body>
      //       <Card.Title className="logo" style={{ fontWeight: "bolder" }}>
      //         {pd.name}
      //       </Card.Title>
      //       <Card.Text> {pd.description}</Card.Text>
      //       <Card.Text */}
      //         className="logo"
      //         style={{ fontWeight: "bolder", color: "red" }}
      //       >
      //         Price: ${pd.price}
      //       </Card.Text>
      //       <Link to={`/products/${pd._id}`}>
      //         <button className="btn btn-danger">Buy now</button>
      //       </Link>
      //     </Card.Body>
      //   </Card>
      // </Col>




    //   {
    //     responseInfo?.data?.map((pd) => (
    //         <h1>{pd.name}</h1>
          
    //     ))
    // }