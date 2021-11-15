import { Button, Grid,  TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Ratings from '../../Ratings/Ratings';

const Reviews = () => {
    const [buyingInfo, setBuyingInfo] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...buyingInfo }
        newInfo[field] = value;
        console.log(newInfo, field, value)
        setBuyingInfo(newInfo)
    }
    const { user } = useAuth()

    const handleBookingSubmit = e => {
        alert('submit?');

        // collect data
        const reviews = {
            ...buyingInfo,
            customerName: user.displayName,
            email: user.email  }
        // send to the server
        fetch('https://shielded-caverns-45156.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        e.preventDefault();
    }

    return (
        <div>
            <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
  <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user?.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Review"
                            name="customerReview"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        
                        
                        <Ratings></Ratings>
                        
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
  </Grid>
  <Grid item xs={12} md={6}>
    
  </Grid>
  
</Grid>
             {/* <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        /> */}
        </div>
    );
};

export default Reviews;