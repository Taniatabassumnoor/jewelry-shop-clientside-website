import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import SingleCategory from '../SingleCategory/SingleCategory';
const Category = () => {
    const category = [
        {
            name: 'Diamond Rings',
            img: "https://i.ibb.co/F4yvWp5/diamond-ring-1.png"
        },
        {
            name: 'Earrings',
            img: "https://i.ibb.co/jfxC8G0/earring.png"
        },
        {
            name: 'Necklace',
            img: "https://i.ibb.co/NKyLLw9/necklace-1.png"
        },
        {
            name: 'Bracelets',
            img: "https://i.ibb.co/mBjGvYr/bracelet.png"
        },
        {
            name: 'Armlets',
            img: "https://i.ibb.co/kmLJWSS/bracelet-1.png"
        },
        {
            name: 'Anklets',
            img: "https://i.ibb.co/w7CdzhM/bracelet-2.png"
        },
        
    ]
    return (
        <Box sx={{ flexGrow: 1,mt:25,mb:15 }}>
        <Container>
            <Typography sx={{ fontWeight: 600, m: '5%', color: '#000',textAlign:'center' }} variant="h4" component="div">
                Our Categories
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    category.map(single => <SingleCategory
                        key={single.name}
                        single={single}
                    ></SingleCategory>)
                }
            </Grid>
        </Container>
    </Box>
    );
};

export default Category;