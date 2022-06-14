import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CustomerLogin.css";

function CustomerLogin() {
  // const [client, setClient] = useState();
  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   alert("Enter the details");
  // };
  return (
    <div className="main">
      <form className="Usercard">
        <div className="addClient">
          <h2>
            <u>Login/Signup</u>
          </h2>
          <div className="clientinputs">
            <TextField
              required
              id="outlined-required"
              label="User Name"
              style={{ width: "100%" }}
              // value={client.name}
              // onChange={(e) => {
              //   setClient({ ...client, name: e.target.value });
              //   console.log(client);
              // }}
            />

            <br></br>
            <TextField
              required
              type="password"
              id="outlined-required"
              label="Password "
              style={{ width: "100%" }}
              // value={client.phone}
              // onChange={(e) => {
              //   setClient({ ...client, phone: e.target.value });
              //   console.log(client);
              // }}
            />
            <br></br>

            {/* {(client.name.length &&
              client.address.length &&
              client.age.length &&
              client.adhaarid.length &&
              client.phone.length) !== 0 && ( */}
            <Link to="/customermain">
              <Button
                variant="contained"
                component="span"
                style={{ width: "100%" }}
              >
                Login
              </Button>
            </Link>
            {/* )} */}
            <p>Not Signed in yet?</p>
            <Link to="/customersignup">
              <h3 style={{ marginTop: "0", marginLeft: "0" }}>Sign up</h3>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerLogin;
