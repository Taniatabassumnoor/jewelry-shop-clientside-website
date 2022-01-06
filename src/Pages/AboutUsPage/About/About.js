import { Grid, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Typography sx={{fontSize:"70px",marginTop:"15%",color:"goldenrod"}}>
                      We are special beacuse -
                  </Typography> <br />
                  <Typography sx={{fontSize:"45px",color:"salmon"}}>
                  Crafting Jewellery Since 1990
                  </Typography> <br />
                  <Typography sx={{fontSize:"45px",color:"salmon"}}>We have Rare Collections</Typography> <br />
                  <Typography sx={{fontSize:"45px",color:"salmon"}}>We have Trending Collection</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                 <img src="https://i.ibb.co/LdnVyhw/27178-Converted.png" alt="" />
                </Grid>

            </Grid>
        </div>
    );
};

export default About;