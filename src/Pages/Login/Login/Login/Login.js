import { Button, Container, Grid, TextField, Typography,  CircularProgress,Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink ,useHistory,useLocation} from 'react-router-dom';
import useFirebase from '../../../../Hooks/useFirebase';

const Login = () => {
    const [loginData,setLoginData] = useState({})
    const {loginUser,isLoading,user,signInWithGoogle} = useFirebase();

const location = useLocation();
const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
       loginUser(loginData.email,loginData.password,location,history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location,history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
  <Grid item sx={{mt:25}} xs={12} md={6}>
    <Typography variant="body1" gutterBottom>LogIn</Typography>
{!isLoading && <form onSubmit={handleLoginSubmit}>
    <TextField
     sx={{width:'75%',m:1}}
     id="standard-basic"
     type="email"
     name="email"
     onChange={handleOnChange}
      label="Your Email"
       variant="standard" />
    <TextField
    sx={{width:'75%',m:1}}
     id="standard-basic"
     type="password"
     name="password"
     onChange={handleOnChange}
      label="Your Password"
       variant="standard" />
       <Button sx={{width:'75%',mt:5}} type="submit" variant="contained">LogIn</Button>
       <NavLink style={{textDecoration:'none'}} to="/register">
           <Button variant="text">New User? Please Register Here</Button>
       </NavLink>
    </form>}
    <p>.......................................</p>
    <Button  onClick={handleGoogleSignIn} variant="contained">Google SignIn</Button>
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

export default Login;