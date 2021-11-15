import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
const Services = () => {
    const services = [
        {
            name: 'Pendants',
            description: "12 Products",
            img: "https://i.ibb.co/Dfnmzgn/pexels-the-glorious-studio-8306527.jpg"
        },
        {
            name: 'Diamond Rings',
            description: "20 Products",
            img: "https://i.ibb.co/rmWfsbL/pexels-the-glorious-studio-5442468.jpg"
        },
        {
            name: 'Golden Necklace',
            description: "27 Products",
            img: "https://i.ibb.co/7Xp1wwc/pexels-the-glorious-studio-7093769.jpg"
        },
        {
            name: 'Designers Earrings',
            description: "23 Products",
            img: "https://i.ibb.co/S3mxf0F/pexels-seashell-in-love-3881077.jpg"
        }
    ]
    
    return (
        <Box sx={{ flexGrow: 1,mt:25,mb:15 }}>
        <Container>
            <Typography sx={{ fontWeight: 600, m: 5,color:'skyblue' }} variant="h4" component="div">
                Services We Provide
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)
                }
            </Grid>
        </Container>
    </Box>
    );
};

export default Services;