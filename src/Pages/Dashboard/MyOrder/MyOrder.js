import { Card, CardContent, CardMedia, Container, Grid, Typography,item, Button, getPopoverUtilityClass, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
const MyOrder = () => {
    const {user,isLoading} = useAuth();
    const [item,setItem] = useState([])
    const [deleteControl,setDeleteControl] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/myOrderItem/${user.email}`)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    // Handle Delete
    // handleDelete = (id) => {
    //     fetch(`http://localhost:5000/deleteOrder/${id}`,{
    //         method:'DELETE',
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //       console.log(data)  
    //     })
    //     alert("Deleted Successfully");
    //    this.getPost();
       
    // }
    if(isLoading){
        return <CircularProgress color="secondary" />
    }

    // const handleDeleteItem = id => {
    // const url = `http://localhost:5000/deleteControl/${id}`;
    // fetch(url,{
    //     method:'DELETE'
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     if(data.deletedCount) {
    //         // const remaining = item.filter((pd) => pd._id !== id);
    //         // setItem(remaining);
    //         setDeleteControl(!deleteControl)
    //     }
        
    // })
    // alert("delete?")
    // }
    
    return (
        <Container>
            <h1>My Order {item.length}</h1>
            <Box >
                <Box style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"5%"}}>
                    
                {
                    
    item.map(pd=>(
        
        <Card 
        key={pd._id}
        sx={{ maxWidth: 600,mx:"5%"}}>
            
  <CardActionArea>
    <CardMedia
      style={{ width: '100%', height: '300px'}}
      image={pd.imageUrl}
      alt="green iguana"
    />
    <CardContent >
      <Typography gutterBottom variant="h5" component="div">
       Product Name: {pd.productName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Description: {pd.productDescription}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       Price:$ {pd.productPrice}
      </Typography> 
    </CardContent>
  </CardActionArea>
  <Button  style={{ backgroundColor:"salmon",color:"#fff",fontWeight:"bold",marginBottom:"18%",marginTop:"10px"}} >Delete</Button>
</Card>

    ))
}
                </Box>
                
            </Box>
        </Container>
    );
};

export default MyOrder;



















