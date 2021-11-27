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
        fetch('https://shielded-caverns-45156.herokuapp.com/addProduct', {
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



// import React from 'react';
// import { useForm } from 'react-hook-form';
// import './AddProduct.css';
// import { useHistory } from 'react-router';
// import useFirebase from '../../../Hooks/useFirebase';
// const AddProduct = () => {
//     const {user} = useFirebase();
//     const {
//       register,
//       handleSubmit,
//       watch,
//       formState: { errors },
//     } = useForm();
  
//     const onSubmit = (data) => {
//         alert('submit?');
//       fetch("https://shielded-caverns-45156.herokuapp.com/addExplore", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(data),
//       })
//         .then((res) => res.json())
//         .then((result) => console.log(result));
//       console.log(data);
//     };
//     const history = useHistory()
//     const handleAppointment = () => {
//         history.push('/home')
//     }
//     return (
//         <div>
//         <h1 className=" pt-5 text-danger fw-bold head">Add A product</h1>
//         <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>      
//   {/* <input defaultValue={user.displayName} {...register("name")} />
//   <input defaultValue={user.email} {...register("email", { required: true })} /> */}
//   {errors.email && <span className="error">This field is required</span>}
//   <input placeholder="Image Url" defaultValue="" {...register("imageUrl")} />
//   <input placeholder="Product Name" defaultValue="" {...register("productName")} />
//   <input placeholder="Description" defaultValue="" {...register("description")} />
//   <input placeholder="Price" defaultValue="" {...register("price")} />
//   <input onClick={handleAppointment} className="appointment-btn" type="submit" />
// </form>
//     </div>
//     );
// };

// export default AddProduct;