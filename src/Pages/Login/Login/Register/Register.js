
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useFirebase from '../../../../Hooks/useFirebase';

const Register = () => {
    const [loginData,setLoginData] = useState({})
    const history = useHistory();
    const {registerUser,isLoading,user} = useFirebase();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
       if(loginData.password !== loginData.password2){
           alert('Your Password did not match');
           return;
       }
       registerUser(loginData.email,loginData.password,loginData.name,history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
  <Grid item sx={{mt:25}} xs={12} md={6}>
    <Typography variant="body1" gutterBottom>Register</Typography>
  {!isLoading &&  <form onSubmit={handleLoginSubmit}>
    <TextField
     sx={{width:'75%',m:1}}
     id="standard-basic"
     type="text"
     name="name"
     onBlur={handleOnBlur}
      label="Your Name"
       variant="standard" />
    <TextField
     sx={{width:'75%',m:1}}
     id="standard-basic"
     type="email"
     name="email"
     onBlur={handleOnBlur}
      label="Your Email"
       variant="standard" />
    <TextField
    sx={{width:'75%',m:1}}
     id="standard-basic"
     type="password"
     name="password"
     onBlur={handleOnBlur}
      label="Your Password"
       variant="standard" />
    <TextField
    sx={{width:'75%',m:1}}
     id="standard-basic"
     type="password"
     name="password2"
     onBlur={handleOnBlur}
      label="Re-Type Password"
       variant="standard" />
       <Button sx={{width:'75%',mt:5}} type="submit" variant="contained">Register</Button>
       <NavLink style={{textDecoration:'none'}} to="/login">
           <Button variant="text">Already Registered? Please LogIn Here</Button>
       </NavLink>
    </form>}
    {isLoading && <CircularProgress color="success" />}
    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
  </Grid>
  <Grid item xs={12} md={6}>
  <img style={{ width: '80%', marginTop: '8%' }} src="https://i.ibb.co/znT8rGD/login.png" alt="" />
  </Grid>
</Grid>
        </Container>
    );
};

export default Register;