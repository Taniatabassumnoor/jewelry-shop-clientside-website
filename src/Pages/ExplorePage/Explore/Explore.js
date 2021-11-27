
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';



const Explore = () => {
    const [explore,setExplore] = useState([]);
    

    useEffect((data)=>{
        fetch(`https://shielded-caverns-45156.herokuapp.com/getallproduct`,{
            method:'GET',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>setExplore(result))
    },[])


    
    return (
        <Box sx={{ flexGrow: 1,mt:25,mb:15 }}>
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
    </Box>
    );
};

export default Explore;

