import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const SingleCategory = (props) => {
    const { name, description, img } = props.single;
    return (
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                image={img}
                alt="green iguana"
            />
            <CardContent sx={{p:3}} >
                <Typography sx={{p:1}} variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    );
};

export default SingleCategory;