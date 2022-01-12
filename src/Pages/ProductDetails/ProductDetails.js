import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PlaceOrderModal from "./PlaceOrderModal";
import { Card, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Container, Grid } from '@mui/material';


const ProductDetails = ({ id }) => {
  const [product, setProduct] = useState([]);
  const [openPlaceOrder, setOpenPlaceOrder] = React.useState(false);
  const handleOpenPlaceOrder = () => setOpenPlaceOrder(true);
  const handleClosePlaceOrder = () => setOpenPlaceOrder(false);
  useEffect(() => {
    axios
      .get(` https://shielded-caverns-45156.herokuapp.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <Container style={{ marginTop: "10%",marginBottom:"10%",marginRight:"10%",marginLeft:"28%" }}>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
<Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
                <CardMedia
                  component="img"
                  style={{ width: '100%', height: '350px', margin: '0 auto' }}
                  image={product.img
                  }
                  alt=""
                />
                <CardContent sx={{ p: 3 }} >
                  <Typography sx={{ p: 1 }} variant="h5" component="div">
                    Product Name: {product.name}
                  </Typography>
                  <Typography sx={{ p: 1, color: 'gray', fontSize: '17px' }} variant="h6" component="div">
                    Description: {product.description}
                  </Typography>
                  <Typography sx={{ p: 1 }} variant="h6" component="div">
                    Price: $ {product.price}
                  </Typography>
                  
                    <Button onClick={handleOpenPlaceOrder} style={{backgroundColor:"#000"}} variant="contained">Place Order</Button>
                 
                </CardContent>
              </Card>
            </Grid>
        </Grid>
        <PlaceOrderModal
        product={product}
        openPlaceOrder={openPlaceOrder}
        handleClosePlaceOrder={handleClosePlaceOrder}
      ></PlaceOrderModal>
    </Container>
  );
};

export default ProductDetails;























