import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CustomerLogin.css";

function CustomerSignup() {
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
            <u>Signup</u>
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
              type="number"
              id="outlined-required"
              label="Mobile number"
              style={{ width: "100%" }}
            />
            <br></br>
            <TextField
              required
              id="outlined-required"
              label="Email id"
              style={{ width: "100%" }}
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
            <Link to="/customerlogin">
              <Button
                variant="contained"
                component="span"
                style={{ width: "100%" }}
              >
                Signup
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerSignup;
