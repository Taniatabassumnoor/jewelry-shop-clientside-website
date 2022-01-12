import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import ProductDetails from "./ProductDetails";



const PurchaseProduct = () => {
  const { id } = useParams();
  return (
    <div>
      
      <Container>
        <ProductDetails key={id} id={id}></ProductDetails>
      </Container>
      
    </div>
  );
};

export default PurchaseProduct;