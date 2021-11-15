import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const LoginUser = ({children,...rest}) => {
    const {user,isLoading} = useAuth();
    if(isLoading){
      return  <CircularProgress color="success" />
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email  ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default LoginUser;