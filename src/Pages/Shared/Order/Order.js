import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
const Order = () => {
    let { orderId } = useParams();
    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() => {
        fetch(`https://shielded-caverns-45156.herokuapp.com/explore_item/${orderId}`)
            .then(res => res.json())
            .then(result => setServiceDetails(result))
    }, [])



    return (
        <Container >
            <Card sx={{ maxWidth: 345,margin:"0 auto",pt:"15%" }}>
                <CardMedia
                    component="img"
                    width="100%"
                    image={serviceDetails.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {serviceDetails.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {serviceDetails.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price:$ {serviceDetails.price}
                    </Typography>
                    <Link to="/purchase"><Button variant="contained">Purchase Now</Button></Link>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Order;