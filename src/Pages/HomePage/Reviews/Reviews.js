import { Button, Container, Grid, TextField } from '@mui/material';

import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Reviews.css'





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
            email: user.email
        }
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
 <Container className='review_bg center' style={{margin:'0 auto'}}>
     <h2 className="reviews1 logo">
        Review <span className="text-danger">section</span>
      </h2>
                 <Grid container  spacing={2}>
                <Grid item xs={12} md={6}>
                    <form  onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1,  color: "white",
                            backgroundColor: "rgba(0, 0, 0, 0.01)" }}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                            className="reviews1"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1,color:"#fff" }}
                            id="outlined-size-small"
                            defaultValue={user?.email}
                            size="small"
                            className="field"
                        />
                        <TextField
                            sx={{ width: '90%',m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Review"
                            name="customerReview"
                            onBlur={handleOnBlur}
                            size="small"
                            className="field"
                        />

                        <br />
                        <TextField
                            sx={{ width: '90%',m: 1 }}
                            id="outlined-size-small"
                            defaultValue="rating between 1 to 5"
                            name="customerRating"
                            onBlur={handleOnBlur}
                            size="small"
                            className="field"
                        />

                        <br />
                        
                        {/* <input
          className="field"
          required
          placeholder="rating between 1 to 5"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          {...register("ratings", { required: true })}
        />
        <br /> */}

                        <Button className='review-btn' type="submit" variant="contained">Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>

            </Grid>
 </Container>
    );
};

export default Reviews;