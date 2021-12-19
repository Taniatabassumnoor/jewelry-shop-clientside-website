import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
const Service = (props) => {
    const history = useHistory();
// const handlePurchase = e => {
// history.push('/purchase')
//     e.preventDefault();
// }
    const { name, description, img } = props.service;
    return (
        <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '400px', margin: '0 auto' }}
                image={img}
                alt="green iguana"
            />
            <CardContent sx={{p:3}} >
                <Typography sx={{p:1}} variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{pb:2}} variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <NavLink to="/explore"><Button  style={{backgroundColor:'skyblue',color:'white',textDecoration:"none"}}  variant="contained" size="small">Buy Now</Button></NavLink>
            </CardContent>
        </Card>
    </Grid>
    );
};

export default Service;