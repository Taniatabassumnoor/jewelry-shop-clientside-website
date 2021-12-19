import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const HomePageBanner = () => {
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                <Box>
                    <Typography sx={{color:'orange',fontWeight:'bold',marginTop:'10%'}} variant="h2">
                    High-End <br />
                    Jewelry Items
                    </Typography>
                    <Typography variant="h3" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'salmon' }}>
                    JEWELRY DESIGN WITH LOVE
                    </Typography>
                    <NavLink style={{textDecoration:"none"}} to="/explore"><Button variant="contained" style={{ backgroundColor: 'skyblue',marginTop:'3%' }}>Buy Now</Button></NavLink>
                </Box>
            </Grid>
            <Grid style={verticalCenter} item xs={12} md={6}>
                <img style={{ width: '700px',marginTop:'80px' }} src="https://i.ibb.co/gFy80tZ/homepagebanner.jpg" alt="" />
            </Grid>
        </Grid>
        </Container>
    );
};

export default HomePageBanner;