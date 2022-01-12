import { Alert } from "@mui/material";
import React, { useState } from "react";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  const admin = {
    textAlign: "center",
    marginTop: "100px",
  };
  return (
    <div>
      <form onSubmit={handleAdminSubmit} style={admin}>
        <input
          type="email"
          label="email"
          style={{
            width: "50%",
          }}
          placeholder="Email here"
          onBlur={handleOnBlur}
        />{" "}
        <br /> <br />
        <button
          style={{
            width: "50%",
          }}
          type="submit"
          className="btn btn-dark"
        >
          Make Admin
        </button>
      </form>
      {success && <Alert variant="alert">Make Admin Successfully</Alert>}
    </div>
  );
};
export default MakeAdmin;