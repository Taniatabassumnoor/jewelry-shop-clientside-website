import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const ExploreItem = (props) => {
    const { name, description,price, img,_id } = props.pd;
    const history = useHistory();
    // const handlePurchase = e => {
    //     history.push('/purchase')
    //         e.preventDefault();
    //     }
    return (
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 10,my:2}}>
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
                <Typography sx={{pb:2}} variant="body2" color="text.secondary">
                   $ {price}
                </Typography>
                <Link to={`/order/${_id}`}><Button style={{backgroundColor:'skyblue',color:'white'}}  variant="contained" size="small">Buy Now</Button></Link>
            </CardContent>
        </Card>
    </Grid>
    );
};

export default ExploreItem;