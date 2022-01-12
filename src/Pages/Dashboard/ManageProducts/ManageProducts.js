import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(" https://shielded-caverns-45156.herokuapp.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      axios
        .delete(` https://shielded-caverns-45156.herokuapp.com/products/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            alert("product deleted");
            const restData = products.filter((order) => order._id !== id);
            setProducts(restData);
          }
        });
    }
  };
  return (
    <Container>
      <h2>All products</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">Product Image</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center">
                  <img
                    style={{ width: 50, height: 50 }}
                    src={product.img}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    onClick={() => handleDelete(product._id)}
                    sx={{ bgcolor: "error.main" }}
                    variant="contained"
                  >
                    {" "}
                    Delete Product{" "}
                  </Button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageProducts;




















