import React from 'react';
import PurchaseUserDashboard from '../PurchaseUserDashboard/PurchaseUserDashboard';
import { Grid } from '@mui/material';
const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
                        <Grid item xs={8}>
                           <PurchaseUserDashboard></PurchaseUserDashboard>
                        </Grid>
                        <Grid item xs={4}>
                        <img style={{ width: '80%', marginTop: '8%' }} src="https://i.ibb.co/znT8rGD/login.png" alt="" />
                        </Grid>
                    </Grid>
    );
};

export default DashboardHome;