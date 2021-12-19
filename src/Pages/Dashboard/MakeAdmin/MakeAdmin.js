import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('')
    const [success,setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = {email,isAdmin:false};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            setEmail(data)
            if(data.modifiedCount){
            setSuccess(true)
            console.log(data)
            setEmail('')
            }
        })
       
    }
    return (
        <div>
            <h1>I Am Admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField
            label="Email"
             variant="standard"
             type="email"
             onBlur={handleOnBlur}
              />
             <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;