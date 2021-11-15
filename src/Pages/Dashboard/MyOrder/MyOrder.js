import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../../HomePage/Service/Service';
const MyOrder = () => {
    let { orderId } = useParams();
    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() => {
        fetch(`https://shielded-caverns-45156.herokuapp.com/explore_item/${orderId}`)
            .then(res => res.json())
            .then(result => setServiceDetails(result))
    }, [])
const handleDelete = id => {
    const url = `https://shielded-caverns-45156.herokuapp.com/explore_item/${id}`
    fetch(url,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deletedCount){
            alert('Are you Sure?')
            const remaining = serviceDetails.filter(service=>service._id !==id)
        setServiceDetails(remaining)
        }
    })
    
    
}

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
                    <Button onClick={()=>handleDelete(serviceDetails._id)} variant ="contained">Delete</Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default MyOrder;