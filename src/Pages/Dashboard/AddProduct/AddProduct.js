import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";
const AddProduct = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  // onsubmit function
  const onSubmit = (data) => {
    axios.post("https://shielded-caverns-45156.herokuapp.com/products", data).then((res) => {
      if (res.data.insertedId) {
        reset();
      }
    });
  };
  setValue("status", "pending");
  return (
    <div className="pt-5 form-design">
      <h3 className="text-light pt-5">Add Products</h3>
      {/* add product form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }}
          placeholder="Img-url"
          {...register("img")}
        />{" "}
        <br />
        {/* product title */}
        <input
          style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }}
          placeholder="Name"
          type="text"
          {...register("name")}
        />{" "}
        <br />
        {/* description */}
        <input
          style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }}
          placeholder="description"
          type="text"
          {...register("description")}
        />{" "}
        <br />
        {/* Price */}
        <input
          style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }}
          placeholder="Price"
          type="number"
          {...register("price")}
        />{" "}
        <br />
        {/* status */}
        <input
          style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }}
          className="d-none"
          type="text"
          {...register("status")}
        />{" "}
        <br />
        <input
          type="submit"
          className="rounded-pill btn btn-light"
          value="Add service"
        />
      </form>
    </div>
  );
};

export default AddProduct;