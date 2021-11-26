import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const AllReviews = () => {
    const [allReview,setAllReview] = useState([])
    useEffect(()=>{
        fetch(`https://shielded-caverns-45156.herokuapp.com/allreviews`)
        .then(res=>res.json())
        .then(data=>setAllReview(data))
    },[])
    return (
        <Container>
             <h1>All reviews</h1>
        
        {
            allReview.map(review=>(
                <Grid >
                <Box xs={12} sm={6} md={3}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                    
                    <CardContent sx={{p:3}} >
                        <Typography sx={{p:1}} variant="h5" component="div">
                        <i class="fas fa-user-circle"></i>
                        </Typography>
                        <Typography sx={{p:1}} variant="h5" component="div">
                            {review.customerName}
                        </Typography>
                        <Typography sx={{p:1}} variant="h5" component="div">
                            {review.customerReview}
                        </Typography>
                    </CardContent>
                </Card>
                </Box>
            </Grid>
                
            ))
        }

    
        </Container>
    );
};

export default AllReviews;

{/* <p>{review.customerReview}</p> */}