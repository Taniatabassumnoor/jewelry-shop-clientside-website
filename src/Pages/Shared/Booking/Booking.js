import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css';
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Booking = () => {
    const history = useHistory()
    // const handleAppointment = () => {

    //     history.push('/home')
    // }
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
            fetch(`https://shielded-caverns-45156.herokuapp.com/`,{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
                
            })
            .then(res=>res.json())
                .then(result=>console.log(result))
        console.log(data)
   
    };
    const { serviceId } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://shielded-caverns-45156.herokuapp.com/${serviceId}`)
            .then((res) => res.json())
            .then((result) => {
                setService(result)
                reset(result)
            });
    }, [reset]);
    
    return (
        <div>
            <h1 className=" pt-5 text-danger fw-bold head">Booking Form</h1>
            <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
  <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} />
                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input defaultValue={service?.imageUrl}{...register("imgUrl")} />
                            <input defaultValue={service?.productName} {...register("productname")} />
                            <input defaultValue={service?.productDescription} {...register("productdescription")} />
                            <input defaultValue={service?.productPrice} {...register("productprice")} />
                            <input placeholder="Phone" defaultValue="" {...register("Phone")} />
                            <input placeholder="Address" defaultValue="" {...register("Address")} />
                            <input placeholder="City" defaultValue="" {...register("City")} />
                            <input
                type="submit"
                value="Order now"
                className="btn btn-info w-50"
              />
                        </form>
  </Grid>
  <Grid item xs={12} md={6}>
  <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
                            <CardMedia
                                component="img"
                                style={{ width: '100%', height: '350px', margin: '0 auto' }}
                                image={service?.imageUrl
                                }
                                alt="green iguana"
                            />
                            <CardContent sx={{p:3}} >
                                <Typography sx={{p:1}} variant="h5" component="div">
                                Product Name: {service?.productName}
                                </Typography>
                                <Typography sx={{p:1,color:'gray',fontSize:'17px'}} variant="h6" component="div">
                                 Description: {service?.productDescription}
                                </Typography>
                                <Typography sx={{p:1}} variant="h6" component="div">
                                Price: $ {service?.productPrice}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
  
  </Grid>
</Grid>

        </div>
    );
};

export default Booking;