
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';



import ExploreItem from '../ExploreItem/ExploreItem';

const Explore = () => {
    const [explore,setExplore] = useState([]);
    

    useEffect((data)=>{
        fetch(`https://shielded-caverns-45156.herokuapp.com/explore_item`,{
            method:'GET',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>setExplore(result))
    },[])
    return (
        <Box sx={{ flexGrow: 1,mt:25,mb:15 }}>
        <Container>
            <Typography sx={{ fontWeight: 600, m: 5,color:'skyblue' }} variant="h4" component="div">
                Services We Provide
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    explore.map(pd => <ExploreItem
                    key={pd.id}
                    pd={pd}
                    ></ExploreItem>
                    
                    )}
            </Grid>
        </Container>
    </Box>
    );
};

export default Explore;