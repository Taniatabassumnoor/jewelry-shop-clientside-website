import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import axios from "axios";
import { useHistory } from "react-router";
import useAuth from "../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PlaceOrderModal = ({
  product,
  openPlaceOrder,
  handleClosePlaceOrder,
}) => {
  const { user } = useAuth();
  const history = useHistory();

  const initialInfo = {
    customerName: user.displayName,
    email: user.email,
  };

  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setOrderInfo(newInfo);
  };

  const handleOrderSubmit = (e) => {
    const data = product;
    delete data._id;
    data.orderInfo = orderInfo;
    data.status = "Pending";
    axios
      .post("http://localhost:5000/orders", data)
      .then((res) => console.log(res.data))
      .finally(() => history.push("/dashboard/myOrders"));
    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openPlaceOrder}
      onClose={handleClosePlaceOrder}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openPlaceOrder}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            {product.name}
          </Typography>
          <form onSubmit={handleOrderSubmit}>
            <TextField
              id="outlined-size-small"
              name="customerName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
              sx={{ width: "90%", m: 1 }}
            />
            <TextField
              id="outlined-size-small"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
              sx={{ width: "90%", m: 1 }}
            />
            <TextField
              id="outlined-size-small"
              name="address"
              onBlur={handleOnBlur}
              placeholder="Your Full Address"
              size="small"
              sx={{ width: "90%", m: 1 }}
            />
            <TextField
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              placeholder="Your Phone Number"
              size="small"
              sx={{ width: "90%", m: 1 }}
            />

            <Button
              sx={{ textAlign: "center" }}
              type="submit"
              variant="contained"
              onClick={handleClosePlaceOrder}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default PlaceOrderModal;