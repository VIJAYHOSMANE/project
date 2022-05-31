import { Button, Container, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Helpers/Sidebar";
import "./AddUser.css";

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    address: "",
    age: "",
    adhaarid: "",
    mobile: "",
  });
  const { name, address, age, adhaarid, mobile } = user;
  const onInputChange = (e: any) => {
    console.log(e.target.value);
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <form>
        <div className="addUser">
          <div className="userinputs">
            <h2>Add New User</h2>
            {/* <div className="form"> */}
            <TextField
              required
              id="outlined-required"
              label="Customer Name"
              style={{ width: "500px" }}
              value={name}
              onChange={(e) => onInputChange(e)}
            />
            <br></br>
            <TextField
              required
              id="outlined-basic"
              label="Address"
              value={address}
              onChange={(e) => onInputChange(e)}
            />
            <br></br>
            <TextField
              required
              id="outlined-required"
              label="Age"
              value={age}
            />
            <br></br>
            <TextField
              required
              id="outlined-required"
              label="Adhaar Id"
              value={adhaarid}
              onChange={(e) => onInputChange(e)}
            />
            <br></br>
            <TextField
              required
              id="outlined-required"
              label="Mobile Number"
              value={mobile}
              onChange={(e) => onInputChange(e)}
            />
            <br></br>

            <Link to="/CustomerDetails">
              <Button variant="contained" component="span">
                Add User
              </Button>
            </Link>
          </div>
        </div>
      </form>
      {/* </div> */}
    </Container>
  );
}

export default AddUser;
