import React from 'react';
import { Card, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Roll from 'react-reveal/Roll';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useGetAllPostQuery } from '../../../redux/post';




const Explore = () => {
  const responseInfo = useGetAllPostQuery()
  console.log('Response Infomation:', responseInfo.data)
  return (
    <Box sx={{ flexGrow: 1, mt: 25, mb: 15 }}>
      <Container>
        <Typography sx={{ fontWeight: 600, m: '5%', color: '#000' }} variant="h4" component="div">
          Explore Our Product
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            responseInfo?.data?.map(single => <Grid item xs={12} sm={6} md={4}>
              <Roll left>
              <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
                <CardMedia
                
                  component="img"
                  style={{ width: '100%', height: '350px', margin: '0 auto' }}
                  image={single.img
                  }
                  alt=""
                />
                <CardContent sx={{ p: 3 }} >
                  <Typography sx={{ p: 1 }} variant="h5" component="div">
                    Product Name: {single.name}
                  </Typography>
                  <Typography sx={{ p: 1, color: 'gray', fontSize: '17px' }} variant="h6" component="div">
                    Description: {single.description}
                  </Typography>
                  <Typography sx={{ p: 1 }} variant="h6" component="div">
                    Price: $ {single.price}
                  </Typography>
                  <NavLink style={{ textDecoration: 'none' }} to={`/products/${single._id}`}>
                    <Button style={{backgroundColor:"#000"}} variant="contained">Order Now</Button>
                  </NavLink>
                </CardContent>
              </Card>
              </Roll>
            </Grid>)
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default Explore;


















// import React, { useEffect, useState } from 'react';
// import { Row } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import ExploreProduct from '../ExploreProduct/ExploreProduct';




// const Explore = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//       fetch(" https://shielded-caverns-45156.herokuapp.com/allproducts")
//         .then((res) => res.json())
//         .then((data) => setProducts(data));
//     }, []);
//     return (
//         <div>
//       <h2>Explore Products{products.length}</h2>
//       <div className="container">
//         <Row lg={3} sm={1}>
//           {products.map((product) => (
//             <ExploreProduct
//               key={product._id}
//               product={product}
//             ></ExploreProduct>
//           ))}
//         </Row>
//       </div>
//     </div>
//     );
// };

// export default Explore;


