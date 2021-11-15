import { Box , Grid } from '@mui/material';
import React from 'react';


const Footer = () => {
    return (
        <Box style={{backgroundColor:'black',color:'white'}}>
            <Grid container spacing={2}>
                <Grid style={{ marginTop:'5%',marginBottom:'5%' }} item xs={12} sm={6} md={4}>
                    <p>Are you searching best designer Jewellary collection ??? We are here to provide you best designer all kind of jewellary collection & will make you happy.</p>
                    <i class="fas fa-phone-alt"></i> <span>+1 9 800 555 85 67</span> <br />
                    <i class="fas fa-map-marker-alt"></i> <span>503 Old Buffalo Street Northwest #205, New York-3087.</span> <br />
                    <span><i class="fab fa-facebook-square"></i> <i class="fab fa-twitter-square"></i> <i class="fab fa-instagram-square"></i> <i class="fab fa-pinterest-square"></i></span>
                </Grid>
                <Grid style={{ marginTop:'5%',marginBottom:'5%' }} item xs={12} sm={6} md={4}>
                    <h3>Links</h3>
                    <p>Home</p>
                    <p>Explore</p>
                    <p>About Us</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img style={{ width: '70%',marginTop:'5%',marginBottom:'5%' }} src="https://i.ibb.co/PW91Qgb/pexels-vaibhav-nagare-5974504.jpg" alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;