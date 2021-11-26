import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GetAddProduct = () => {
    const [added,setAdded] = useState([])
    useEffect(()=>{
        fetch(`https://shielded-caverns-45156.herokuapp.com/getallproduct`)
        .then(res=>res.json())
        .then(data=>setAdded(data))
    },[])
    return (
        <>
           <Container>
           {
               added.map(pd=>(
                <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 10,my:2}}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '400px', margin: '0 auto' }}
                image={pd?.imageUrl}
                
            />
            <CardContent sx={{p:3}} >
                <Typography sx={{p:1}} variant="h5" component="div">
                    {pd?.productName}
                </Typography>
                <Typography sx={{pb:2}} variant="body2" color="text.secondary">
                    {pd?.productDescription}
                </Typography>
                <Typography sx={{pb:2}} variant="body2" color="text.secondary">
                   $ {pd?.productPrice}
                </Typography>
                <Link to={`/order/${pd?._id}`}><Button style={{backgroundColor:'skyblue',color:'white'}}  variant="contained" size="small">Buy Now</Button></Link>
            </CardContent>
        </Card>
    </Grid>
               ))
           } 
           </Container>
        </>
    );
};

export default GetAddProduct;