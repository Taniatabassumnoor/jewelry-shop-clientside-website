import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const [addProduct,setAddProduct] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;

        const value = e.target.value;
        const newInfo = { ...addProduct }
        newInfo[field] = value;
        console.log(newInfo, field, value)
        setAddProduct(newInfo)
    }

    const addProductIs = {
        ...addProduct
    }
    const handleAddProductSubmit = e => {
        alert('submit?');
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProductIs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault();
    }
   
    return (
        <div>
           <h1>Please Add a Product</h1> 
           <form onSubmit={handleAddProductSubmit}>
           <TextField
            sx={{ width: '75%',m: 1 }}
           id="standard-basic" 
           name="imageUrl"
           onBlur={handleOnBlur}
           label="Image Url" 
           variant="standard" /> <br />
           <TextField
             sx={{ width: '75%',m: 1 }}
           id="standard-basic" 
           name="productName"
           onBlur={handleOnBlur}
           label="Product Name" 
           variant="standard" /> <br />
           <TextField
             sx={{ width: '75%',m: 1 }}
           id="standard-basic"
           name="productDescription" 
           onBlur={handleOnBlur}
           label="Description" 
           variant="standard" /> <br />
           <TextField
             sx={{ width: '75%',m: 1 }}
           id="standard-basic" 
           name="productPrice"
           onBlur={handleOnBlur}
           label="Price" 
           variant="standard" /> <br /> <br />
           
           <Button type="submit" variant="contained">Submit</Button>
           </form>
        </div>
    );
};

export default AddProduct;