import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/useAuth';
import { Grid } from '@mui/material';
import PurchaseUserDashboard from '../../Dashboard/PurchaseUserDashboard/PurchaseUserDashboard';
import Order from '../../Shared/Order/Order';





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Purchase = () => {
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
        const purchase = {
            ...buyingInfo,
            customerName: user.displayName,
            email: user.email,


        }



        // send to the server
        fetch('https://shielded-caverns-45156.herokuapp.com/purchase_info', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        e.preventDefault();
    }

    return (
        <Box >
            <Typography id="transition-modal-title" variant="h6" component="h2">
                Purchase Form
            </Typography>
            <Grid container spacing={2}>
                
                <Grid item xs={12} sm={6} md={6}>
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
                            defaultValue="Your Address"
                            name="customerAddress"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="City"
                            name="city"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>

                </Grid>

            </Grid>
        </Box>
    );
};

export default Purchase;

